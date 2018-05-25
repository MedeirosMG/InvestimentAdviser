app.controller('controllerLogin', ['$scope', 'ListService', '$rootScope', 'httpRequest', function ($scope, ListService, $rootScope, httpRequest) {
    var customAlert = new CustomAlert();
    $scope.cadastrarUser = false;
    $scope.user = {};
    $scope.temp = {};

    $scope.validaUsuario = function () {

        $.ajax({
            url: httpRequest.returnConexao() + '/User/GetByEmail',
            type: "GET",
            data: JSON.stringify({
                Email: $scope.loginEmail
            }),
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.success) {
                    console.log("ok");
                    $scope.autenticar();
                }
                else {
                    customAlert.alertWarning("Cadastre uma nova senha.")
                    $scope.cadastrarUser = true;
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    };

    $scope.logarSistema = function () {
        if ($scope.cadastrarUser) {
            if (typeof $scope.user.loginNovaSenha == "undefined" || typeof $scope.user.loginConfirmarSenha == "undefined" || $scope.user.loginNovaSenha == "" || $scope.user.loginConfirmarSenha == "")
                return;

            $scope.cadastrarSenha();
        } else {
            if (typeof $scope.temp.loginEmail == "undefined" || typeof $scope.temp.loginPassword == "undefined" || $scope.temp.loginEmail == "" || $scope.temp.loginPassword == "") {
                console.log("ër");
                return;
            }

            $scope.validaUsuario();
        }
    };

    $scope.cadastrarSenha = function () {
    };

    $scope.autenticar = function(){

        $.ajax({
            url: httpRequest.returnConexao() + '/Login/validaLogin',
            type: "GET",
            data: { 
                email: $scope.loginEmail,
                password: $scope.loginPassword
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    customAlert.alertSuccess("Sucesso!", data.message);
                }
                else
                    customAlert.alertError("Erro!", data.message);
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
}]);