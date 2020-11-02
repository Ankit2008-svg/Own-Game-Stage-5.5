class Play{
    constructor(){
        this.p = createButton("Play");
        this.headline = createElement("h1");
    }
    play(){

        this.p.position(displayWidth/2-60, displayHeight/2);
        this.p.size(100,60);
        this.p.style("font-size","30px");
        this.p.style("background-color","orange");
        this.headline.html("Lost In Jungle");
        this.headline.style("color","white");
        this.headline.style("font-size","70px");
        this.headline.position(displayWidth/2-230,displayHeight/4);
    }
}