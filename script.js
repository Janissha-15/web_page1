// Smooth Scrolling for Offers Section
document.querySelector(".hero button").addEventListener("click", function() {
    window.scrollTo({ top: document.querySelector(".offers").offsetTop, behavior: "smooth" });
});

// Add Review Feature (Product Page)
function addReview() {
    let reviewInput = document.getElementById("review-input").value;
    if (reviewInput.trim() === "") {
        alert("Please enter a review!");
        return;
    }

    let reviewList = document.getElementById("review-list");
    let newReview = document.createElement("li");
    newReview.textContent = "User: " + reviewInput;
    reviewList.appendChild(newReview);

    document.getElementById("review-input").value = "";
}
function toggleWishlist(button) {
    button.classList.toggle("active");
}
