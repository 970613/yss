var app = new Vue({
    el: "#app"
    , data: {
        message: "Hello Vue!"
    }
})

var app1 = new Vue({
    el:"#app1",
    data:{
        fruits:["香蕉","苹果","梨"]
    },
    methods:{
        e:function(str){
            console.log(str)
        }
    }
})

var app2 = new Vue({
    el:"#app2",
    data:{
        fruit:[
            {url:"index.html",name:"小明"},
            {url:"xiaohong.html",name:"小红"},
            {url:"xioaliang.html",name:"小亮"}
        ]
    }
    
})


//传递参数
var app3 = new Vue({
    el:"#app3",
    methods:{
        e:function(str){
            console.log(str)
        }
    }
})