function showInfo(skill, element) {

  const info = document.getElementById("skill-info");

  // remove garna
  const allSkills = document.querySelectorAll('.skill');
  allSkills.forEach(s => s.classList.remove('active-skill'));

  // add garna
  if (element) {
    element.classList.add('active-skill');
  }



  if (skill === "c") {
    info.innerHTML = "<p>I have a strong foundation in C programming, including pointers, memory management, and file handling.</p>";
  } 
  else if (skill === "java") {
    info.innerHTML = "<p>I know Java basics including OOP concepts like classes, inheritance, and exception handling.</p>";
  } 
  else if (skill === "python") {
    info.innerHTML = "<p>I use Python for scripting and problem solving, and I understand data structures and basic libraries.</p>";
  }
}