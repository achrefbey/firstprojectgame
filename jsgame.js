function deletimg (){
    $("body").empty()
    $("body").css({
        "background-image": 'url("file:///C:/Users/lenovo/Desktop/file.jpg")',
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "cursor": 'url("https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/385464296_863143718770256_6765045009471494108_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1M872h4CPLkAX_sr6Wz&_nc_ht=scontent.ftun2-2.fna&oh=03_AdQp1QUQhApG5v9xTS1E33m4NcHMRaAlCMnQTdEBfH3ppA&oe=6544F928"),auto'
      });
      $("body").append(`<div id="grid-container">
      <div id="grid-item1"></div>
      <div id="grid-item2"></div>
      <div id="grid-item3"></div>
      <div id="grid-item4"></div>
      <div id="grid-item5"></div>
      <div id="grid-item6"></div>
      <div id="grid-item7"></div>
      <div id="grid-item8"></div>
      <div id="grid-item9"></div>
    </div>`)
    $("#grid-container").css({ 'width': '540px',
    'height': '540px',
    'margin': '0 auto',
    'display': 'flex',
    'flex-wrap': 'wrap',})
    $("#grid-container").find("div").css({"width": "180px", 
    "height": "180px" 
});
function getRandomnumber() {
  
  var num = Math.floor(Math.random() * 9);
  ; return  num
}
var diglett = $("<img id='dig' src='https://cdn3.whatculture.com/images/2017/02/93f9f655377d0222-600x338.png'>");

var scoreboard = $("<h1>0</h1>");
    $("body").append(scoreboard);
    scoreboard.css({'position': 'absolute','margin-left':'1400px', 'margin-bottom':'900px','color':'#FCCC04','font-size':'50px'})
    function scoreadd() {
      var currentScore = parseInt(scoreboard.text());
      scoreboard.text(currentScore + 1);
    }
  
    diglett.on("click", scoreadd);


function randindivs() {


    var randomnumber = getRandomnumber(); 
    if (randomnumber == 1) {
      $("#grid-item1").append(diglett.clone()); 
      setTimeout(function() {
        $("#grid-item1").empty();
      }, 1000); 
    } else if (randomnumber == 2) {
      $("#grid-item2").append(diglett.clone());
      setTimeout(function() {
        $("#grid-item2").empty();
      }, 1000);  
    } else if (randomnumber == 3) {
      $("#grid-item3").append(diglett.clone());
      setTimeout(function() {
        $("#grid-item3").empty();
      }, 1000);  
    } else if (randomnumber == 4) {
      $("#grid-item4").append(diglett.clone());
      setTimeout(function() {
        $("#grid-item4").empty();
      }, 1000);  
    } else if (randomnumber == 5) {
      $("#grid-item5").append(diglett.clone());
      setTimeout(function() {
        $("#grid-item5").empty();
      }, 1000);  
    } else if (randomnumber == 6) {
      $("#grid-item6").append(diglett.clone());
      setTimeout(function() {
        $("#grid-item6").empty();
      }, 1000);  
    } else if (randomnumber == 7) {
      $("#grid-item7").append(diglett.clone());
      setTimeout(function() {
        $("#grid-item7").empty();
      }, 1000); 
    } else if (randomnumber == 8) {
      $("#grid-item8").append(diglett.clone());
      setTimeout(function() {
        $("#grid-item8").empty();
      }, 1000); 
    } else if (randomnumber == 9) {
      $("#grid-item9").append(diglett.clone());
      setTimeout(function() {
        $("#grid-item9").empty();
      }, 1000); 
    }else randindivs()

  
 
 
}
randindivs()




    var box = $("<img src='file:///C:/Users/lenovo/Desktop/a32d83f12382e867fe46d9f8c9896cdb.png'>");
    $("body").append(box);
    box.css({
        'position': 'absolute','margin-left': '1000px'});
    
    var timerimg =$("<img src='file:///C:/Users/lenovo/Desktop/timer.png'>")
    $("body").append(timerimg);
    timerimg.css({'position': 'absolute'})
    var oneminute = $("<h1>60</h1>");
    $("body").append(oneminute);
    oneminute.css({'position': 'absolute', 'color':'#FCCC04' , 'margin-left':'400px', 'font-size':'75px', 'margin-top': '25px'})
    var countdown=setInterval(updateCountdown, 1000)

    function updateCountdown() {
      var timer = parseInt(oneminute.text())

      if (timer === 0) {
        clearInterval(countdown)
      } else {
        oneminute.text((timer - 1))
      }
    }
  
  
  }

  
   

    $("body").css({

        "background-size": "cover",
        "background-repeat": "no-repeat",
        "cursor": 'url("https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/385464296_863143718770256_6765045009471494108_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1M872h4CPLkAX_sr6Wz&_nc_ht=scontent.ftun2-2.fna&oh=03_AdQp1QUQhApG5v9xTS1E33m4NcHMRaAlCMnQTdEBfH3ppA&oe=6544F928"),auto'
      });
    

   
    
      