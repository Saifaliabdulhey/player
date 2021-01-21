class Color{

    constructor(){

        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            this.set_Color("color1");

        });

       this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            this.set_Color("color2");

        });

        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            this.set_Color("color3");

        });

        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            this.set_Color("color4");

        });

    }
    set_Color(color){
        if(color == "color1"){
            document.body.style.background =" linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";

        }

        else if(color =="color2"){
            document.body.style.background ="linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)";

        }

        if(color == "color3"){
            document.body.style.background =" linear-gradient(to right, #41295a, #2f0743)";

        }
        else if(color == "color4"){
            document.body.style.background ="linear-gradient(to right, #ff0084, #33001b)";
        }

    }
}
onload = new Color();