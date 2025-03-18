const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "Tonkotsu.jpg" }
 ];


function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";

    ramens.forEach(ramen => {
       const image = document.createElement("img");
        image.src = ramen.image;
        image.alt = ramen.name;
        image.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);
    });
}


function handleClick(ramen) {
    document.getElementById("detail-name").textContent = ramen.name;
    document.getElementById("detail-restaurant").textContent = ramen.restaurant;
    

}

function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    
    form.addEventListener("create", click => {

        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value,
    };

// Adding a new element to ramens array 
ramens.push(newRamen);


displayRamens();

// Clear form
form.reset();
});
}

// function to initialize app
function main() {
    displayRamens();
    addSubmitListener();
}

// Ensure the DOM is fully loaded before main function runs
document.addEventListener("DOMContentLoaded", main);