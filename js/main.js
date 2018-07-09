System.register(["lodash", "d3", "keycloak-js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function main() {
        // initialize keycloak from client installation json from server
        //let keycloak = Keycloak("data/keycloak.json");
        var keycloak = keycloak_js_1.default({
            url: 'http://localhost:9080/auth',
            realm: 'Test',
            clientId: 'nodejs-playground-web'
        });
        keycloak.init({
            onLoad: 'login-required',
            //onLoad: 'check-sso',
            checkLoginIframe: false
        }).success(function (authenticated) {
            if (authenticated) {
                console.log("authenticated...");
                console.log(lodash_1.default.camelCase("Test Lodash"));
                d3.json('data/data.json').then(function (data) {
                    console.log(data);
                });
            }
            else {
                console.log("user not authenticate...");
                window.location.href = 'error.html';
            }
        }).error(function () {
            console.log("can not initialize keycloak...");
            window.location.href = 'error.html';
        });
    }
    var lodash_1, d3, keycloak_js_1;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            },
            function (keycloak_js_1_1) {
                keycloak_js_1 = keycloak_js_1_1;
            }
        ],
        execute: function () {
            main();
        }
    };
});
//# sourceMappingURL=main.js.map