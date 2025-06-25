// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate Hero Text on Load
const heroTitleLines = document.querySelectorAll('.title-line');

heroTitleLines.forEach((line, index) => {
  line.style.opacity = '0';
  line.style.transform = 'translateY(20px)';
  line.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
  
  setTimeout(() => {
    line.style.opacity = '1';
    line.style.transform = 'translateY(0)';
  }, 500);
});

// 
// Animate About Section on Scroll
const aboutSection = document.querySelector('.about');

const animateAboutSection = () => {
  const aboutPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (aboutPosition < screenPosition) {
    aboutSection.querySelector('.about-image').style.opacity = '1';
    aboutSection.querySelector('.about-image').style.transform = 'translateX(0)';
    aboutSection.querySelector('.about-text').style.opacity = '1';
    aboutSection.querySelector('.about-text').style.transform = 'translateX(0)';
  }
};

// Initial state
aboutSection.querySelector('.about-image').style.opacity = '0';
aboutSection.querySelector('.about-image').style.transform = 'translateX(-50px)';
aboutSection.querySelector('.about-image').style.transition = 'all 0.8s ease';

aboutSection.querySelector('.about-text').style.opacity = '0';
aboutSection.querySelector('.about-text').style.transform = 'translateX(50px)';
aboutSection.querySelector('.about-text').style.transition = 'all 0.8s ease';

// Trigger on scroll
window.addEventListener('scroll', animateAboutSection);



// Animate service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');

const animateCards = () => {
  serviceCards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

// Initial state
serviceCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.5s ease ${index * 0.1}s`;
});

// Trigger on scroll
window.addEventListener('scroll', animateCards);




// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
        // Add animation class
        item.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Initial animation for portfolio items
portfolioItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(30px)';
  item.style.transition = `all 0.5s ease ${index * 0.1}s`;
});

// Animate on scroll
const animatePortfolio = () => {
  const portfolioSection = document.querySelector('.portfolio');
  const portfolioPosition = portfolioSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (portfolioPosition < screenPosition) {
    portfolioItems.forEach(item => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    });
  }
};

window.addEventListener('scroll', animatePortfolio);