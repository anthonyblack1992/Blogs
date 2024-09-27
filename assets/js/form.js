console.log("form js");

function handleBlogFormSubmission(event) {
    event.preventDefault();
    console.log("form is being handled!");

    const username = document.getElementById("username").value;
    const blogTitle = document.getElementById("blogTitle").value;
    const blogContent = document.getElementById("blogContent").value;

    // Validation step
    if (!username || !blogTitle || !blogContent) {
        alert("Please complete the form with a username, title, and content.");
        return;
    }

    console.log(username, blogTitle, blogContent);

    // Organize inputs into an object
    const newBlogForMe = { username, blogTitle, blogContent };

    // Save the blog post
    saveBlog(newBlogForMe);
}

function saveBlog(newBlog = {}) {
    console.log("SAVING BLOG");
    console.log("new blog: ", newBlog);

    // Persist data to localStorage
    const existingBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    existingBlogPosts.push(newBlog);
    localStorage.setItem("blogPosts", JSON.stringify(existingBlogPosts));

    // Redirect to the posts page
    window.location.href="blogs.html";
}

const blogForm = document.getElementById('blogForm');
blogForm.addEventListener('submit', handleBlogFormSubmission);