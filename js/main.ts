// load 3rd party modules
// load lodash
import _ from 'lodash';
//import * as _ from 'lodash';  // TODO: this syntax doesn't work for lodash
import $ from 'jquery';
//import * as $ from 'jquery';  // TODO: this syntax doesn't work for lodash
import * as d3 from 'd3';
import Keycloak from 'keycloak-js';

function main(): void {

    let baseUri = window.location.pathname.substring(0, window.location.pathname.indexOf('/nodejs-playground-web'));
    let LOGIN_URL = baseUri + '/nodejs-playground-ws/login' + "?target=" + encodeURIComponent(window.location.pathname);
    let LOGOUT_URL = baseUri + '/nodejs-playground-ws/logout' + "?target=" + encodeURIComponent(window.location.pathname);

    // initialize keycloak from client installation json from server
    //let keycloak = Keycloak("data/keycloak.json");

    // initialize with simple config
    let keycloak = Keycloak({
        url: 'http://localhost/auth',
        realm: 'Playground',
        clientId: 'nodejs-playground-web'
    });

    keycloak.init({
        onLoad: 'check-sso',
        checkLoginIframe: false
    }).success(function (authenticated) {
        if (authenticated) {
            //
            console.log("authenticated...");
            // add logout link
            let logoutLink = document.getElementById("logoutLink");
            logoutLink.setAttribute("href", LOGOUT_URL);

            if ($) {
                console.log("jQuery package loaded");
                $.get( "/nodejs-playground-ws/session", (resp) => {
                    console.log(resp);
                });
            }

            if (_) {
                //console.log(_.camelCase("Package Lodash Loaded"));
                console.log("lodash package loaded");
            }

            if (d3) {
                d3.json('data/data.json').then((data)=>{
                    console.log("d3 package loaded");
                    console.log(data);
                });
            }

        } else {
            console.log("user not authenticate...");
            window.location.href = LOGIN_URL;
        }
    }).error(function() {
        console.log("can not initialize keycloak...");
        window.location.href = 'error.html';
    });
}

main();