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
     static name3(): void {
        console.log("Runoob")
    };

    static name2(): void {
        const hello2 : string = "Hello World!";
        console.log("Runoob")
    }
}

const obj = new Site();
Site.name3();
