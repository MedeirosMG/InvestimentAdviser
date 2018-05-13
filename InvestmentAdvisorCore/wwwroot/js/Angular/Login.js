app.controller('controllerLogin', ['$scope', 'ListService','$rootScope','httpRequest', function ($scope, ListService, $rootScope,httpRequest) {
    var customAlert = new CustomAlert();

    $scope.logarSistema = function(){
        //Retorna caso não tiver login ou senha
        if(typeof $scope.loginEmail == "undefined" || typeof $scope.loginPassword == "undefined")
            return;

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