(function(){


	var previous={};
	var vx =0.035;
	var vy =0.050;
	var logo_top = document.getElementById('title-top');
	var logo_middle = document.getElementById('title-middle');
	var logo_bottom = document.getElementById('title-bottom');
    //console(bottom);
	var array={
		top:{
			x:parseInt(getComputedStyle(logo_top).left),
			y:parseInt(getComputedStyle(logo_top).top),
		},
		bot:{
			x:parseInt(getComputedStyle(logo_top).left),
			y:parseInt(getComputedStyle(logo_top).top),
		}
		
	}
	window.onmousemove=function(e){
		previous.x=e.clintX;
		previous.y=e.clintY;
		var dx=e.clientX-previous.x;
		var dy=e.clientY-previous.y;
		var vdx=dx*vx;
		var vdy=dy*vy;

		array.top.x+=vdx;
		array.top.y+=vdy;
		array.bot.x-=vdx;
		array.bot.y-=vdy;

		logo_top.style.left=array.top.x+'px';
		logo_top.style.top=array.top.y+'px';
		logo_bottom.style.left=array.top.x+'px';
		logo_bottom.style.top=array.top.y+'px';
	}
	
})();