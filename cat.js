(function(){

 var canvas = document.getElementById('myCanvas');

    
function sprite (options) {
				
    var conf = {};	
    conf.image_url = options.image;					
    conf.context = options.context.getContext('2d');
    conf.width = options.width;
    conf.height = options.height;
    conf.image = new Image();
    conf.current_frame = 1;
    conf.frames = options.frames;
    conf.fps = 25;
    conf.tick = 0;
    conf.orientation = options.orientation;
    


    conf.render = function(){


    sx = 0;
    sy = 0;
    sw = conf.width;
    sh = conf.height;

    dx = 0;
    dy = 0;
    dw = conf.width;
    dh = conf.height;	
    
    if (conf.orientation == 'horizontal'){
       
       sx = conf.current_frame*conf.width;
       sy = 0;

    }

    if(conf.orientation == 'vertical'){

    	sx = 0;
    	sy = conf.current_frame*conf.height;


    }


	conf.context.clearRect(0,0,conf.width,conf.height);
		conf.context.drawImage(
		   conf.image,
           sx,
           sy,
           sw,
           sh,
           dx,
           dy,
           dw,
           dh
    );
   }

 
    conf.updateframe = function () {
    	//console.log(conf.current_frame);

    if(conf.tick > conf.fps){

    		conf.tick = 0;

    	if(conf.current_frame < conf.frames - 1){

    	    conf.current_frame += 1;
    	}else{

    		conf.current_frame = 1;
    	}
    }else{

    	conf.tick += 1;
    }

      
    }

    return conf;


}



function loop(tsprite){

	window.requestAnimationFrame(loop);
	human.render();
	human.updateframe();

}

human = sprite({
    context: canvas,
    width: 104,
    height: 150,
    image: 'human.png',
    frames: 6,
    orientation: 'horizontal'	

})
 
cat = sprite({
	context: canvas,
	width: 400,
	height: 200,
	image: 'cat.png',
	frames: 12,
	orientation:'vertical'
});

loop();
human.image.onload = loop;
human.image.src = human.image_url;	


}());


