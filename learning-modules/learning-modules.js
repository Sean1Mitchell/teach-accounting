function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active')
    document.querySelector('header').classList.toggle('active')
    document.querySelector('.main-content').classList.toggle('active');
}

function toggleDropdown(button) {
    const topic = button.closest(".grid-topic");
    const lessonGrid = topic.querySelector(".lesson-grid");
    lessonGrid.classList.toggle("active");
}