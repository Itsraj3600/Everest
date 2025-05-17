// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const idCardButton = document.querySelector('.id-card-button');
    idCardButton.addEventListener('click', function() {
        window.location.href = '/id.html'; // opens in the same tab
    });
});


    // Add click event listener to the settings icon
    const settingsIcon = document.querySelector('.settings');
    settingsIcon.addEventListener('click', function() {
        alert('Settings page will be implemented here');
    });

    // Function to check for announcements (simulated)
    function checkForAnnouncements() {
        // This would typically be an API call to fetch announcements
        console.log('Checking for announcements...');
        // For now, we'll just leave the "no announcements" message
    }

    // Function to check for resources (simulated)
    function checkForResources() {
        // This would typically be an API call to fetch resources
        console.log('Checking for resources...');
        // For now, we'll just leave the "no resources" message
    }

    // Initial checks
checkForAnnouncements();
checkForResources();