document.addEventListener('DOMContentLoaded', () => {
    const navList = document.getElementById('navbar').querySelector('ul');
    const sections = document.querySelectorAll('section');

    // Build the Navbar dynamically based on the sections 
    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.className = 'menu__link';
        link.textContent = section.getAttribute('data-nav');
        link.href = `#section${index + 1}`;
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    // Function to set the active class on the section in the viewport
    function setActiveSection() {
        let activeSectionIndex = -1;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            // To check if the section is at the top of the viewport
            if (rect.top >= 0 && rect.top < window.innerHeight) {
                activeSectionIndex = index;
            }
        });

        // Remove 'active' class from all sections and nav links
        sections.forEach((section, index) => {
            section.classList.remove('active-section'); 
            navList.children[index].querySelector('a').classList.remove('active'); 
        });

        // Add 'active' class to the section and nav link that is currently in the viewport
        if (activeSectionIndex !== -1) {
            sections[activeSectionIndex].classList.add('active-section'); 
            navList.children[activeSectionIndex].querySelector('a').classList.add('active'); 
        }
    }

    // Listen for the scroll event to set the active section
    window.addEventListener('scroll', setActiveSection);

    // Implement smooth scrolling for navigation links
    navList.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const sectionId = event.target.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



// const navList = document.getElementById('navbar').querySelector('ul');
// const sections = document.querySelectorAll('section');

// sections.forEach(section => {
//   const listItem = document.createElement('li');
//   const link = document.createElement('a');
//   link.className = 'menu__link';
//   link.href = `#${section.id}`;
//   link.textContent = section.dataset.nav;
//   listItem.appendChild(link);
//   navList.appendChild(listItem);
// });

// window.addEventListener('scroll', () => {
//     sections.forEach(section => {
//       const rect = section.getBoundingClientRect();
//       if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
//         section.classList.add('your-active-class');
//         // Add logic to highlight navigation menu item
//       } else {
//         section.classList.remove('your-active-class');
//       }
//     });
//   });

//   window.addEventListener('scroll', () => {
//     sections.forEach(section => {
//       const rect = section.getBoundingClientRect();
//       if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
//         section.classList.add('your-active-class');
//         // Add logic to highlight navigation menu item
//       } else {
//         section.classList.remove('your-active-class');
//       }
//     });
//   });
  
// document.querySelectorAll('.menu__link').forEach(link => {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();
//       const sectionId = this.getAttribute('href');
//       const section = document.querySelector(sectionId);
//       section.scrollIntoView({ behavior: 'smooth' });
  
//       // Add logic to remove 'active' class from all menu links and then add to the clicked link
//       document.querySelectorAll('.menu__link').forEach(link => {
//         link.classList.remove('active');
//       });
//       this.classList.add('active');
//     });
//   });

// document.addEventListener('DOMContentLoaded', () => {
//     // Select the navigation unordered list
//     const navList = document.getElementById('navbar').querySelector('ul');

//     // Select all section elements to build navigation items
//     const sections = document.querySelectorAll('section');

//     // Iterate over each section to create navigation items
//     sections.forEach((section, index) => {
//         // Create list item
//         const listItem = document.createElement('li');
//         // Create link item
//         const link = document.createElement('a');
//         // Assign class for styling (optional, based on your CSS)
//         link.className = 'menu__link';
//         // Set the text content to the section's data-nav attribute or any other identifier
//         link.textContent = section.getAttribute('data-nav');
//         // Set the href attribute to link to the section
//         link.href = `#section${index+1}`;
//         // Append the link to the list item
//         listItem.appendChild(link);
//         // Append the list item to the unordered list
//         navList.appendChild(listItem);
//     });
    
//     // Add scroll event listener here (as previously described)
//     // ...
// });


// document.addEventListener('click', function(){
//     // console.log('You have clicked the document ');
//     const mainHeading=document.querySelector('h1');
//     mainHeading.style.backgroundColor='red';
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('#navbar .menu__link');

//     function activateSection() {
//         let index = sections.length;

//         while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

//         navLinks.forEach((link) => link.classList.remove('active'));
//         navLinks[index].classList.add('active');
//     }

//     window.addEventListener('scroll', activateSection);
// });

// const myCustomDiv2 = document.createElement('div');

// function respondToTheClick() {
//     console.log('A paragraph was clicked.');
// }

// for (let i = 1; i <= 10; i++) {
//     const newElement2 = document.createElement('p');
//     newElement2.textContent = 'This is paragraph number ' + i;

//     newElement2.addEventListener('click', respondToTheClick);

//     myCustomDiv2.appendChild(newElement2);
// }

// document.body.appendChild(myCustomDiv2);


// function deactivateSections() {
//     document.querySelectorAll('section').forEach((section) => {
//         section.classList.remove('active-section');
//     });
// }


// function activateVisibleSection() {
//     document.querySelectorAll('section').forEach((section) => {
//         const rect = section.getBoundingClientRect();
      
//         if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
//             deactivateSections();
//             section.classList.add('active-section');
//         }
//     });
// }


// window.addEventListener('scroll', activateVisibleSection);



// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('scroll', function() {
//         const sections = document.querySelectorAll('.landing__container');
//         const navLinks = document.querySelectorAll('#navbar a');

//         let current = '';

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//             if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.href.includes(current)) {
//                 link.classList.add('active');
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('#navbar a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const sectionId = this.getAttribute('href');
//             const section = document.querySelector(sectionId);

//             if (section) {
//                 section.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });
// });