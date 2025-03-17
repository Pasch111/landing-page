document.addEventListener('DOMContentLoaded', function() {
    // If using direct embedding or object tag
    const svg = document.querySelector('svg') || document.querySelector('object').contentDocument.querySelector('svg');
    
    // Add click event listeners to buttons
    // Example for the "Dashboard" button
    const dashboardButton = svg.querySelector('rect[x="10"][y="165"]');
    if (dashboardButton) {
        dashboardButton.style.cursor = 'pointer';
        dashboardButton.addEventListener('click', function() {
            console.log('Dashboard button clicked');
            // Add your action here
            // window.location.href = 'dashboard.html';
        });
    }
    
    // Example for the "Playbooks" button
    const playbooksButton = svg.querySelector('rect[x="10"][y="295"]');
    if (playbooksButton) {
        playbooksButton.style.cursor = 'pointer';
        playbooksButton.addEventListener('click', function() {
            console.log('Playbooks button clicked');
            // Add your action here
        });
    }
    
    // Add more button event listeners as needed
});