addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'health check';
});

var picture = new Image("img/20210407082247.png");
picture.setSize(1000,1250);
picture.setPosition(0,400);
add(picture);


var today = new Date();
if(today.getMonth()+1 == 4){
    var mon = ("Apr ")
}
//if(today.getMonth()+1 = 5){
//    var mon = ("May ");
//}

    var date = mon + today.getDate() + " , " + today.getFullYear() + " " + today.getHours() + ":" + ((today.getMinutes() < 10)?"0":"") + today.getMinutes() + " AM";
    
   
    
    
var dateText = new Text(date,"50pt Arial ");
dateText.setPosition(160,760);
dateText.setColor("#575757");

add(dateText);