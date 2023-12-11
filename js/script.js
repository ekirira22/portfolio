const contact = document.getElementById("contactme");

//button click event listener -> pop up alert
contact.addEventListener('click', () => {
    alert("Call me @ +254719405599");
});

const anchorr = document.querySelector('a');
//change anchor tag color when hovered
anchorr.addEventListener('mouseover', () => {
    anchorr.style.color = "wheat";
});

//change anchor tag color when mouse leaves
anchorr.addEventListener('mouseout', () => {
    anchorr.style.color = "white";
})

