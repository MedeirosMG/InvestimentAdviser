app.controller('controllerLogin', ['$scope', 'ListService', '$rootScope', 'httpRequest', function ($scope, ListService, $rootScope, httpRequest) {
    var customAlert = new CustomAlert();
    $scope.user = {};

    $scope.autenticar = function () {

        if ($scope.loginEmail == undefined || typeof $scope.loginPassword == "undefined" || $scope.loginEmail == "" || $scope.loginPassword == "")
            return;

        $.ajax({
            url: httpRequest.returnConexao() + '/User/Login',
            type: "POST",
            data: JSON.stringify({ 
                Email: $scope.loginEmail,
                Password: $scope.loginPassword
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.Success) {
                    document.cookie = "username=" + data.Content.Email;
                    location.href = '/Home'
                    customAlert.alertSuccess("Sucesso!", data.message);
                }
                else {
                    $scope.erroLogin = data.Messages[0].Content;
                    $scope.$apply();
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
}]);