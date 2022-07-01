var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var width = screen.width;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var new_width = screen.width - 70;
    var new_height = screen.height - 300;

    if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("new_height", my_touchstart);   
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    //Replace the 'mousemove' event with 'touchmove'.
    canvas.addEventListener("touchmove", my_touchmove);
    //Replace the "my_mousemove()" function with "my_touchmove()" function.
    function my_touchmove(e)
    {
        //Log the "my_touchMove" in the console.
        console.log("my_touchMove");

        /*Update the "current_position_of_touch_x" and "current_position_of_touch_y" 
        with the touched points on canvas.*/
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
    
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
    
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }


    

