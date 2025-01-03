
const skillsData = [
  { id: "HTML", url: "https://www.vinodjangid.site/src/png/htmllogo.png" },
  { id: "CSS", url: "https://www.vinodjangid.site/src/png/csslogo.png" },
  { id: "JAVASCRIPT", url: "https://www.vinodjangid.site/src/png/jslogo.png" },
  { id: "BOOTSTRAP", url: "https://www.vinodjangid.site/src/png/bootstraplogo.png" },
  { id: "REACT", url: "https://www.vinodjangid.site/src/png/reactlogo.png" },
  { id: "REDUX", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734949592/pngwing.com_8_pjdceh.png" },
  { id: "NODE.JS", url: "https://www.vinodjangid.site/src/png/node.png" },
  { id: "EXPRESS.JS", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735025689/pngwing.com_13_cs7fpc.png" },
  { id: "MONGODB", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735026669/pngwing.com_20_bnl7im.png" },
  { id: "ANGULAR.JS", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734948045/pnghut_angularjs-typescript-javascript-vue-js-library-brand_ifepkv.png" },
  { id: "VUE.JS", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735025468/pngwing.com_11_jueczq.png" },
  { id: "SVELTE", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735025399/pngwing.com_10_ovebvf.png" },
  { id: "TAILWIND CSS", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735025540/pngwing.com_12_gpuctf.png" },
  { id: "DJANGO", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735028125/pngwing.com_31_wxid9z.png" },
  { id: "FLASK", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735028180/pngwing.com_32_sipox8.png" },
  { id: "ELECTRON.JS", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735028339/pngwing.com_33_fpbivc.png" },
  { id: "JAVA", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734947821/pnghut_java-runtime-environment-system-development-kit-plum_zoiii4.png" },
  { id: "RUBY", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734948464/pngwing.com_hse11o.png" },
  { id: "GOLANG", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734948727/pngwing.com_1_aghtai.png" },
  { id: "PHP", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734948955/pngwing.com_2_ogtzyg.png" },
  { id: "PYTHON", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734949100/pngwing.com_3_u3ddtx.png" },
  { id: "SCALA", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734949239/pngwing.com_4_ojmqag.png" },
  { id: "SWIFT", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734949333/pngwing.com_5_xkz9s4.png" },
  { id: "C#", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734949390/pngwing.com_6_bph3dv.png" },
  { id: "RUST", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1734949519/pngwing.com_7_aquhg4.png" },
  { id: "KOTLIN", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735026577/pngwing.com_19_ev5ukr.png" },
  { id: "FLUTTER", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735026404/pngwing.com_17_m0jjhq.png" },
  { id: "REACT NATIVE", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735026481/pngwing.com_18_dgddcw.png" },
  { id: "NEST", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735026322/nest-js_k2z5hs.png" },
  { id: "SPRINGBOOT", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735025969/pngwing.com_16_hyhuuf.png" },
  { id: "APACHE KAFKA", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735025774/pngwing.com_14_tiexpf.png" },
  { id: "NGINX", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735025853/pngwing.com_15_aucbrk.png" },
  { id: "FIREBASE", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027885/pngwing.com_30_bytsz4.png" },
  { id: "AWS", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027479/pngwing.com_25_xdyoz5.png" },
  { id: "DOCKER", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027552/pngwing.com_26_kfvino.png" },
  { id: "KUBERNETES", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027643/pngwing.com_27_rux2sr.png" },
  { id: "JENKINS", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027704/pngwing.com_28_gto9vt.png" },
  { id: "MICROSOFT AZURE", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027786/pngwing.com_29_alcdyz.png" },
  { id: "SUPABASE", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735028056/Supabase_Icon_zlma4x.png" },
  { id: "REDIS", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027117/pngwing.com_21_bd3los.png" },
  { id: "MY SQL", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027209/pngwing.com_22_oox22y.png" },
  { id: "POSTGRESQL", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027299/pngwing.com_23_clvtc7.png" },
  { id: "CASSANDRA DB", url: "https://res.cloudinary.com/djpbqetkj/image/upload/v1735027381/pngwing.com_24_botbgy.png" },

]




// Parse the query parameters
function getQueryParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const params = {};
  for (const [key, value] of urlParams) {
    params[key] = value;
  }
  return params;
}

// Set the parameters on the window object
window.embeddedData = getQueryParams();

// Log for debugging
console.log("Embedded Data:", window.embeddedData.username);
const username = window.embeddedData.username;

// Function to fetch data
async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/pages/api/storeOnServer');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parse JSON data
    return data // Display data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}



// Function to enhance userData with skill logos
function addSkillLogos(userData, skillsData) {
  // Create a map of skill IDs to URLs for faster lookup
  const skillMap = new Map(skillsData.map(skill => [skill.id, skill.url]));

  // Add the logo URLs to matching skills
  const enhancedUserData = {
    ...userData,
    skillLogos: userData.skills.map(skill => ({
      skill,
      logoUrl: skillMap.get(skill) || null
    })).filter(item => item.logoUrl !== null)
  };

  return enhancedUserData;
}


// Function to extract user data for a specific initiatingUser
function extractUserData(data, username) {
  return data.find(user => user.intiatingUser.toLowerCase() === username.toLowerCase());
}

fetchData().then(data => {

  console.log("fetched data :", data);
  const userData = extractUserData(data, username);
  console.log("Filtered User Data:", userData);

  const enhancedData = addSkillLogos(userData, skillsData);
  console.log("Enhanced User Data:", enhancedData);

  document.getElementById('info-para').textContent = userData.bio
  document.getElementById('about-me').textContent = userData.aboutMe

  document.getElementById('about-me-image').src = userData.photo
  document.getElementById('project-one-image').src = userData.projects[0].photo
  document.getElementById('project-two-image').src = userData.projects[1].photo
  document.getElementById('project-three-image').src = userData.projects[2].photo

  document.getElementById('project-one-title').textContent = userData.projects[0].title
  document.getElementById('project-two-title').textContent = userData.projects[1].title
  document.getElementById('project-three-title').textContent = userData.projects[2].title


  document.getElementById('project-one-description').textContent = userData.projects[0].description
  document.getElementById('project-two-description').textContent = userData.projects[1].description
  document.getElementById('project-three-description').textContent = userData.projects[2].description

  document.getElementById('project-one-githubRepo').href = userData.projects[0].repoLink
  document.getElementById('project-two-githubRepo').href = userData.projects[1].repoLink
  document.getElementById('project-three-githubRepo').href = userData.projects[2].repoLink

  document.getElementById('project-one-liveLink').href = userData.projects[0].liveLink
  document.getElementById('project-two-liveLink').href = userData.projects[1].liveLink
  document.getElementById('project-three-liveLink').href = userData.projects[2].liveLink


  document.getElementById('linkedin-url').href = userData.socialLinks[0].url
  document.getElementById('github-url').href = userData.socialLinks[1].url
  document.getElementById('user-email').href = `mailto:${userData.email}`
  document.getElementById('main-email').href = `mailto:${userData.email}`

  document.getElementById("name").textContent = userData.name
  document.getElementById("profession").textContent = userData.profession

    const techStackWrapper = document.getElementById('techStackWrapper');
    
    // Check if element exists
    if (!techStackWrapper) {
      console.error("Could not find element with id 'techStackWrapper'");
      return;
    }
  
    const skillLogos = enhancedData.skillLogos
  
    // Create and append elements for each skill
    skillLogos.forEach(skillData => {
      // Create li element
      const li = document.createElement('li');
      li.className = 'tech-stack-box';
      li.setAttribute('data-aos', 'fade-up');
  
      // Create img element
      const img = document.createElement('img');
      img.src = skillData.logoUrl;
      img.alt = `${skillData.skill} skill`;
      img.className = 'tech-stack-logo';
  
      // Add error handling for images
      img.onerror = function() {
        console.warn(`Failed to load image for ${skillData.skill}`);
        // You could set a fallback image here if needed
        // img.src = 'path/to/fallback-image.png';
      };
  
      // Append img to li
      li.appendChild(img);
      
      // Append li to wrapper
      techStackWrapper.appendChild(li);
    });

    const element = document.getElementById("body-background-color")
    element.style.backgroundColor = userData.body-background-color
    element.style['fontFamily'] = userData.font

    const navbar = document.getElementById("navbar")
    navbar.style.backgroundColor = userData.navbar

    const projectOne = document.getElementById("project-box-1")
    projectOne.style.backgroundColor = userData.project-box-1

    const projectTwo = document.getElementById("project-box-2")
    projectTwo.style.backgroundColor = userData.project-box-2

    const projectThree = document.getElementById("project-box-3")
    projectThree.style.backgroundColor = userData.project-box-3

  

});

// Notify parent that the iframe is ready
window.parent.postMessage('iframeReady', '*');

// Listen for messages from parent
window.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'updateTitle') {
    const bio = document.getElementById('info-para').textContent
    const aboutMe = document.getElementById('about-me').textContent

    const aboutMeImage = document.getElementById('about-me-image').src
    const projectOneImage = document.getElementById('project-one-image').src
    const projectTwoImage = document.getElementById('project-two-image').src
    const prjectThreeImage = document.getElementById('project-three-image').src

    const projectOneTitle = document.getElementById('project-one-title');
    const projectTwoTitle = document.getElementById('project-two-title').textContent
    const projectThreeTitle = document.getElementById('project-three-title').textContent

    const projectOneDescription = document.getElementById('project-one-description').textContent
    const proejctTwoDescription = document.getElementById('project-two-description').textContent
    const projectThreeDescription = document.getElementById('project-three-description').textContent

    const projectOneGithubRepo = document.getElementById('project-one-githubRepo').href
    const projectTwoGithubRepo = document.getElementById('project-two-githubRepo').href
    const projectThreeGithubRepo = document.getElementById('project-three-githubRepo').href

    const projectOneLiveLink = document.getElementById('project-one-liveLink').href
    const projectTwoLiveLink = document.getElementById('project-two-liveLink').href
    const projectThreeLiveLink = document.getElementById('project-three-liveLink').href


    const linkedinUrl = document.getElementById('linkedin-url').href
    const githubUrl = document.getElementById('github-url').href
    const email = document.getElementById('user-email').href
    const profession = document.getElementById('profession')
    const name = document.getElementById("name").textContent
    const skills = document.getElementById("techStackWrapper")

    if(skills){
      skills = event.data.content
    }


    if (projectOneTitle) {
      projectOneTitle.textContent = event.data.content;
    }

    if (bio) {
      bio = event.data.content
    }

    console.log("Received event:", event); // Log the entire event
    if (event && event.data) {
      console.log("Event data:", event.data); // Log the event.data
    }

    if (name) {
       console.log("name data :", event.data.content, name)
       name = event.data.content
    }

    if (aboutMe) {
      aboutMe = event.data.content
    }

    if (profession) {
      profession = event.data.content
    }

    if (aboutMeImage) {
      aboutMeImage = event.data.content
    }
    if (projectOneImage) {
      projectOneImage = event.data.content
    }

    if (projectTwoImage) {
      projectTwoImage = event.data.content
    }
    if (prjectThreeImage) {
      prjectThreeImage = event.data.content
    }
    if (projectTwoTitle) {
      projectTwoTitle = event.data.content
    }
    if (projectThreeTitle) {
      projectThreeTitle = event.data.content
    }

    if (projectOneDescription) {
      projectOneDescription = event.data.content
    }
    if (proejctTwoDescription) {
      proejctTwoDescription = event.data.content
    }

    if (projectThreeDescription) {
      projectThreeDescription = event.data.content
    }

    if (projectOneGithubRepo) {
      projectOneGithubRepo = event.data.content
    }

    if (projectTwoGithubRepo) {
      projectTwoGithubRepo = event.data.content
    }
    if (projectThreeGithubRepo) {
      projectThreeGithubRepo = event.data.content
    }

    if (projectOneLiveLink) {
      projectOneLiveLink = event.data.content
    }

    if (projectTwoLiveLink) {
      projectTwoLiveLink = event.data.content
    }
    if (projectThreeLiveLink) {
      projectThreeLiveLink = event.data.content
    }

    if (linkedinUrl) {
      linkedinUrl = event.data.content
    }
    if (githubUrl) {
      githubUrl = event.data.content
    }
    if (email) {
      email = event.data.content
    }


  }
});








//--------------------------------------------------------------------------------------------------------------------->

// preloader script............
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector('.hey').classList.add('popup');
})

// preloader script ends here.........

// switch for setting
function settingtoggle() {
  document.getElementById("setting-container").classList.toggle('settingactivate');
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
  document.getElementById("soundtogglebuttoncontainer").classList.toggle('soundmodeshow');
}

function playpause() {
  if (document.getElementById('switchforsound').checked == false) {
    audio.pause();
  }
  else {
    audio.play();
  }
}

function visualmode() {
  document.body.classList.toggle('light-mode');
  var elements = document.querySelectorAll('.needtobeinvert');
  elements.forEach(function (element) {
    element.classList.toggle('invertapplied');
  });
}

let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

// toggle menu by clicking on hamburger
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// close mobile toggle menu by clicking on LI
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  })

  mobilenavLi.forEach(li => {
    li.classList.remove('activeThismobiletab');
    if (li.classList.contains(current)) {
      li.classList.add('activeThismobiletab')
    }
  })
  navLi.forEach(li => {
    li.classList.remove('activeThistab');
    if (li.classList.contains(current)) {
      li.classList.add('activeThistab')
    }
  })
})



let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  }
  else {
    mybutton.style.display = "none";

  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);
// https://github.com/vinodjangid07
document.addEventListener("contextmenu", function (e) {
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
  }
}, false);


let Pupils = document.getElementsByClassName('footer-pupil');
let pupilsArr = Array.from(Pupils);

let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;

// mouse X 
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;


// mouse Y position 
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;

  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  // footer
  let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
  let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);

  // footer
  pupilsArr.forEach((curPupil) => {
    curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
  })

}

const windowResize = (event) => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
}


window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);