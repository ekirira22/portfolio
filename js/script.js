const contact = document.getElementById("contact");

//button click event listener -> pop up alert
contact.addEventListener('click', () => {
    alert("Call me @ +254719405599");
});

const blog = document.getElementById("myblog");

//button click event for myblog
blog.addEventListener('click', () => {
    alert("Coming soon");
})

const anchorr = document.querySelector('a');
//change anchor tag color when hovered
anchorr.addEventListener('mouseover', () => {
    anchorr.style.color = "wheat";
});

//change anchor tag color when mouse leaves
anchorr.addEventListener('mouseout', () => {
    anchorr.style.color = "white";
})

