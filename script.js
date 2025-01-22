
let currentIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-images img");
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides;
    document.querySelector(".carousel-images").style.transform = `translateX(-${currentIndex * 100}%)`;
}

function openModal(title, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}
