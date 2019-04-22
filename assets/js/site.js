const navToggle = document.getElementById("dashboard-nav-toggle");
const dashboardNav = document.getElementById("dashboard-nav");
const sidebarToggle = document.getElementById("toggle-sidebar");
const dashboardSidebar = document.getElementById("dashboard-sidebar");
const notificationsLink = document.getElementById("notifications-link");
const notificationsDiv = document.getElementById("notifications-div");
const notificationsWrapper = document.getElementById("notifications-wrapper");
const modalBtn = document.getElementById("show-modal");
const modalWrapper = document.getElementById("modal-wrapper");
const modalDiv = document.getElementById("modal-div");

navToggle.addEventListener('click', () => {
  dashboardNav.classList.toggle("responsive-navbar");
})

sidebarToggle.addEventListener('click', () => {
  dashboardSidebar.classList.toggle("responsive-sidebar");
})

notificationsLink.addEventListener('click', () => {
  notificationsWrapper.classList.toggle("show-notifications");
})

notificationsWrapper.addEventListener('click', () => {
  notificationsWrapper.classList.toggle("show-notifications");
})

notificationsDiv.addEventListener('click', (e) => {
  e.stopPropagation();
})

modalBtn.addEventListener('click', () => {
  modalWrapper.classList.toggle("show-modal");
})

modalWrapper.addEventListener('click', () => {
  modalWrapper.classList.toggle("show-modal");
})

modalDiv.addEventListener('click', (e) => {
  e.stopPropagation();
})