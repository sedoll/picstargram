document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const profileLink = document.getElementById('profile-link');
    const feedPage = document.getElementById('feed-page');
    const profilePage = document.getElementById('profile-page');

    const posts = document.querySelectorAll('.post img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementsByClassName('close')[0];

    homeLink.addEventListener('click', () => {
        feedPage.style.display = 'block';
        profilePage.style.display = 'none';
    });

    profileLink.addEventListener('click', () => {
        feedPage.style.display = 'none';
        profilePage.style.display = 'block';
    });

    posts.forEach(post => {
        post.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = post.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
