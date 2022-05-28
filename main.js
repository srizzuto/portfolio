let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Nav controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let sections = document.getElementsByClassName("sections");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    sections[i].style.display = "none"
  }

  slides[slideIndex - 1].style.display = "block";
  sections[slideIndex - 1].style.display = "grid";
}

//Stack Tabs
function openStack(evt, stackName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("stack-img");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(stackName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Form validation
function validateForm() {
  let x = document.forms["form"]["email"].value;
  let y = document.forms["form"]["fullname"].value;
  let z = document.forms["form"]["subject"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }

  if (y == "") {
    alert("Name must be filled out");
    return false;
  }

  if (z == "") {
    alert("Comment must be filled out");
    return false;
  }
}