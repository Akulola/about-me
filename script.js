const navLinks = document.querySelectorAll('nav a');


// Add event listeners to the navigation links
navLinks.forEach(navLink => {
  navLink.addEventListener('mouseover', () => {
    navLink.style.color = '#fff';
    navLink.style.backgroundColor = '#ff4d4d';
  });
 
  navLink.addEventListener('mouseout', () => {
    navLink.style.color = '#fff';
    navLink.style.backgroundColor = 'transparent';
  });
});


// Get the sections
const sections = document.querySelectorAll('section');


// Add event listeners to the sections
sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.style.transform = 'translateY(-5px)';
    section.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
  });
 
  section.addEventListener('mouseout', () => {
    section.style.transform = 'none';
    section.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  });
});