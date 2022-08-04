function setImage(){
    var arr=[]
    var arrTd=[]
    for (i=0;i<16;i++){
        while (typeof arr[i] != "number"){
            var random=Math.ceil(Math.random()*122)
            if (arr.indexOf(random)== -1){
                    arr[i]=random
                    arr[i+1]=random
            }
        }
    }

   $("table td").each(function (index,element){
    while ($(this).html()== ""){
        var randomNum=Math.round(Math.random()*15)
        if ($(this).html()== "" && arrTd.indexOf(randomNum) == -1){
            arrTd[index]=randomNum
                $(this).html("<img src='img/("+arr[randomNum]+").png'>")
                $("table td img").addClass("image")
        }
    } 
})

}
setImage()
$("table td").click(function(){
    if ($(this).hasClass("clicked-true") != true){
        $(this).removeClass("hide")
        $(this).addClass("clicked")   
    }

 if ($(".clicked").length >= 2){
            if ($(".clicked").eq(0).html() == $(".clicked").eq(1).html()){
                $(".clicked").addClass("clicked-true")
                $(".clicked").removeClass("clicked")
            }
            else {
                $(".clicked").addClass("hide")
                $(".clicked").removeClass("clicked")
            }    
     } 

    if  ($("table td.clicked-true").length == 16){
        alert("You Won The Game!")
        $(this).removeClass("clicked") 
    }
}) 

$(function(){
    $('.again').click(function(){
        location.reload();
    })
})
