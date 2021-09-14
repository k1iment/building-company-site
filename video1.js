let video = document.querySelector('#video-player');

document.querySelector('.big-play').onclick = bigPlay;

function bigPlay() {
    video.play();
    document.querySelector('.big-play').classList.add("no-controls");
    document.querySelector('.controls-background').classList.remove("no-controls")
    document.querySelector('#play').classList.add("no-controls")
}

document.querySelector('#pause').addEventListener('click', function() {
    document.querySelector('#play').classList.remove("no-controls")
    document.querySelector('#pause').classList.add("no-controls")
})

document.querySelector('#play').addEventListener('click', function() {
    document.querySelector('#pause').classList.remove("no-controls")
    document.querySelector('#play').classList.add("no-controls")
})

video.addEventListener('mouseenter', function() {
    document.querySelector('.controls-background').classList.remove("hidden")
})

document.querySelector('.controls-background').addEventListener('mouseover', function(){
    document.querySelector('.controls-background').classList.remove("hidden")
})

document.querySelector('.controls-background').addEventListener('mouseout', function(){
    document.querySelector('.controls-background').classList.add("hidden")
})
