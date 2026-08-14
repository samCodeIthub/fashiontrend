const chips = document.querySelectorAll('.sort-out button');
const dresses = document.querySelectorAll('.dress');

chips.forEach(chip => {
    chip.addEventListener('click', function(){
        chips.forEach(c => c.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;

        dresses.forEach(dress => {
            if(filter === 'all' || dress.dataset.category === filter){
                dress.style.display = 'block';
            } else {
                dress.style.display = 'none';
            }
        });
    });
});