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
    const token = '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'; // Replace with your personal access token
    try {
        const response = await fetch('https://api.github.com/users/summerse40/repos', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

async function displayProjects() {
    const carousel = document.querySelector('.carousel');
    carousel.innerHTML = ''; // Clear previous content

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectDescription = document.createElement('p');
    projectDescription.textContent = projectsData[currentSlide].description || 'No description available.';

    // Create the "Navigate to GitHub" link
    const navigateLink = document.createElement('a');
    navigateLink.href = projectsData[currentSlide].html_url;
    navigateLink.textContent = 'Navigate to GitHub';
    navigateLink.target = '_blank';
    navigateLink.rel = 'noopener noreferrer';

    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(navigateLink);

    carousel.appendChild(projectContainer);
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