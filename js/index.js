$(function(){
    var num =0;
    var i = 730;
    var l = $(".ul li").length;
    setInterval(function(){
        if(num+1==l){
            num=0;
        } else {
            num++;
        }
        // console.log(num*i);
        // console.log(l);
        $(".ul").animate({"left":-num*i},500);
    },2000);
})