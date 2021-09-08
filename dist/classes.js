"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, password, email, age) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
    }
    User.prototype.checkPassword = function () {
        if (this.password.length > 5) {
            console.log("Password is long enough");
        }
        else {
            console.log("Password is too short");
        }
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, password, email, age) {
        var _this = _super.call(this, name, password, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.getId = function () {
        console.log(this.id);
    };
    return Member;
}(User));
var christian = new User("Christian", "Lun", "christian@drakryggen.com", 31);
console.log(christian.name);
christian.checkPassword();
var carl = new Member(123456789, "Carl", "gitarrkungen", "carl@gmail.com", 28);
console.log(carl.id);
carl.checkPassword();
carl.getId();
