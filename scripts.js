"use strict";

// Debounce function to improve search performance
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Enhanced search function with debouncing and input sanitization
function searchFunction() {
    const query = sanitizeInput(document.getElementById("search-bar").value.toLowerCase());
    const resultsContainer = document.getElementById("search-results");

    if (resultsContainer) {
        // Simulating a dynamic search result display with a loading message
        resultsContainer.innerHTML = `Searching for "${query}"... (Feature in development)`;
    } else {
        console.error("Search results container not found.");
    }
}

// Debounced version of the search function
const debouncedSearch = debounce(searchFunction, 300);

// Hamburger menu toggle with accessibility features
function toggleMenu() {
    const navMenu = document.querySelector(".nav-buttons");
    const isActive = navMenu.classList.toggle("active");

    // Set aria-expanded attribute for accessibility
    navMenu.setAttribute("aria-expanded", isActive ? "true" : "false");

    // Adding an animation for smooth transitions
    navMenu.style.transition = "transform 0.3s ease";
}

// Sanitize input to prevent XSS attacks
function sanitizeInput(input) {
    const temp = document.createElement("div");
    temp.textContent = input;
    return temp.innerHTML;
}

// Fetch example with async/await and error handling
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Performance enhancements: Lazy loading and requestAnimationFrame example
function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const loadImage = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => image.removeAttribute("data-src");
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach((image) => {
        imageObserver.observe(image);
    });
}

document.addEventListener("DOMContentLoaded", lazyLoadImages);

// Adding performance metrics monitoring using Performance API
function monitorPerformanceMetrics() {
    if ("performance" in window) {
        const { timing } = performance;
        const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
        console.log("Page Load Time:", pageLoadTime);
    }
}

monitorPerformanceMetrics();

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('.nav-container');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navContainer.classList.toggle('active');
});
