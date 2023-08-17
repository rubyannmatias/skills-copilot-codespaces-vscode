function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var contactButton = document.getElementById("contactButton");
    var memberText = document.getElementById("memberText");
    var skillsText = document.getElementById("skillsText");
    var contactText = document.getElementById("contactText");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    memberButton.style.backgroundColor = "#f7f7f7";
    skillsButton.style.backgroundColor = "#e7e7e7";
    contactButton.style.backgroundColor = "#e7e7e7";
    memberText.style.color = "#000";
    skillsText.style.color = "#fff";
    contactText.style.color = "#fff";
}