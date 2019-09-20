const hello : string = "Hello World!";
console.log(hello);

var object_name = {
    key1: "value1", // 标量
    key2: "value",
    key3: function() {
        // 函数
    },
    key4:["content1", "content2"] //集合
};
class Site {
     name(): void {
        console.log("Runoob")
    };

    name2(): void {
        const hello2 : string = "Hello World!";
        console.log("Runoob")
    }
}
var obj = new Site();
obj.name();