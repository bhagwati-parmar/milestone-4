"use strict";
// #!/usr/bin/env node 
const form = document.getElementById("resume-form");
const profilePicInput = document.getElementById("profile-pic");
const resumePreview = document.getElementById("resume-preview");
form.addEventListener("submit", (event) => {
    var _a;
    event.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const about = document.getElementById("about").value;
    const languages = document.getElementById("languages").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const achievements = document.getElementById("achievements").value;
    document.getElementById("name-preview").textContent = name;
    document.getElementById("address-preview").textContent = address;
    document.getElementById("phone-preview").textContent = phone;
    document.getElementById("email-preview").textContent = email;
    document.getElementById("about-preview").textContent = about;
    const updateList = (id, content) => {
        const list = document.getElementById(id);
        list.innerHTML = content
            .split("\n")
            .map(item => `<li>${item.trim()}</li>`)
            .join("");
    };
    updateList("languages-preview", languages);
    updateList("education-preview", education);
    updateList("experience-preview", experience);
    updateList("skills-preview", skills);
    updateList("achievements-preview", achievements);
    const profilePreview = document.getElementById("profile-preview");
    const file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            profilePreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
    else {
        profilePreview.src = "";
    }
    resumePreview.style.display = "flex";
});
