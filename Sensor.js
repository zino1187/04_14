class Sensor{
    constructor(objectId,container,width,height,x,y){
        this.objectId=objectId;//객체를 구분하기 위한 식별값
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        //스타일 
        this.div.style.position="absolute";

        this.div.style.background="yellow";

    }

    tick(){
        this.x=megaman.x;
        this.y=megaman.y;
    }
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}