// load 3rd party modules
// load lodash
import _ from 'lodash';
//import * as _ from 'lodash';  // TODO: this syntax doesn't work for lodash
import * as d3 from 'd3';
import Keycloak from 'keycloak-js';

function main(): void {

    // initialize keycloak from client installation json from server
    //let keycloak = Keycloak("data/keycloak.json");

    let keycloak = Keycloak({
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
            console.log(_.camelCase("Test Lodash"));
            d3.json('data/data.json').then((data)=>{
                console.log(data);
            });
        } else {
            console.log("user not authenticate...");
            window.location.href = 'error.html';
        }
    }).error(function() {
        console.log("can not initialize keycloak...");
        window.location.href = 'error.html';
    });
}

main();