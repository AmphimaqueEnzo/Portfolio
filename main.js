const image = document.querySelector("img");
// image.alt = "Le logo de mon site"

// console.log(image.alt);

image.addEventListener("click", function (){
    image.classList.toggle("border-yellow");
});

// Récupérer les élément HTML dont on a besoin

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // vérifier si le contenu de l'input est vide
    if (nameInput.value.trim() === " "){
        // Afficher un message d'erreur
        nameError.classList.remove("hidden");
    } else {
        // Si on, on enleve le message d'enter
        nameError.classList.add("hidden");
        // Afficher le contenu du formulaire dans la console
        console.log("name:", nameInput.value);
    
    }    
    
})


//DROPDOWN MENU

// Récupérer les éléments dont on a besoin
// Le Logo pour écouter le hover
const logo = document.querySelector(".logo")
// Le menu dropdown 
const dropdown = document.querySelector(".dropdown")
// Ecouter l'événement "survol de la souris" sur le logo
logo.addEventListener("mouseover", function () {
    // Redonner la taille original
    dropdown.classList.add("hidden");
});

logo.addEventListener("mouseout", function () {
    dropdown.classList.add("hidden");
});


const buttons = document.querySelectorAll('.btn');


buttons.forEach(btn => {
btn.addEventListener('mouseenter', () => {
btn.style.letterSpacing = '2px';
});


btn.addEventListener('mouseleave', () => {
btn.style.letterSpacing = '0px';
});
});
