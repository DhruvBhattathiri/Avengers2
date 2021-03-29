var canvas = new fabric.Canvas('myCanvas');
    block_image_width = 30;
    block_image_height = 30;
    player_x = 10;
  player_y = 10;
  var player_object= "";
      var block_image_object= ""; 
      function player_update() {
        fabric.Image.fromURL("player.png", 
        function(Img) {
             player_object = Img;
              player_object.scaleToWidth(150);
               player_object.scaleToHeight(140);
                player_object.set({ top:player_y, left:player_x }); 
                canvas.add(player_object);
              });
              }
              function new_image(get_image) { 
                fabric.Image.fromURL(get_image,
                    function(Img) { 
                        block_image_object = Img;
                         block_image_object.scaleToWidth(block_image_width);
                          block_image_object.scaleToHeight(block_image_height);
                           block_image_object.set({ top:player_y, left:player_x });
                            canvas.add(block_image_object);
                            });
                            }
                            window.addEventListener("keydown", my_keydown);
                            function my_keydown(e) {
                                 keyPressed = e.keyCode;
                                  console.log(keyPressed);
                                  if(e.shiftKey == true && keyPressed == '80'){
                                       console.log("p and shift pressed together");
                                        block_image_width = block_image_width + 10;
                                         block_image_height = block_image_height + 10;
                                          document.getElementById("current_width").innerHTML = block_image_width;
                                           document.getElementById("current_height").innerHTML = block_image_height;
                                          } 

                                          if(e.shiftKey == true && keyPressed == '80'){
                                            console.log("p and shift pressed together");
                                             block_image_width = block_image_width + 10;
                                              block_image_height = block_image_height + 10;
                                               document.getElementById("current_width").innerHTML = block_image_width;
                                                document.getElementById("current_height").innerHTML = block_image_height;
                                               } 
                                               if(e.shiftKey && keyPressed == '77'){
                                                    console.log("m and shift pressed together");
                                                     block_image_width = block_image_width - 10;
                                                      block_image_height = block_image_height - 10;
                                                       document.getElementById("current_width").innerHTML = block_image_width; document.getElementById("current_height").innerHTML = block_image_height;
                                                       }  

                                                       if(keyPressed == '38'){
                                                        up();
                                                         console.log("up");
                                                      }
                                                       if(keyPressed == '40') {
                                                            down();
                                                             console.log("down");
                                                          }
                                                          if(keyPressed == '37') {
                                                            left();
                                                            console.log("left");
                                                          }
                                                          if(keyPressed == '39'){
                                                                right();
                                                                     console.log("right");
                                                          }

                                                          if(keyPressed == '70'&&'73'){
                                                            new_image('ironman_face.png');
                                                               console.log("Iron Man Face");
                                                      }
                                                        
                                                      if(keyPressed == '66'&&'73'){
                                                        new_image('ironman_body.png');
                                                           console.log("Iron Man Body");
                                                      }
                                                      if(keyPressed == '72'&&'73'){
                                                        new_image('ironman_left_hand.png');
                                                           console.log("Iron Man Left Hand");
                                                      }
                                                      if(keyPressed == '82'&&'73'){
                                                        new_image('ironman_right_hand.png');
                                                           console.log("Iron Man Right Hand");
                                                      }
                                                      if(keyPressed == '76'&&'73'){
                                                        new_image('ironman_legs.png');
                                                           console.log("Iron Man Legs");
                                                      }
                                                      if(keyPressed == '70'&&'72'){
                                                        new_image('hulk_face.png');
                                                           console.log("Hulk Face");
                                                      }
                                                      if(keyPressed == '72'){
                                                        new_image('hulk_left_hand.png');
                                                           console.log("Hulk Left Hand");
                                                      }
                                                      if(keyPressed == '66'&&'72'){
                                                        new_image('hulkd_body.png');
                                                           console.log("Hulk Body");
                                                      }
                                                      if(keyPressed == '82'&&'72'){
                                                        new_image('hulk_right_hand.png');
                                                           console.log("Hulk Right Hand");
                                                      }
                                                      if(keyPressed == '76'&&'72'){
                                                        new_image('hulk_legs.png');
                                                           console.log("Hulk Legs");
                                                      }
                                                      if(keyPressed == '67'&&'72'){
                                                        new_image('captain_america_left_hand.png');
                                                           console.log("Captain America Left Hand");
                                                      }
                                                      if(keyPressed == '70'&&'83'){
                                                        new_image('spiderman_face.png');
                                                           console.log("Spider Man Face");
                                                      }
                                                      if(keyPressed == '66'&&'83'){
                                                        new_image('spiderman_body.png');
                                                           console.log("Spider Man Body");
                                                      }
                                                      if(keyPressed == '72'&&'83'){
                                                        new_image('spiderman_left_hand.png');
                                                           console.log("Spider Man Left Hand");
                                                      }
                                                      if(keyPressed == '82'&&'83'){
                                                        new_image('spiderman_right_hand.png');
                                                           console.log("Spider Man Right Hand");
                                                      }
                                                      if(keyPressed == '76'&&'83'){
                                                        new_image('spiderman_legs.png');
                                                           console.log("Spider Man Legs");
                                                      }
                                                      if(keyPressed == '70'&&'84'){
                                                        new_image('thor_face.png');
                                                           console.log("Thor Face");
                                                      }
                                                      if(keyPressed == '72'&&'84'){
                                                        new_image('thor_left_hand.png');
                                                           console.log("Thor Left Hand");
                                                      }
                                                      if(keyPressed == '82'&&'84'){
                                                        new_image('thor_right_hand.png');
                                                           console.log("Thor Right Hand");
                                                      }
                                                    }
                                                    function up() {
                                                      if(player_y >=0) { 
                                                          player_y = player_y - block_image_height;
                                                           console.log("block image height = " + block_image_height);
                                                            console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                                                             canvas.remove(player_object); player_update();
                                                          }
                                                          }
                                                           function down() {
                                                                if(player_y <=500) {
                                                                     player_y = player_y + block_image_height;
                                                                      console.log("block image height = " + block_image_height);
                                                                       console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                                                                        canvas.remove(player_object);
                                                                         player_update();
                                                                      }
                                                                      }
                                                 function left() {
                                                      if(player_x >0) {
                                                           player_x = player_x - block_image_width;
                                                            console.log("block image width = " + block_image_width);
                                                             console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                                                              canvas.remove(player_object); player_update();
                                                              }
                                                              }
                                                               function right() {
                                                                    if(player_x <=850) {
                                                                         player_x = player_x + block_image_width;
                                                                          console.log("block image width = " + block_image_width);
                                                                           console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                                                                            canvas.remove(player_object);
                                                                             player_update();
                                                                          } 
                                                                         }