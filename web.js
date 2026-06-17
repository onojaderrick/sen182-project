const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const contactModal = document.getElementById("contactModal");
const sidebarContact = document.getElementById("sidebarContact");

openSidebar.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

openModal.addEventListener("click", () => {
  contactModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  contactModal.classList.remove("active");
});

sidebarContact.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.remove("active");
  contactModal.classList.add("active");
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove("active");
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  form.reset();
  contactModal.classList.remove("active");
});