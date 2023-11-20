let userCount = 50; // Starting user count in K
        const userCountElement = document.getElementById('userCount');

        function randomInterval() {
            return Math.floor(Math.random() * (5000 - 3000 + 1) + 3000); // Random time between 3 to 5 seconds
        }

        function updateCount() {
            userCount++; // Increment by 1
            const previousCount = parseInt(userCountElement.textContent); // Get the previous count

            // Check if it's a whole number and different from the previous count
            if (userCount % 10 === 0 && userCount !== previousCount) {
                userCountElement.classList.add('flash-animation'); // Apply the flash animation
            } else {
                userCountElement.classList.remove('flash-animation'); // Remove the animation
            }

            userCountElement.textContent = userCount + 'K'; // Update the displayed count with "K"
            setTimeout(updateCount, randomInterval()); // Set the next update with a random interval
        }

        setTimeout(updateCount, randomInterval()); // Initial update with a random interval