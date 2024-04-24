
// Makes the theme toggle when the styled checkbox is checked. 
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('theme-toggle');

    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    });
});

// Makes the "Home Page button take the user back to the index.html (main page)"
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';  
});
