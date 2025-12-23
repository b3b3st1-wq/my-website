const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let flakes = [];

for(let i=0;i<180;i++){
  flakes.push({
    x:Math.random()*w,
    y:Math.random()*h,
    r:Math.random()*2+0.5,
    s:Math.random()*1.5+0.3
  });
}

function snow(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="white";
  flakes.forEach(f=>{
    ctx.beginPath();
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
    ctx.fill();
    f.y+=f.s;
    if(f.y>h){
      f.y=-10;
      f.x=Math.random()*w;
    }
  });
  requestAnimationFrame(snow);
}

snow();

window.onresize=()=>{
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
};
