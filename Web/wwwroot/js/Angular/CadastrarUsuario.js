app.controller('cadastrarUser', ['$scope', 'ListService', '$rootScope', 'httpRequest', function ($scope, ListService, $rootScope, httpRequest) {
    var customAlert = new CustomAlert();
    $scope.hideRisco = false;
    $scope.riscosPossiveis = [];

    $scope.user = {};

    $scope.validaEmails = function () {
        return ($scope.user.Email == $scope.confirmacaoEmail || $scope.confirmacaoEmail == undefined);
    };

    $scope.validaSenhas = function () {
        return ($scope.user.Password == $scope.confirmacaoSenha || $scope.confirmacaoSenha == undefined);
    };

    $scope.validaRisco = function () {
        $scope.hideRisco = $scope.user.IdRiskAvailability == undefined;
        return ($scope.user.IdRiskAvailability == undefined);
    };

    $scope.carregaRiscosDeInvestimento = function () {
        $.ajax({
            url: httpRequest.returnConexao() + '/RiskAvailability/Get',
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.Success) {
                    console.log(data);
                    $scope.riscosPossiveis = data.Content;
                    $scope.$apply();
                } else {
                    customAlert.alertError("Erro", data.Messages[0].Content);
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    };

    $scope.cadastrarUser = function () {
        if ($scope.validaRisco() || !$scope.formCadastro.$valid || !$scope.validaSenhas() || !$scope.validaEmails()) {
            return;
        }

        $.ajax({
            url: httpRequest.returnConexao() + '/User/Add',
            type: "POST",
            data: JSON.stringify(
                $scope.user
            ),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.Success) {
                    customAlert.alertSuccess_("Sucesso", "Cadastro realizado com sucesso.", function () {
                        location.href = "/Login";
                    });
                    
                    $scope.$apply();
                } else {
                    customAlert.alertError("Erro", data.Messages[0].Content);
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
}]);