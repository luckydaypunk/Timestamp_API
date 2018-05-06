$(document).ready(function() {
  function createURL () {
    let time = $("#userTime").val();
    if(time.indexOf("/") != -1){
      time = time.replace(/\//g,' ');
    }
    if (time == "") {
      time = "January 1, 2016";
    }
    return time;
  }
  $("#userTime").keyup(function(key){
    if (key.which === 13){
      $("#submit-time").trigger("click");
    }
  });
  $("#submit-time").click(function(){
    let url = createURL();
    console.log(url);
    $.get(url,function(data){
      $("#results").find("p").html(data);
    });
  });
});