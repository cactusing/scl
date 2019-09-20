var hello = "Hello World!";
console.log(hello);
var object_name = {
    key1: "value1",
    key2: "value",
    key3: function () {
        // 函数
    },
    key4: ["content1", "content2"] //集合
};
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runoob");
    };
    ;
    Site.prototype.name2 = function () {
        var hello2 = "Hello World!";
        console.log("Runoob");
    };
    return Site;
}());
var obj = new Site();
obj.name();
