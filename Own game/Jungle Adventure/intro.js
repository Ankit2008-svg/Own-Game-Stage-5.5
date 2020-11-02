class Intro{
    constructor(){
        this.next = createButton("Next");
        this.about_daniel = createElement("h2");
    }

    story(){
        
        this.about_daniel.html("Hello User, Nice to meet you. I am here to help you out with who this man is. Can you help him get out of " +  
        "this spooky forest... Daniel is a nice man, he lives in the town 2 km away. He is a hunter for passion so he came to this forest and is now lost.. Please help him user...")
        this.about_daniel.position(displayWidth/12, displayHeight/4);
        this.next.position(displayWidth/2+200, displayHeight/2-70);
    }
  

}