//Service para funções globais entre os controllers
var Services = angular.module('Services', [])
    .service('ListService', function () {

        this.carregaLista = function (accounting, AbaAtiva) {

            //var accounting = []; // Vetor com todas as informações
            var listaFinal = []; // Vetor com filtro de acordo com pagina ativa

            var temp = accounting;

            if (typeof accounting != "undefined") {
                var quantidade = accounting.length; // retorna a quantidade de itens na lista    

                var UltimoItem = quantidade; // define o index do ultima item da lista
                var indexInicial = 10 * (AbaAtiva - 1); // define o index inicial do primeiro item da lista (de acordo com o numero da aba selecionado)
                var indexFinal = indexInicial + 10; // Define que seão colocados 5 itens na lista

                if (indexFinal > UltimoItem) { // Verifica se a ultima linha calculada não é maior que o ultimo item da lista
                    indexFinal = UltimoItem;
                }

                if (AbaAtiva == '-1') {

                    indexInicial = 0;
                    indexFinal = UltimoItem;
                }

                for (i = indexInicial; i < indexFinal; i++) { //Filtra e coloca no novo vetor apenas as interações da aba desejada
                    listaFinal.push(accounting[i]);
                }
            }

            return listaFinal;
        }

        this.tamanhoDaLista = function (lista) {
            return Math.ceil(lista.length / 10);
        }

    });

Services.service('httpRequest', function () {

    this.returnConexao = function () {
        return "http://localhost:49359/api";
    };

    this.GetCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

});

// Criação do modulo usado na pagina, com injeção do serviço criado anteriormente
var app = angular.module('MyApp', ['Services']);

// Filtro para fazer um for simples no html
app.filter('range', function () {
    return function (n) {
        var res = [];
        for (var i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    };
});

// Diretiva para observar mudanças no dropdown e recarregar a view
app.directive('selectWatcher', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        link: function (scope, element, attr) {
            var last = attr.last;
            var first = attr.first;
            if (last === "true") {
                $timeout(function () {
                    $(element).parent().selectpicker('refresh');
                });
            }
            $(element).on('change', function () {
                $(element).parent().selectpicker('refresh');
            });
        }
    };
}]);

// Diretiva para observar mudanças na tabela bootstrap e recarregar a view
app.directive('tableWatcher', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        link: function (scope, element, attr) {
            var last = attr.last;
            var first = attr.first;
            if (last === "true") {
                $timeout(function () {
                    $('#table_investimentos_sugeridos').bootstrapTable();
                });
            }
        }
    };
}]);

//Diretiva para adiconar botão na bootstrap table
app.directive('buttonTable', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        link: function (scope, element, attr) {
            $(element).on('post-body.bs.table', function () {
                $(this).find(".button").each(function(){
                    $(this).html("<center><a class='glyphicon glyphicon-edit' href='#'></a></center>");
                });
            });
        }
    };
}]);

//Diretiva para atualizar valor do select caso mude no scope
app.directive('selectUpdate', function ($timeout, $rootScope) {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newValue) {
                $timeout(function () {
                    if (typeof (newValue) != "undefined") {
                        $(element).val(newValue).trigger("change");
                        scope.$apply();
                    }
                });
            });
        }
    };
});

app.controller('controllerGlobal', ['$scope', 'ListService', '$rootScope', 'httpRequest', function ($scope, ListService, $rootScope, httpRequest) {
    var customAlert = new CustomAlert();
    $scope.linkAtivo = -1;
    $scope.user = null;

    document.cookie = "username=medeiros_mg@hotmail.com";

    //Verifica o link atual para atualizar o selecionado na view 
    $scope.validaLink = function(){
        if(window.location.href.indexOf("InvestimentosRealizados") != -1)
            $scope.linkAtivo = 3;
        else if(window.location.href.indexOf("ConsultaPerfil") != -1)
            $scope.linkAtivo = 2;
        else if(window.location.href.indexOf("Login") != -1)
            $scope.linkAtivo = -1;
        else
            $scope.linkAtivo = 1;

    };

    $scope.logout = function () {
        document.cookie = "username=logoff";
        $scope.validaLogin();
        console.log("ok");
    };

    $scope.validaLogin = function(){
        document.cookie = "username=guilherme.albertini@outlook.com";
        $.ajax({
            url: httpRequest.returnConexao() + '/User/GetByEmail',
            type: "GET",
            data: {
                email: httpRequest.GetCookie("username")
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $scope.user = data.Content;
                $scope.$apply();
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
}]);



///GUILHERME



app.controller('controllerSugeridos', ['$scope', 'ListService', '$rootScope', 'httpRequest', function ($scope, ListService, $rootScope, httpRequest) {
    var customAlert = new CustomAlert();

    $scope.showMine = true;

    $scope.getUserRisk = function () {
        $.ajax({
            url: httpRequest.returnConexao() + '/User/GetByEmail',
            type: "GET",
            data: {
                email: httpRequest.GetCookie("username")
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $scope.getSuggestInvestments(data.Content.IdRiskAvailability);
                $scope.$apply();
            },
            error: function (data) {
                console.log(data);
            }
        });
    };

    $scope.getSuggestInvestments = function (typeRisk) {
        $scope.showMine = true;
        $.ajax({
            url: httpRequest.returnConexao() + '/Investment/GetByRisk',
            type: "GET",
            data: {
                idRiskAvailability: typeRisk
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $scope.dadosTabela = data.Content;
                $scope.$apply();
                $('#table_investimentos_sugeridos').bootstrapTable('load', data.Content);
            },
            error: function (data) {
                console.log(data);
            }
        });
    };

    $scope.getAllInvestments = function () {
        $scope.showMine = false;
        $.ajax({
            url: httpRequest.returnConexao() + '/Investment/Get',
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $scope.dadosTabela = data.Content;
                $scope.$apply();
                $('#table_investimentos_sugeridos').bootstrapTable('load', data.Content);
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
}]);

app.controller('controllerFeitos', ['$scope', 'ListService', '$rootScope', 'httpRequest', function ($scope, ListService, $rootScope, httpRequest) {
    var customAlert = new CustomAlert();
    
    $scope.getUserInvestments = function () {
        $.ajax({
            url: httpRequest.returnConexao() + '/User/GetByEmail',
            data: {
                email: httpRequest.GetCookie("username")
            },
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $scope.getDoneInvestments(data.Content.IdUser);
            },
            error: function (data) {
                console.log(data);
            }
        });
    };

    $scope.getDoneInvestments = function (idUser_) {
        $.ajax({
            url: httpRequest.returnConexao() + '/HistoricInvestment/GetByUser',
            type: "GET",
            data: {
                idUser: idUser_
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $scope.dadosTabela = data.Content;
                $scope.$apply();

                var Investment = [];

                $.each(data.Content, function (index, data) {
                    Investment.push(data.Investment);
                });

                $('#table_investimentos_feitos').bootstrapTable('load', Investment);
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
}]);
