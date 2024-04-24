
document.getElementById("blogForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let formValidationCheck = true;
    let blogFormData = new FormData(e.target);
    let newBlogPost = {}; 

    
    for (let [name, value] of blogFormData.entries()) {
        if (!value.trim()) {
            formValidationCheck = false;
            document.getElementById("modalText").textContent = "All fields must be completed to continue.";
            document.getElementById("validationModal").style.display = "flex";
            break;
        }
        
        newBlogPost[name] = value.trim();
    }

    if (formValidationCheck) {
        
        let existingBlogPosts = localStorage.getItem("blogPostsData");
        let blogPostsArray = existingBlogPosts ? JSON.parse(existingBlogPosts) : [];

        
        blogPostsArray.push(newBlogPost);

        
        localStorage.setItem("blogPostsData", JSON.stringify(blogPostsArray));

       
        e.target.reset();

        window.location.href = 'blog.html'; 
        console.log(blogPostsArray);
    }
});

document.getElementById("okayButton").addEventListener("click", function() {
    document.getElementById("validationModal").style.display = "none";
});


