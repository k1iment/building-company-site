document.addEventListener('DOMContentLoaded', function(){
    const tabsBtn = document.querySelectorAll('.number');
    const tabsItem = document.querySelectorAll('.tabs-container');

    tabsBtn.forEach(function(item) {

        item.addEventListener('click', function(){
            
            let tabId = item.getAttribute("data-tab")
            let currentTab = document.querySelector(tabId)


            tabsBtn.forEach(function(item) {
                item.classList.remove('number-active')
            })

            tabsItem.forEach(function(item) {
                item.classList.remove('tabs-container-active')
            })

            item.classList.add('number-active')
            currentTab.classList.add('tabs-container-active')
        })
    })
})