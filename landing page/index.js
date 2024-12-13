document.addEventListener("DOMContentLoaded", () => {
    // Scroll to Top Button
    const scrollToTopButton = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // Header - Sticky Navigation
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;

    window.addEventListener("scroll", () => {
        if (window.scrollY > headerHeight) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Hero Section - Smooth Scroll to Target Sections
    const heroButtons = document.querySelectorAll(".hero-button");

    heroButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(button.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Why Choose Us Section - Hover Animation
    const whyCards = document.querySelectorAll(".why-card");

    whyCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)"; // Card hover effect
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)"; // Reset card position
        });
    });

    // How It Works Section - Step Animation
    const steps = document.querySelectorAll(".how-it-works-step");

    steps.forEach(step => {
        step.addEventListener("mouseenter", () => {
            step.style.transform = "translateY(-10px)"; // Lift effect
            step.style.transition = "all 0.3s ease";
        });

        step.addEventListener("mouseleave", () => {
            step.style.transform = "translateY(0)"; // Reset position
        });
    });

    // Dashboard Overview - Card Hover Effect
    const dashboardCards = document.querySelectorAll(".dashboard-card");

    dashboardCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            card.style.transform = "scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
            card.style.transform = "scale(1)";
        });
    });

    // Testimonials Section - Carousel (or Slide effect)
    const testimonials = document.querySelectorAll(".testimonial-item");
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    showTestimonial(currentTestimonial);

    // Automatically change testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Call to Action Section - Animate Button
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("mouseenter", () => {
        ctaButton.style.transform = "scale(1.1)";
        ctaButton.style.transition = "all 0.3s ease";
    });

    ctaButton.addEventListener("mouseleave", () => {
        ctaButton.style.transform = "scale(1)";
    });

    // Footer - Smooth Scroll to Top
    const footer = document.querySelector("footer");
    const footerButton = footer.querySelector(".back-to-top");

    footerButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // Newsletter Form Submission (simple email validation)
    const newsletterForm = document.querySelector(".newsletter-form");
    const emailInput = newsletterForm.querySelector("input[type='email']");
    const submitButton = newsletterForm.querySelector("button");

    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            alert("Thank you for subscribing!");
            emailInput.value = "";  // Clear the input field after submission
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});