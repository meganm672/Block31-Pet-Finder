
const button = document.querySelector('button');

const ul1= document.getElementById('petName');

button.addEventListener('click', ()=>{
    fetch('http://localhost:8080/api/v1/pets')
        .then(res => res.json())
        .then(pets =>{
            pets.forEach((pet) => {
                const li = document.createElement('li');
                const li2 = document.createElement('li');
                const li3 = document.createElement('li');
                li.textContent= `Name: ${pet.name}`;
                li.classList.add("pet-list");
                li2.textContent= `Breed: ${pet.breed}`;
                li2.classList.add("pet-list");
                li3.textContent= `Age: ${pet.age}`;
                li3.classList.add("pet-list");
                ul1.appendChild(li);
                ul1.appendChild(li2);
                ul1.appendChild(li3);
            });
        })
})