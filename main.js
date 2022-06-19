class musicPlayer {
    constructor() {
        this.play = this.play.bind(this);
        this.playBtn = document.getElementById('play');
        this.playBtn.addEventListener('click', this.play);
        this.controlPanel = document.getElementById('control-panel');
        this.infoBar = document.getElementById('info');
        this.status = false;
    }
    play() {
        var audio = document.getElementById('Music'); 
        let controlPanelObj = this.controlPanel,
        infoBarObj = this.infoBar
        Array.from(controlPanelObj.classList).find(function(element){   
            return element !== "active" ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active');       
        });
        Array.from(infoBarObj.classList).find(function(element){
            return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
        });
        this.status = !this.status;
        if(this.status == true){
            audio.play(); 
        }else{
            audio.pause();
        }
volumen.addEventListener('click', function(){
    let vol = this.value
    audio.volume = vol
    
})
    }
}
const newMusicPlayer = new musicPlayer();
const volumen = document.querySelector('.volumen')