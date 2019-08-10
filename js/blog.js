// 针对blog页面定义一个对象
var log={
    startdt:"2019-8-5",
    enddt:"2019-9-5",
    updatedt:"2019-8-5",
    anchor:"peng"
};
//由对象派生业务逻辑
log.submit={
    check:function(v){ //验证某个值是否为空
        return v==""?true:false;
    },
    autohide:function(obj){
        setTimeout(function(){
            obj.hide();
        },2000)
    },
};


//定义一个验证内容是否为空的函数
function checkvalue(){
    //获取元素对象,并保存在变量中
    var $username=$('#username');
    var $password=$('#password');
    var $err1=$("#err1");
    var $err2=$("#err2");
    console.log($username.val());
    if(!log.submit.check($username.val())&&!log.submit.check($password.val())){
        console.log($username.val()!=""&&$password.val()!="");
        //直接提交
        return true;
    }else{
        if($username.val()==""){
            $err1.show();    
            log.submit.autohide($err1);  
        }
        else{
            $err2.show();
            log.submit.autohide($err2);   
        }
        return false;
    }
};


//绑定按钮的单击事件,表单提交时触发
$(function(){
    //获取元素对象,并保存在变量中
    var $form=$('form');
    var $username=$('#username');
    var $password=$('#password');
    var $err1=$("#err1");
    var $err2=$("#err2");
    var $btn=$(".btn>input");
});

//定义一个基于列表页的业务逻辑
var lst={
    template:function(t,u,p1,p2){
        var _html='<div class="item">\
        <div class="title">\
            <h3>'+t+'</h3>\
        </div>\
        <div class="con">\
            <div class="cleft">\
                <img src="'+u+'" alt="">\
            </div>\
            <div class="cright">\
                <p class="ptop">'+p1+'\
                </p>\
                <p class="pbottom">'+p2+'\
                </p>\
            </div>\
        </div>\
    </div>';
    return _html;
    },
}
//使用数组保存展示的数组
var arrData=[
    {
        t:'Python语言的优势',
        u:'./imgs/b.jpg',
        p1:'本文探讨了Python语言在AI领域的优势与运用。\
        谁会成为AI和大数据时代的第一开发语言？ 这本已是不一个不需要争论的问题。如果说三年前',
        p2:'皮皮虾 学无止境 2019-5-13 34567已阅读 999'
    },
    {
        t:'Web开发的优势',
        u:'./imgs/b04.jpg',
        p1:'本文探讨了Web语言在AI领域的优势与运用。\
        谁会成为AI和大数据时代的第一开发语言？ 这本已是不一个不需要争论的问题。如果说三年前',
        p2:'皮皮虾 学无止境 2019-5-13 34567已阅读 979'
    },
    {
        t:'Java语言的优势',
        u:'./imgs/b.jpg',
        p1:'本文探讨了Java语言在AI领域的优势与运用。\
        谁会成为AI和大数据时代的第一开发语言？ 这本已是不一个不需要争论的问题。如果说三年前',
        p2:'皮皮虾 学无止境 2019-5-13 34567已阅读 999'
    }]
//使用流程
//1.遍历数组，获取每一项元素对象
//2.将获取的元素对象填充到模板中
//3.向页面元素追加模板内容
for(var i=0;i<arrData.length;i++)
{
    var obj=arrData[i];
    //通过模板生成新的列表数据
    var _HTML=lst.template(obj.t,obj.u,obj.p1,obj.p2);
    //将数据追加到列表中
    $('.lst').append(_HTML);
};

var pics={
    template:function(url,num,title){
        var _html='\
        <div class="item">\
            <div class="imgs">\
                <img src="'+url+'" alt="">\
                <div class="tip">喜欢|'+num+'</div>\
            </div>\
            <div class="title">\
                <h3>'+title+'</h3>\
            </div>\
        </div>';
        return _html;
    },
}
//定义一个包含三个对象内容的图片数组
var arrPics=[
    {
        url:'./imgs/a.jpg',
        num:223,
        title:'胡海波偷窥美女照片'
    },
    {
        url:'./imgs/banner01.jpg',
        num:9999,
        title:'姓胡男子半夜对女童干出....'
    },
    {
        url:'./imgs/banner03.jpg',
        num:9999,
        title:'姓胡男子半夜看AV对邻居...'
    }
]
for(var i=0;i<arrPics.length;i++){
    var obj=arrPics[i];
    var _HTML=pics.template(obj.url,obj.num,obj.title);
    $("#pics").append(_HTML);
}