//描画目的取得
var canvas = $('myCanvas')
var drawFlag = false;
var oldX = 0;
var oldY = 0;
window.addEventListener("load", function(){
    var can = document.getElementById("myCanvas");
    can.fillstyle = "#0000ff";
    can.addEventListener("mousemove", draw, true);
    can.addEventListener("mousedown", function(e){
        drawFlag = true;
        oldX = e.clientX - 12;
        oldY = e.clientY - 12;
    }, false);
    can.addEventListener("mouseup", function(){
        drawFlag = false;
    }, false);
}, true);

//お絵かき
function draw(e){
    if (!drawFlag) return;
    var s_color = document.form.s_color.value;
    var s_size = document.form.s_size.value;
    var x = e.clientX - 12;
    var y = e.clientY - 12;
    var can = document.getElementById("myCanvas");
    var context = can.getContext("2d");
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = s_color;
    context.lineWidth = s_size;
    context.beginPath();
    context.moveTo(oldX, oldY);
    context.lineTo(x, y);
    context.stroke();
    context.closePath();
    oldX = x;
    oldY = y;
}

//リセットボタン
function reset_canvas(){
    var can = document.getElementById("myCanvas");
    var context = can.getContext("2d");
    context.clearRect(0,0,640,480);
}

//画像検索
$('searchbutton').addEventListener('click', function(){
  var datauri = canvas.toDataURL();
  datauri = datauri
    .replace(/.*,/, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
  $('contentinput').value = datauri;
  $('form').submit();
}, false);

function $(i){ return document.getElementById(i); }