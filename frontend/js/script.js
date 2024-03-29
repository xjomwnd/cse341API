document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch social media data
    function fetchSocialMediaData() {
        // Mock data representing social media posts
        const mockData = [
            {
                username: "user1",
                platform: "Twitter",
                content: "This is a tweet!",
                timestamp: "2024-03-29T10:00:00Z"
            },
            {
                username: "user2",
                platform: "Facebook",
                content: "Check out this post!",
                timestamp: "2024-03-29T09:30:00Z"
            },
            {
                username: "user3",
                platform: "Instagram",
                content: "Awesome photo!",
                timestamp: "2024-03-29T08:45:00Z"
            }
        ];

        // Process and display social media data
        mockData.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <div class="post-header">
                    <span class="username">${post.username}</span> 
                    <span class="platform">(${post.platform})</span>
                </div>
                <div class="post-content">${post.content}</div>
                <div class="post-timestamp">${formatTimestamp(post.timestamp)}</div>
            `;
            document.getElementById("app").appendChild(postElement);
        });
    }

    // Function to format timestamp
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
    }

    // Call the function to fetch and display social media data
    fetchSocialMediaData();
});
