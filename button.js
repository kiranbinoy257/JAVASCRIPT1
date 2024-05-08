// seters and geters

class Button{
    constructor(name){
        this.button = document.createElement("button");
        this.button.innerhtml = name;
        document.body.appendChild(this.button)
    }
    setWidth(width){
        this.button.style.width=width+"px";
    }
    setHeight(height){
        this.button.style.height=height+"px";
    }
    get Width(){
        return parseInt(this.button.style.width)
    }
    get Height(){
        return this.button.style.height
    }
}
var btn=new Button("click me")
console.log(btn);
btn.setWidth(200)
btn.setHeight(100)
console.log(btn.Width,btn.Height);