// PET DATA
const pets = [
    { name: "Bella", type: "dog", age: 2, image: "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0" },
    { name: "Rocky", type: "dog", age: 3, image: "https://www.shutterstock.com/image-photo/beautiful-golden-retriever-cute-puppy-600nw-2526542701.jpg" },
    { name: "Max", type: "dog", age: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQuqM4jZHz2n60Vp7LqcS9op4cuu24Lt2dA&s" },

    { name: "Luna", type: "cat", age: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgLo9vC_jTky9f4O_iksW-Uq2Yz5OP9aaog&s" },
    { name: "Milo", type: "cat", age: 3, image: "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=" }
];

const petContainer = document.getElementById("petContainer");
const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const adoptBtn = document.getElementById("adoptBtn");

function displayPets() {
    petContainer.innerHTML = "";
    let searchValue = searchInput.value.toLowerCase();
    let typeFilter = filterType.value;

    pets
        .filter(pet =>
            (typeFilter === "all" || pet.type === typeFilter) &&
            pet.name.toLowerCase().includes(searchValue)
        )
        .forEach((pet, idx) => {
            let card = document.createElement("div");
            card.className = "pet-card";
            card.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}">
                <div class="info">
                    <h3>${pet.name}</h3>
                    <p>Type: ${pet.type}</p>
                    <p>Age: ${pet.age} yrs</p>
                </div>
            `;
            card.onclick = () => openModal(pet, idx);
            petContainer.appendChild(card);
        });
}

displayPets();
searchInput.addEventListener('input', displayPets);
filterType.addEventListener('change', displayPets);

function openModal(pet, idx) {
    document.getElementById("petName").innerText = pet.name;
    document.getElementById("petDetails").innerText =
        `A lovely ${pet.type} aged ${pet.age} waiting for a new home!`;
    modal.style.display = "flex";

    adoptBtn.onclick = () => {
        alert('Thank you! A representative will contact you regarding ' + pet.name + '.');
        modal.style.display = 'none';
    };
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
