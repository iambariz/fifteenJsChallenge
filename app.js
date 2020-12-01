const buttons = document.querySelectorAll('.fas.fa-arrow-down');

buttons.forEach(function(btn){  
    btn.addEventListener('click', function(e){
        questionBox = document.querySelectorAll('.question-text');
        questionBox.forEach(function(e){
            e.classList.remove("open");
        })
        const container = (e.currentTarget.parentElement.children[3]);
        container.classList.toggle('open');
    });


});