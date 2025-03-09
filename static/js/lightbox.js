const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

function openLightbox(imgSrc) {
    lightbox.style.display = 'block';
    lightboxImg.src = imgSrc;
    document.body.style.overflow = 'hidden';
}

function closeLightboxHandler() {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking the close button
closeLightbox.addEventListener('click', closeLightboxHandler);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightboxHandler();
    }
});

// Close lightbox with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightboxHandler();
    }
});
