"use strict";
exports.__esModule = true;
var $ = require("jquery");
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('World!');
console.log(greeter.greet());
$('#a').html('123456');
