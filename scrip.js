$(document).ready(draw);
function draw() {
  // $('main').dialog({width:500,height:500});
  $('#red').click(()=>{
    $('.place').mousemove(()=>{
      let confCol='255,0,0';
      $('.place').append('<div style="position:absolute;width:10px;height:10px;background:rgba('+confCol+',0.1);border-radius:5px;-webkit-transform:translate('+event.clientX+'px,'+event.clientY+'px)"></div>');
    });
  });
  $('#green').click(()=>{
    $('.place').mousemove(()=>{
      let confCol='0,255,0';
      $('.place').append('<div style="position:absolute;width:10px;height:10px;background:rgba('+confCol+',0.1);border-radius:5px;-webkit-transform:translate('+event.clientX+'px,'+event.clientY+'px)"></div>');
    });
  });
  $('#blue').click(()=>{
    $('.place').mousemove(()=>{
      let confCol='0,0,255';
      $('.place').append('<div style="position:absolute;width:10px;height:10px;background:rgba('+confCol+',0.1);border-radius:5px;-webkit-transform:translate('+event.clientX+'px,'+event.clientY+'px)"></div>');
    });
  });

}
function drw() {
  let confCol='';
  if (event.target.getAttribute('id')==='red') {
    confCol='255,0,0';
  } else if (event.target.getAttribute('id')==='green'){
    confCol='0,255,0';
  } else if (event.target.getAttribute('id')==='blue') {
    confCol='0,0,255';
  }
  $('.place').append('<div style="position:absolute;width:10px;height:10px;background:rgba('+confCol+',0.1);border-radius:5px;-webkit-transform:translate('+event.clientX+'px,'+event.clientY+'px)"></div>');
  console.log(event.clientX);
}
