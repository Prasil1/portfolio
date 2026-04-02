function showInfo(skill, element) {
  // changing the detail
  const info = document.getElementById("skill-info");

  // removing the 'active-skill' class from all skill icons
  const allSkills = document.querySelectorAll('.skill');
  allSkills.forEach(s => s.classList.remove('active-skill'));

  // add the 'active-skill' class to the one clicked
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