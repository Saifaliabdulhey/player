class Player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if(heightMain.width<620){
            heightMain.style.width = screen.width +"px";
        }

        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-300 + "px";

    }
}
onload = new Player();


// class Buttons

class Audio_Player{
    constructor(){

        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_audio");
        this.play_pause_button = document.getElementById("play_pause");
        this.isPlayed;
        

        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause();

        });

        this.names = [];
        this.names[0]="Dua Lipa";
        this.names[1]="LZ7 - Sound of the Weekend";
        this.names[2]="Valorant Song - Ready Up - #NerdOut";

        this.audios = [];

        this.audios[0] = "song.mp3";
        this.audios[1] = "music.mp3";
        this.audios[2] = "niga.mp3";
        this.numberAudio =0;

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });


        this.setSource();
    }
    
    setSource(){
 
        document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
        document.getElementById("audio_file").src = this.audios[this.numberAudio];
    
        this.play_pause();
        }

    play_pause(){

        if(this.isPlayed == false){
            this.play_pause_button.src = "./images/pause.png";
           this.audio_file.play();
           this.isPlayed = true;
           document.getElementById("content").style.marginTop = 20+ "px";
           document.getElementById("content").classList.add("animation");
           document.getElementById("content").style.animationDuration = 11 +"s";
           document.getElementById("logo_image").style.borderRadius = 100 +"px";
           
        }else{
            this.play_pause_button.src = "./images/play.png";
            this.audio_file.pause();
            this.isPlayed = false;
            document.getElementById("content").style.marginTop = 200 + "px";
            document.getElementById("content").style.animationDuration = 2 + "s";
            document.getElementById("content").classList.remove("animation");
            document.getElementById("logo_image").style.borderRadius = 40 +"px";

            

        }
    }
    next_audio(){
        if(this.numberAudio<this.audios.length-1){
               ++this.numberAudio;
               this.isPlayed = false; 
               }
        else   {
               this.numberAudio = 0;
               }
               this.setSource();
   }
   back_audio(){
       if(this.numberAudio>0){
           --this.numberAudio;
           this.isPlayed = false; 
        }
        else{
           this.numberAudio = this.audios.length -1;
           
        }
     
        this.setSource();
   }

}
onload = new Audio_Player();