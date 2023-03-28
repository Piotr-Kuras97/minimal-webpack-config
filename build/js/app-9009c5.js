!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,i){for(var n=0;n<i.length;n++){var s=i[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(void 0,o=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,"string");if("object"!==t(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(s.key),"symbol"===t(o)?o:String(o)),s)}var o}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.road=document.querySelector(".road"),this.car=document.querySelector("svg"),this.score=document.querySelector(".points"),this.points=0,this.carLeft=this.car.getBoundingClientRect().left,this.carTop=this.car.getBoundingClientRect().top,this.canvas=e,this.ctx=e.getContext("2d"),this.width=window.innerWidth,this.height=this.road.offsetHeight,this.animateId=0,this.flag=!0,this.posY=0}var i,n;return i=t,(n=[{key:"clearCanvas",value:function(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.width,this.height)}},{key:"initCanvas",value:function(){this.canvas.width=this.width,this.canvas.height=this.height,this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.width,this.height)}},{key:"numbersOfLines",value:function(){var t=0;return 150*t<this.width&&(t=Math.floor(this.width/150)+1),t}},{key:"generateLines",value:function(t){for(var e=[],i=0;i<t;i++)e.push({x:150*i,y:this.height/2-12.5,color:"white",speedX:-5});this.lines=e}},{key:"drawLine",value:function(t){this.ctx.fillStyle="white",this.ctx.fillRect(t.x,t.y,100,25)}},{key:"drawLines",value:function(){var t=this;this.lines.forEach((function(e){t.drawLine(e)}))}},{key:"updateLines",value:function(){var t=this;this.lines.forEach((function(e){e.x+=e.speedX,e.x+100<0&&(e.x=t.width)}))}},{key:"generateObstacle",value:function(t){for(var e=[],i=0;i<t;i++)e.push({x:1e3*i,y:Math.random()*this.height,size:50,color:"gray",speedX:-5});this.obstacles=e}},{key:"updateObstacles",value:function(){var t=this;this.obstacles.forEach((function(e){e.x+=e.speedX,e.x+100<0&&(e.x=t.width+6e3*Math.floor(2*Math.random()))}))}},{key:"drawObstacle",value:function(t){this.ctx.fillStyle="#999999",this.ctx.fillRect(t.x,t.y,t.size,t.size),this.ctx.strokeStyle="#ff0000",this.ctx.lineWidth=2;var e=Math.min(t.size,30),i=t.x+(t.size-e)/2,n=t.y+(t.size-e)/2;this.ctx.beginPath(),this.ctx.moveTo(i,n),this.ctx.lineTo(i+e,n+e),this.ctx.moveTo(i,n+e),this.ctx.lineTo(i+e,n),this.ctx.stroke()}},{key:"drawObstacles",value:function(){var t=this;this.obstacles.forEach((function(e){t.drawObstacle(e)}))}},{key:"move",value:function(){var t=this;this.carMove=function(e){if("ArrowUp"===e.code){if(t.road.getBoundingClientRect().top>t.car.getBoundingClientRect().top+25)return;t.posY=t.posY-15,TweenMax.to(t.car,.05,{y:t.posY})}if("ArrowDown"===e.code){if(t.car.getBoundingClientRect().top+70>window.innerHeight)return;t.posY=t.posY+15,TweenMax.to(t.car,.05,{y:t.posY})}},window.addEventListener("keydown",this.carMove)}},{key:"fasterMoving",value:function(){var t=this;this.fasterId=setInterval((function(){t.lines.forEach((function(t){-10!==t.speedX&&t.speedX--})),t.obstacles.forEach((function(t){-10!==t.speedX&&t.speedX--}))}),1e4)}},{key:"scorePoints",value:function(){var t=this;this.intervalId=setInterval((function(){t.points=t.points+10,t.score.textContent=t.points}),1e3)}},{key:"stopGame",value:function(){for(var t=0;t<this.obstacles.length;t++)Math.floor(this.obstacles[t].x)<Math.floor(this.car.getBoundingClientRect().left+60)&&Math.floor(this.obstacles[t].x)>Math.floor(this.car.getBoundingClientRect().left+40)&&Math.floor(this.obstacles[t].y)>Math.floor(this.car.getBoundingClientRect().top-2*this.height-100)&&(Math.floor(this.car.getBoundingClientRect().top-2*this.height-120)<Math.floor(this.obstacles[t].y)-2*Math.floor(this.obstacles[t].size)||(cancelAnimationFrame(this.animateId),this.flag=!0,this.points=0,clearInterval(this.intervalId),clearInterval(this.fasterId),window.removeEventListener("keydown",this.carMove)))}},{key:"draw",value:function(){this.clearCanvas(),this.drawLines(),this.updateLines(),this.drawObstacles(),this.updateObstacles(),this.animateId=window.requestAnimationFrame(this.draw.bind(this)),this.stopGame()}},{key:"run",value:function(){this.initCanvas(),this.generateLines(this.numbersOfLines()),this.generateObstacle(30),this.draw(),this.move(),this.fasterMoving(),this.scorePoints(),this.score.textContent=0,this.flag=!1}}])&&e(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),t}(),n=document.querySelector(".play"),s=new i(document.querySelector("canvas"));n.addEventListener("click",(function(){s.flag&&s.run()}))}();