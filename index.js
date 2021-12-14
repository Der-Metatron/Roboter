let robo = {
    x: 0,
    y: 0,
    heading: 'unten'
    };
    
    function step() {
    if(robo.heading == "unten") {
       robo.y = robo.y +1; 
    }
    if(robo.heading == "rechts") {
       robo.x = robo.x +1;
    }
    if(robo.heading == "links") {
       robo.x == robo.x -1; 
    }
    if(robo.heading == "oben") {
       robo.y = robo.y -1; 
    }
    }
    
    function rotate() {
        if(robo.heading == "unten") {
           robo.heading = "rechts"; 
        }
        if(robo.heading == "links") {
           robo.heading = "oben"; 
        }
        if(robo.heading == "rechts") {
           robo.heading = "unten"; 
        }
        if(robo.heading == "oben") {
           robo.heading = "links"; 
        }
        }