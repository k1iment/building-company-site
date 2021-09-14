document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function(){
        document.querySelector('.header-links').classList.toggle('header-links-active')
    })
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.first-search').addEventListener('click', function(){
        document.querySelector('.first-search').classList.add('first-search-active')
        document.querySelector('.search-container').classList.add('search-container-active')
    })

    document.querySelector('.hide').addEventListener('click', function(){
       /* document.querySelector('first-search').classList.remove('first-search-active')*/
        document.querySelector('.search-container').classList.remove('search-container-active')
    })
})
