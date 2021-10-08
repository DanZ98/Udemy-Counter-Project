// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');

// select buttons
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener('click', function(e){

        const styles = e.currentTarget.classList;

        // Increase or decrease the count
        switch(true){
            case styles.contains('decrease'):
            count--;
            break;

            case styles.contains('increase'):
            count++;
            break;

            default:
            count = 0;
        }

        // Changing colors based on the switch statement results above
        switch(true){
            case count > 0:
            value.style.color = 'green';
            break;

            case count < 0:
            value.style.color = 'red';
            break;

            case count === 0:
            value.style.color = '#222';
            break;
        }

        value.textContent = count;

    });

}); 
