document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // stop default anchor jump

            // Remove active class from all links
            navbarLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Hide all sections
            sections.forEach(sec => sec.style.display = 'none');

            // Show the clicked section
            const target = this.getAttribute('href'); // e.g., "#projects"
            const targetSection = document.querySelector(target);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});

// Select all project cards
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalVideo = document.getElementById('modalVideo');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

// Click on any card
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-img');
        const videoSrc = this.getAttribute('data-video');
        const title = this.querySelector('h3').innerText;

        captionText.innerText = title;
        modal.style.display = 'block';

        if (videoSrc) {
            // Show video
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = videoSrc;
            modalVideo.load();
        } else if (imgSrc) {
            // Show image
            modalVideo.style.display = 'none';
            modalVideo.src = '';
            modalImg.style.display = 'block';
            modalImg.src = imgSrc;
        }
    });
});

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
    modalVideo.pause();
}

// Close modal when clicking outside content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        modalVideo.pause();
    }
}
function openVideo(card) {
    const videoContainer = card.querySelector('.video-container');
    if(videoContainer.style.display === 'none') {
        videoContainer.style.display = 'block';  // Show the video
    } else {
        videoContainer.style.display = 'none';   // Hide if clicked again
    }
}