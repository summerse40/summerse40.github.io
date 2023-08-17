window.onload = function() {
        fetch('about.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('about-content').innerText = data;
            })
            .catch(error => {
                console.log('There was a problem with the fetch operation:', error.message);
            });
    }
    // script.js
    // script.js
    // script.js
    // script.js
    // script.js
    // script.js
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentSlide = 0;
let projectsData = [];

async function fetchProjects() {
    try {
        const response = await fetch('https://api.github.com/users/summerse40/repos');
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

function displayProjects() {
    carousel.innerHTML = ''; // Clear previous content

    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
    <div class="iframe-container">
      <iframe src="${projectsData[currentSlide].html_url}" title="${projectsData[currentSlide].name}" class="borderless-iframe"></iframe>
    </div>
    <p>${projectsData[currentSlide].description || 'No description available.'}</p>
    <a href="${projectsData[currentSlide].html_url}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  `;

    carousel.appendChild(projectCard);
}

async function init() {
    projectsData = await fetchProjects();
    displayProjects();
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + projectsData.length) % projectsData.length;
    displayProjects();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % projectsData.length;
    displayProjects();
});

init();

// List of skills
const skills = [
    "java",
    "html/css",
    "javascript",
    "hadoop",
    "visual studio code",
    "wordpress",
    "python",
    "pyspark"
];

// Select the skills list element from the DOM
const skillsList = document.getElementById("skills-list");

// Loop through each skill and add it to the skills list
skills.forEach(skill => {
    let skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});

let lastScrollTop = 0; // Store the last scroll position
const header = document.getElementById('container');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // When scrolling down
        header.style.top = "-80px"; // Assuming the height of your header is 80px
    } else {
        // When scrolling up
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

const container = document.querySelector(".falling-flowers-container");

const numFlowers = 50; // Number of flowers to generate

for (let i = 0; i < numFlowers; i++) {
    const flower = document.createElement("div");
    flower.classList.add("falling-flower");

    const randomX = Math.random() * 100; // Random X position (percentage)
    const randomDelay = Math.random() * 5; // Random delay for animation
    flower.style.left = `${randomX}%`;
    flower.style.animationDelay = `${randomDelay}s`;

    container.appendChild(flower);
}