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

//Diretiva para adiconar botão na bootstrap table
app.directive('tableHtml', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        link: function (scope, element, attr) {
            $(element).on('post-body.bs.table', function () {
                $(this).find("td").each(function () {
                    if ($(this).html().indexOf("http") != -1) {
                        $(this).html("<a href='" + $(this).text() + "'>Link Sugerido</a>");
                    } else if (Number.isInteger(parseInt($(this).text()))) {
                        $(this).html("<center><a href='#'" +
                            " onclick=\"adicionaInvestimento(\'" + $(this).text() + "')\"><span class='glyphicon glyphicon-share'></span></a ></center > ");
                    }
                });
            });

            $(element).find("td").each(function () {
                if ($(this).html().indexOf("http") != -1) {
                    $(this).html("<a href='" + $(this).text() + "'>Link Sugerido</a>");
                } else if ($(this).html().indexOf("-") != -1) {
                    var investimento = $(this).parent("tr").find("td").first().text();

                    $(this).html("<center><a href='#'" +
                        " onclick='adicionaInvestimento(" + investimento + ")'><span class='glyphicon glyphicon-share'></span></a ></center > ");
                }
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

    //Verifica o link atual para atualizar o selecionado na view 
    $scope.validaLink = function () {
        if (window.location.href.indexOf("InvestimentosRealizados") != -1)
            $scope.linkAtivo = 3;
        else if (window.location.href.indexOf("ConsultaPerfil") != -1)
            $scope.linkAtivo = 2;
        else if (window.location.href.indexOf("Login") != -1)
            $scope.linkAtivo = -1;
        else
            $scope.linkAtivo = 1;

    };

    $rootScope.$on("callBackUser", function (event, func) {
        func($scope.user);
    });

    $scope.logout = function () {
        document.cookie = "username=logoff";
        location.href = "/Home";
    };

    $scope.erroNLogado = function () {
        customAlert.alertWarning("Atenção! Faça login no sistema para acessar essa funcionalidade.");
    };

    $scope.alterarCadastro = function () {
        console.log($scope.user);

        $('#alterarCadastro').modal();
        $("#nome_").val($scope.user.Name);
        $("#nome_").trigger("change");

        $("#email_").val($scope.user.Email);
        $("#email_").trigger("change");

        $("#cpf_").val($scope.user.Cpf);
        $("#cpf_").trigger("change");

        $("#nc_").val($scope.user.NumberChildren);
        $("#nc_").trigger("change");

        $("#volume_").val($scope.user.VolumAvailable);
        $("#volume_").trigger("change");

        $("#Password").val($scope.user.Password);
        $("#Password").trigger("change");

        $("#IdUser").val($scope.user.IdUser);
        $("#IdUser").trigger("change");

        $("#IdRiskAvailability").val($scope.user.IdRiskAvailability);
        $("#IdRiskAvailability").trigger("change");
        
    };

    $scope.salvarAlterarCadastro = function () {
        $.ajax({
            url: httpRequest.returnConexao() + '/User/Update',
            type: "POST",
            data: JSON.stringify($scope.user),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log(data);
                customAlert.alertSuccess("Sucesso!", "Cadastro alterado com sucesso!");
                $scope.$apply();
                $('#alterarCadastro').modal('hide');
                location.href = "/Home";
            },
            error: function (data) {
                console.log(data);
            }
        });
    };

    $scope.validaLogin = function () {   
        if (httpRequest.GetCookie("username") == "logoff") {
            $scope.user = null;
            return;
        }

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

function adicionaInvestimento(data) {
    $("#modalInvestimento").modal();

    $("#investimento_").val(data);
    $("#investimento_").trigger("change");
};

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

    $scope.inserirInvestimento = function () {
        if ($scope.ValorInvestido == undefined || $scope.dataInvestido == undefined)
            return;

        
        $rootScope.$emit("callBackUser", function (user) {
            var objeto = {
                IdInvestment: $scope.id_Investimento,
                ValueInvested: $scope.ValorInvestido,
                Date: $scope.dataInvestido,
                IdUser: user.IdUser
            }

            $.ajax({
                url: httpRequest.returnConexao() + '/HistoricInvestment/Add',
                type: "POST",
                data: JSON.stringify(objeto),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    if (data.Success) {
                        customAlert.alertSuccess_("Sucesso", "Investimento registrado com sucesso.", function () {
                            $("#modalInvestimento").modal("hide");
                        });
                    } else {
                        customAlert.alertError("Erro", data.Messages[0].Content);
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            });
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
                    var obj = {
                        Name: data.Investment.Name,
                        PercentReturn: data.Investment.PercentReturn.toPrecision(2) + "%",
                        estimativaRetorno: (data.Investment.PercentReturn * data.ValueInvested).toPrecision(10),
                        valorInvestido: "R$ " + data.ValueInvested,
                        dataInvestido: data.Date,
                        Details: data.Investment.Details
                    };
                    
                    Investment.push(obj);
                });

                $('#table_investimentos_feitos').bootstrapTable('load', Investment);
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
}]);
