const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const myForm = document.getElementById('my-form');
    myForm.style.backgroundColor = 'lightblue';
});

