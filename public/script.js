
const button = document.querySelector('button');

const ul1= document.getElementById('petName');

button.addEventListener('click', ()=>{
    fetch('http://localhost:8080/api/v1/pets')
        .then(res => res.json())
        .then(pets =>{
            pets.forEach((pet) => {
                const li = document.createElement('li');
                li.textContent= pet.name;
                ul1.appendChild(li)
            });
        })
})