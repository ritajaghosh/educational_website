//Smooth scroll buttons
       document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("mentorBtn").onclick = () => {
        document.getElementById("mentors").scrollIntoView({ behavior: "smooth" });
    };
    // repeat for others
});
