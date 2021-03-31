function randomizeimage(){
    //random image variables.  


  
    
    switch(randfruIMG){
    case 1: fruIMG = apple;
    break;
    
    case 2: fruIMG = banana;
    break;
    
    case 3: fruIMG = strawberry;
    break;
    
    case 4: fruIMG = watermelon;
    break;
    }
    
    switch(randvegIMG){
    case 1: vegIMG = brinjal;
    break;
    
    case 2: vegIMG = capsicum;
    break;
    
    case 3: vegIMG = carrot;
    break;
    
    case 4: vegIMG = potato;
    break;
    }
    
    switch(randanmIMG){
    case 1: anmIMG = cow;
    break;
    
    case 2: anmIMG = dog;
    break;
    
    case 3: anmIMG = goat;
    break;
    
    case 4: anmIMG = monkey;
    break;
    }
    
    switch(randplaIMG){
    case 1: plaIMG = planet_atmo;
    break;
    
    case 2: plaIMG = planet_earth;
    break;
    
    case 3: plaIMG = planet_mars;
    break;
    
    case 4: plaIMG = planet_mook;
    break;
    }
    
    switch(randIMGchooser){
    case 1:sprIMG = fruIMG;
    break;
    
    case 2:sprIMG = vegIMG;
    break;
    
    case 3:sprIMG = anmIMG;
    break;
    
    case 4:sprIMG = plaIMG;
    break;
    }
    
    switch(randoddsprIMGchooser){
    case 1:oddsprIMG = fruIMG;
           if(sprIMG == fruIMG){
           oddsprIMG = vegIMG;
           }
    break;
    
    case 2:oddsprIMG = vegIMG;
    if(sprIMG == vegIMG){
    oddsprIMG = fruIMG;
    }
    break;
    
    case 3:oddsprIMG = anmIMG;
    if(sprIMG == anmIMG){
    oddsprIMG = plaIMG;
    }
    break;
    
    case 4:oddsprIMG = plaIMG;
    if(sprIMG == plaIMG){
    oddsprIMG = anmIMG;
    }
    break;
    }

    switch(randoddsprchooser){
       case 1:if(mousePressedOver(spr11)){
                 fill("green");
                 strokeWeight(200);
                 stroke("green");
                 line(spr11.x,spr11.y,spr11.x,spr11.y);
               }
              spr11.addImage(oddsprIMG);
              spr22.addImage(sprIMG);
              spr33.addImage(sprIMG);
              spr44.addImage(sprIMG);
              spr11.scale = 0.2;
              spr22.scale = 0.2;
              spr33.scale = 0.2;
              spr44.scale = 0.2;
              if(mousePressedOver(spr44)){
                strokeWeight(200);
                stroke("red");
                line(spr44.x,spr44.y,spr44.x,spr44.y);
              }
               if(mousePressedOver(spr22)){
                strokeWeight(200);
                stroke("red");
                line(spr22.x,spr22.y,spr22.x,spr22.y);
              }
               if(mousePressedOver(spr33)){
                strokeWeight(200);
                stroke("red");
                line(spr33.x,spr33.y,spr33.x,spr33.y);
              }
              break;
             
       case 2:if(mousePressedOver(spr22)){
                 fill("green");
                 strokeWeight(200);
                 stroke("green");
                 line(spr22.x,spr22.y,spr22.x,spr22.y);
               }
              spr22.addImage(oddsprIMG);
              spr33.addImage(sprIMG);
              spr44.addImage(sprIMG);
              spr11.addImage(sprIMG); 
              spr11.scale = 0.2;
              spr22.scale = 0.2;
              spr33.scale = 0.2;
              spr44.scale = 0.2;
               if(mousePressedOver(spr11)){
                strokeWeight(200);
                stroke("red");
                line(spr11.x,spr11.y,spr11.x,spr11.y);
              }
               if(mousePressedOver(spr33)){
                strokeWeight(200);
                stroke("red");
                line(spr33.x,spr33.y,spr33.x,spr33.y);
              }
               if(mousePressedOver(spr44)){
                strokeWeight(200);
                stroke("red");
                line(spr44.x,spr44.y,spr44.x,spr44.y);
              }
              break; 
              
       case 3:     if(mousePressedOver(spr33)){
                 fill("green");
                 strokeWeight(200);
                 stroke("green");
                 line(spr33.x,spr33.y,spr33.x,spr33.y);
               }
              spr33.addImage(oddsprIMG);
              spr44.addImage(sprIMG);
              spr11.addImage(sprIMG);
              spr22.addImage(sprIMG);
              spr11.scale = 0.2;
              spr22.scale = 0.2;
              spr33.scale = 0.2;
              spr44.scale = 0.2; 
               if(mousePressedOver(spr11)){
                strokeWeight(200);
                stroke("red");
                line(spr11.x,spr11.y,spr11.x,spr11.y);
              }
               if(mousePressedOver(spr22)){
                strokeWeight(200);
                stroke("red");
                line(spr22.x,spr22.y,spr22.x,spr22.y);
              }
               if(mousePressedOver(spr44)){
                strokeWeight(200);
                stroke("red");
                line(spr44.x,spr44.y,spr44.x,spr44.y);
              }
              break;   
              
       case 4:if(mousePressedOver(spr44)){
                 fill("green");
                 strokeWeight(200);
                 stroke("green");
                 line(spr44.x,spr44.y,spr44.x,spr44.y);
               }
              spr44.addImage(oddsprIMG);
              spr11.addImage(sprIMG);
              spr22.addImage(sprIMG);
              spr33.addImage(sprIMG); 
              spr11.scale = 0.2;
              spr22.scale = 0.2;
              spr33.scale = 0.2;
              spr44.scale = 0.2;
              if(mousePressedOver(spr11)){
                strokeWeight(200);
                stroke("red");
                line(spr11.x,spr11.y,spr11.x,spr11.y);
              }
               if(mousePressedOver(spr22)){
                strokeWeight(200);
                stroke("red");
                line(spr22.x,spr22.y,spr22.x,spr22.y);
              }
               if(mousePressedOver(spr33)){
                strokeWeight(200);
                stroke("red");
                line(spr33.x,spr33.y,spr33.x,spr33.y);
              }
              break;   
                
       }
   
     drawSprites();
    
        
    }

 
