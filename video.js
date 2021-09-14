document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#play').onclick = play;
    document.querySelector('#pause').onclick = pause;
    document.querySelector('#speed-quick').onclick = speedQuick;
    document.querySelector('#speed-slow').onclick = speedSlow;
    document.querySelector('#speed-normal').onclick = speedNormal;
    document.querySelector('#volume').oninput = videoVolume;

    let video = document.querySelector('#video-player');
    let display;
    let progress = document.querySelector('#progress');

    video.ontimeupdate = progressUpdate;
    progress.onclick = videoRewind;

    function play(){
        video.play();
    };

    function pause(){
        video.pause();
    };

    function speedQuick(){
        video.play();
        video.playbackRate = 2;
    };
    function speedSlow(){
        video.play();
        video.playbackRate = 0.5;
    };
    function speedNormal(){
        video.play();
        video.playbackRate = 1;
    };
    function videoVolume(){
        let v = this.value;
        console.log(v);
        video.volume = v/100;
    };

    function progressUpdate() {
        let d = video.duration;
        let c = video.currentTime;
        progress.value = (100*c)/d;
    }

    function videoRewind() {
        let w = this.offsetWidth;
        console.log(w)
        let o = event.offsetX;
        console.log(o);
        this.value = (100*o)/w;
        video.pause;
        video.currentTime = video.duration*(o/w);
        video.play;
    }

})