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



function myFunction() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");

    // Update button text based on dropdown visibility
    var buttonText = dropdown.classList.contains("show") ? "Collapse" : "Read More";
    document.querySelector(".dropbtn").textContent = buttonText;
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                document.querySelector(".dropbtn").textContent = "Read More";
            }
        }
    }
}


function myFunction1() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


function burgerf() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-list li'); // Assuming your items are in <li> tags

    // Toggle menu open/close when burger icon is clicked
    mobileMenuButton.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Close menu when a navigation item is clicked
    navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
}