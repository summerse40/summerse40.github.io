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

let currentRepoIndex = 0;
let repos = [];

function fetchRepos() {
    const username = 'summerse40'; // Replace with desired GitHub username
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            // Filter out the unwanted repository by its name
            repos = data.filter(repo => repo.name !== 'summerse40.github.io');
            displayRepo();
        });
}

function displayRepo() {
    const repo = repos[currentRepoIndex];
    if (repo) {
        document.getElementById('repo-name').textContent = repo.name;
        document.getElementById('repo-description').textContent = repo.description || "No description provided.";
    }
}

function previousRepo() {
    currentRepoIndex = Math.max(currentRepoIndex - 1, 0);
    displayRepo();
}

function nextRepo() {
    currentRepoIndex = Math.min(currentRepoIndex + 1, repos.length - 1);
    displayRepo();
}

// Fetch the repositories on page load.
fetchRepos();


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
document.addEventListener("DOMContentLoaded", function() {
    openTab('Bio');
});


function closeAllTabs() {
    let i;
    const content = document.getElementsByClassName("tabcontent");

    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
}

function openTab(tabName) {
    const content = document.getElementById(tabName);

    if (content.style.display === "block") {
        content.style.display = "none"; // If already open, close it
    } else {
        closeAllTabs(); // Close all other sections
        content.style.display = "block"; // Open the clicked section
    }
}

const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('open');
});