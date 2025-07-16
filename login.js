// Insert your code here


document.querySelector('#register').addEventListener('click', function() {
    console.log('test')
    const name = document.querySelector('#registerName').value;
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;

    fetch('http://weatherapp-backend-one-tan.vercel.app/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, email, password }),
    }).then(response => response.json())
        .then(data => {
            if (data.result) {
                window.location.assign('index.html');
            };
        });
});

document.querySelector('#connection').addEventListener('click',function() {
    const email = document.querySelector('#connectionEmail').value;
    const password = document.querySelector('#connectionPassword').value;

    fetch('http://weatherapp-backend-one-tan.vercel.app/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
    }).then(response => response.json())
        .then(data => {
        if (data.result){
            window.location.assign('index.html')
        }
    })
})