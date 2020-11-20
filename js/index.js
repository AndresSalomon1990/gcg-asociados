// Open Sidebar
function openSidebar() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}

// Close Sidebar
function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
}

// Open Modal
function openModal(id) {
    document.getElementById(id).style.display="block";
}

// Close Modal
function closeModal(id) {
    document.getElementById(id).style.display="none";
}

function openTab(evt, tabName) {
    let i, x, tabLinks;
    x = document.getElementsByClassName("tab");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-link");

    for (i = 0; i < x.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" w3-black", "");
    }

    document.getElementById(tabName).style.display = "block";

    evt.currentTarget.className += " w3-black";
  }