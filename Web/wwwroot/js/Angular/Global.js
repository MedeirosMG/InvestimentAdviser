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

app.controller('controllerGlobal', ['$scope', 'ListService','$rootScope', function ($scope, ListService, $rootScope) {
    
    $scope.linkAtivo = -1;

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

    $scope.validaLogin = function(){
        return false;
    };

}]);