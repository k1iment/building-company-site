document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.open').addEventListener('click', function(){
        document.querySelector('.second-paragraph').classList.remove("none")
        document.querySelector('.close').classList.remove("none")
        document.querySelector('.open').classList.add("none")
    })

    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.second-paragraph').classList.add("none")
        document.querySelector('.close').classList.add("none")
        document.querySelector('.open').classList.remove("none")
    })

    
})

