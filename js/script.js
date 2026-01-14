document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("contactResponse");
  form?.addEventListener("submit", function(e) {
    e.preventDefault();
	document.getElementById("time").value = new Date().toLocaleString();
	emailjs.sendForm('service_kcx3rpo', 'template_owhl4y6', this).then(function() {
	response.textContent ="Thank you! Your message has been sent. We will contact you shortly.";
	console.log('SUCCESS!');
	form.reset();
	}, function(error) {
	response.textContent ="Error sending message. Please try again.";
	console.log(response.textContent, error);
	});
  });
});

// Lightbox functionality
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/" ) {

  const heroImg = document.getElementById("heroImg");
  const scImg = document.getElementById("scImg");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close");

  if (heroImg && scImg && lightbox && lightboxImg) {

    heroImg.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = heroImg.src;
    });

    scImg.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = scImg.src;
    });
	
	closeBtn.addEventListener("click", () => {
	  lightbox.style.display = "none";
	});

	lightbox.addEventListener("click", (e) => {
	  if (e.target === lightbox) lightbox.style.display = "none";
	});	

  }
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slider .slide");
  const slider = document.querySelector(".slider");
  let currentIndex = 0;

  setInterval(() => {
	currentIndex = (currentIndex + 1) % slides.length;
	slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 3000); // Change image every 3 seconds
});
  
}

