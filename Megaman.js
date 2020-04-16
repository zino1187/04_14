class Megaman extends GameObject{
    constructor(objectId,container,src,width,height,velX,velY,x,y){
        super(objectId,container,src,width,height,velX,velY,x,y);

        //메가맨의 이미지는 sprite 이기때문에 div안에서 마스크처리
        //되어야 한다..따라서 이미지의 크기와 div가 같지 않다!!
        //div를 넘는 이미지에 대해서는 않보기에 
        this.div.style.overflow="hidden";
        this.img.style.width=50+"px";
        this.img.style.height=60+"px";

    }

    tick(){
        //좌우 움직임 
        this.x+=this.velX;

        //중력적용
        this.velY+=this.g; //가속도 표현 
        this.y+=this.velY;//방향은 y축으로 함으로써, 중력가속도 표현

        //벽돌위에 서 있기 
       for(var i=0;i<objectManager.objectArray.length;i++){
           //배열에 들어있는 요소가 섞여 있기때문에, 객체에 심어놓은 
           //objectId를 이용하여 구분지은 후, 벽돌위에 서 있게 처리
           var gameObject = objectManager.objectArray[i];

           //console.log("이 객체의 정체는 ",gameObject.objectId);

           if(gameObject.objectId=="Block"){
               var onBlock = collisionCheck(this.div, gameObject.div);

               if(onBlock){//벽돌과 마주치면...메가멘의 위치는 벽돌보다
                                //자신의 키만큼 올라감(y축의 음수방향에 위치함)
                    this.velY=0;
                    this.y=gameObject.y-this.height;
               }
           }
       }
    }

    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}





