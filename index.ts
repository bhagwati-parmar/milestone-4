// #!/usr/bin/env node 

const form = document.getElementById("resume-form") as HTMLFormElement;
const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;
const resumePreview = document.getElementById("resume-preview") as HTMLElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;

  const about = (document.getElementById("about") as HTMLTextAreaElement).value;
  const languages = (document.getElementById("languages") as HTMLTextAreaElement).value;

  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  const achievements = (document.getElementById("achievements") as HTMLTextAreaElement).value;

  (document.getElementById("name-preview") as HTMLElement).textContent = name;
  (document.getElementById("address-preview") as HTMLElement).textContent = address;
  (document.getElementById("phone-preview") as HTMLElement).textContent = phone;
  (document.getElementById("email-preview") as HTMLElement).textContent = email;

  (document.getElementById("about-preview") as HTMLElement).textContent = about;

  const updateList = (id: string, content: string) => {
    const list = document.getElementById(id) as HTMLElement;
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

  const profilePreview = document.getElementById("profile-preview") as HTMLImageElement;
  const file = profilePicInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePreview.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  } else {
    profilePreview.src = "";  
  }

  resumePreview.style.display = "flex";
});


