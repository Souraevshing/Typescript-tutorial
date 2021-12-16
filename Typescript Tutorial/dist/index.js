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
console.log("Hello TS :)");
var age = 1;
console.log("Age is " + age);
var Name = 'saurav';
console.log("Name is " + Name);
var a = "'any' is for any data types";
console.log("any data type : " + a);
var array = [1, 2, 3];
console.log("Array : " + array);
var tuple = [2, 'saurav', 'kr', 2, 2];
console.log("Tuple : " + tuple);
var emp = [1, [2, 3, 4], 'employee'];
console.log("Employee details : " + emp);
var union = 2000000;
console.log("Union : " + union);
var e1;
(function (e1) {
    e1[e1["Sun"] = 0] = "Sun";
    e1[e1["Mon"] = 1] = "Mon";
    e1[e1["Tue"] = 2] = "Tue";
    e1[e1["Wed"] = 3] = "Wed";
})(e1 || (e1 = {}));
console.log("Enums are : " + e1 + "Sun=" + e1.Sun + "\n\n                    Mon=" + e1.Mon + "\n\n                    Tue=" + e1.Tue + "\n\n                    Wed=" + e1.Wed + "\n");
var user = {
    userName: 'admin',
    userId: 2,
};
console.log("Username is " + user.userName);
console.log("Userid id " + user.userId);
//type-assertion
var id = 102;
var uid = id;
id = 'a';
//function
function f(a, b) {
    console.log("in function f() with a=" + a + " b=" + b);
}
f(20, 'function f()'); //calling
var Interface = {
    name: 'saurav',
    age: 22,
};
console.log('name is' + Interface.name);
console.log('age is' + Interface.age);
var Add = function (j, k) { return j + k; };
var Sub = function (j, k) { return j - k; };
console.log(Add.call(this, 5, 10));
console.log(Add.call(this, 20, 10));
//super class
var A = /** @class */ (function () {
    function A(id, name) {
        this.id = id;
        this.name = name;
    }
    return A;
}());
var ob1 = new A(101, 'object1');
var ob2 = new A(102, 'object2');
console.log("ob1 id : " + ob1.id + " ob1 name : " + ob1.name);
console.log("ob2 id : " + ob2.id + " ob2 name : " + ob2.name);
//sub class
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(id, name, age) {
        var _this = _super.call(this, 103, 'class B') || this;
        _this.age = age;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    return B;
}(A));
console.log(new B(104, 'kr', 2));
//generics
function generic(item) {
    return new Array().concat(item);
}
var ar1 = generic([1, 2]);
var str1 = generic(['sourav', 'KR']);
ar1.push(ar1);
console.log(ar1);
console.log(str1);
