function showSection(sectionId) {
    document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}
