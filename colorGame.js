var value=6;

if($("#easy").click()){
  value=3;
}
if($("#hard").click()){
  value=6;
}

var color=pickedColor(value);
var colorChosen=randomColor();


$("h1").text(colorChosen);

function pickedColor(num){
  var arr=[];
  for(var i=0;i<num;i++){
     arr.push(rgb());

  }
  return arr;
}



function randomColor(){
  var num=Math.floor(Math.random()*value);
  return color[num];
}

function rgb(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);

  return "rgb("+r+", "+g+", "+b+")";
}
if(color.length==6){
$("#tr1").css("background",color[0]);
$("#tr2").css("background",color[1]);
$("#tr3").css("background",color[2]);
$("#tr4").css("background",color[3]);
$("#tr5").css("background",color[4]);
$("#tr6").css("background",color[5]);
}

if(color.length==3){
  $("#tr1").css("background",color[0]);
$("#tr2").css("background",color[1]);
$("#tr3").css("background",color[2]);
}

$("#tr1").on("click",function(){
  
  if($(this).css("background-color")==colorChosen){
    $(".td1").css("background-color",colorChosen);
    if(color.length==6){
      $(".td2").css("background-color",colorChosen);
    }
    $("#color").html("<a href='javascript:location.reload(true)'>PLAY AGAIN?</a>")
    $(".container1").css("background-color",colorChosen)
    $("h4").text("CORRECT!!");
  }
  else{
    $("h4").text("TRY AGAIN!!");
    $(this).css("background-color","black");
  }
})

$("#tr2").on("click",function(){
  
  if($(this).css("background-color")==colorChosen){
    $(".td1").css("background-color",colorChosen);
    if(color.length==6){
      $(".td2").css("background-color",colorChosen);
    }
    $("#color").html("<a href='javascript:location.reload(true)'>PLAY AGAIN?</a>")
    $(".container1").css("background-color",colorChosen)
    $("h4").text("CORRECT!!");
  }
  else{
     $("h4").text("TRY AGAIN!!");
    $(this).css("background-color","black");
  }
})

$("#tr3").on("click",function(){
  
  if($(this).css("background-color")==colorChosen){
    $(".td1").css("background-color",colorChosen);
    if(color.length==6){
      $(".td2").css("background-color",colorChosen);
    }
    $("#color").html("<a href='javascript:location.reload(true)'>PLAY AGAIN?</a>")
    $(".container1").css("background-color",colorChosen)
    $("h4").text("CORRECT!!");
  }
  else{
     $("h4").text("TRY AGAIN!!");
    $(this).css("background-color","black");
  }
})

$("#tr4").on("click",function(){
   
  if($(this).css("background-color")==colorChosen){
    $(".td1").css("background-color",colorChosen);
    if(color.length==6){
      $(".td2").css("background-color",colorChosen);
    }
    $("#color").html("<a href='javascript:location.reload(true)'>PLAY AGAIN?</a>")
    $(".container1").css("background-color",colorChosen)
    $("h4").text("CORRECT!!");
  }
  else{
     $("h4").text("TRY AGAIN!!");
    $(this).css("background-color","black");
  }
})

$("#tr5").on("click",function(){
   
  if($(this).css("background-color")==colorChosen){
    $(".td1").css("background-color",colorChosen);
    if(color.length==6){
      $(".td2").css("background-color",colorChosen);
    }
    $("#color").html("<a href='javascript:location.reload(true)'>PLAY AGAIN?</a>")
    $(".container1").css("background-color",colorChosen)
    $("h4").text("CORRECT!!");
  }
  else{
     $("h4").text("TRY AGAIN!!");
    $(this).css("background-color","black");
  }
})

$("#tr6").on("click",function(){
   
  if($(this).css("background-color")==colorChosen){
    $(".td1").css("background-color",colorChosen);
    if(color.length==6){
      $(".td2").css("background-color",colorChosen);
    }
    $("#color").html("<a href='javascript:location.reload(true)'>PLAY AGAIN?</a>")
    $(".container1").css("background-color",colorChosen)
    $("h4").text("CORRECT!!");
  }
  else{
     $("h4").text("TRY AGAIN!!");
    $(this).css("background-color","black");
  }
})

