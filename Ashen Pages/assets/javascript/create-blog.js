
document.addEventListener("DOMContentLoaded", () => {
    // Retrieving the stored blog posts info from localStorage
    let blogPostsData = JSON.parse(localStorage.getItem("blogPostsData") || "[]");

    // Grabs the container where blog posts will be displayed
    let postContainer = document.getElementById("postContainer");

    // Checks if there are any posts to display
    if (blogPostsData.length > 0) {
      
        blogPostsData.forEach(post => {
            // Create a div to hold the blog post
            let postDiv = document.createElement("div");
            postDiv.classList.add("blog-post");

        // Content pulled from local storage to be displayed
            postDiv.innerHTML = `
                <h2>${post.userName}<h2>
                <h3>${post.postTitle}</h3>
                <p>${post.postContent}</p>
            `;

            // Displays above content in the dynamically created div
            postContainer.appendChild(postDiv);
        });
    } else {
        //Displays a message if there are no posts in local storage i.e a first time user
        postContainer.innerHTML = "<p>No blog posts to display.</p>";
    }
});