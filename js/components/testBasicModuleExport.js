System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function testExportFunction() {
        console.log("testExportFunction");
    }
    exports_1("testExportFunction", testExportFunction);
    var Person, Company, testExportVariable;
    return {
        setters: [],
        execute: function () {
            //
            Person = /** @class */ (function () {
                function Person(name, age) {
                    this.name = name;
                    this.age = age;
                }
                return Person;
            }());
            exports_1("Person", Person);
            Company = /** @class */ (function () {
                function Company(name, size) {
                    this.name = name;
                    this.size = size;
                }
                return Company;
            }());
            exports_1("Company", Company);
            exports_1("testExportVariable", testExportVariable = ["1", "2", "3"]);
        }
    };
});
//# sourceMappingURL=testBasicModuleExport.js.map