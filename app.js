const buttons = document.querySelectorAll('.fas.fa-arrow-down');


buttons.forEach(function(btn){  
    btn.addEventListener('click', function(e){
        const container = (e.currentTarget.parentElement.children[3]);
        container.classList.toggle('open');
    });


});