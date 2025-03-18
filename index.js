const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "Tonkotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "Tonkotsu.jpg", rating: null, comment: null }
];

function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = ""; 

    ramens.forEach(ramen => {
        const image = document.createElement("img");
        image.src = ramen.image;
        image.alt = ramen.name;
        image.addEventListener("click", () => handleClick(ramen)); // run image click function
        menu.appendChild(image);
    });
}

function handleClick(ramen) {
    
    document.getElementById("ramen-detail").innerHTML = ""; // Clear previous details

    // Create a new ramen image
    const newImage = document.createElement("img");
    newImage.src = ramen.image;
    newImage.alt = ramen.name;
    
    // Add ramen details 
    const nameElement = document.createElement("div");
    nameElement.textContent = ramen.name;

    const restaurantElement = document.createElement("div");
    restaurantElement.textContent = ramen.restaurant;

    // Add elements to ramen-detail container
    const ramenDetail = document.getElementById("ramen-detail");
    ramenDetail.appendChild(newImage);
    ramenDetail.appendChild(nameElement);
    ramenDetail.appendChild(restaurantElement);
}

// submit listener function
function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value,
            rating: document.getElementById("new-rating").value,
            comment: document.getElementById("new-comment").value
        };

        ramens.push(newRamen);

        displayRamens();
        form.reset();
    });
}

// Initialize the app
function main() {
    displayRamens();
    addSubmitListener();
}

// Ensure the DOM is fully loaded before the main function runs
document.addEventListener("DOMContentLoaded", main);