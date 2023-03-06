const loader = document.getElementsByClassName("loader")[0];
const mainContent = document.getElementsByClassName("mainContent")[0];
const imageElements = document.querySelectorAll(".projectItem");
imageElements.forEach((elements) => {
  const image = elements.firstElementChild;
  const btn = elements.lastElementChild;
  elements.addEventListener("mouseover", () => {
    elements.style = "opacity:1";
    btn.style = "opacity:1";
    image.style = "transform:scale(1.25,1.25);";
  });
  elements.addEventListener("mouseout", () => {
    elements.style = "opacity:0.5";
    image.style = "transform:scale(1,1);";
    btn.style = "opacity:0";
  });
});
setTimeout(() => {
  loader.style = "display:none;";
  mainContent.style = "display:block;";
}, 2100);
let gradients = {
  home: { color1: "#c2e59c", color2: "#64b3f4" },
  about: { color1: "#4ca1af", color2: "#c4e0e5" },
  skills: { color1: "#eecda3", color2: "#ef629f" },
  project: { color1: "#ff5f6d", color2: "#ffc371" },
  contact: { color1: "#e96443", color2: "#904e95" },
};
let homeCount = 1;
let aboutCount = 0;
let skillCount = 0;
let projectCount = 0;
let contactCount = 0;
let stop1=document.querySelectorAll('stop')[0];
let stop2=document.querySelectorAll('stop')[1];
if (homeCount == 1) {
  let spans = document.querySelectorAll(".homePage span");
  stop1.style=`stop-color:${gradients.home.color1}`;
  stop2.style=`stop-color:${gradients.home.color2}`;
  setTimeout(() => {
    spans.forEach((span) => {
      span.addEventListener("mouseover", () => {
        span.classList.remove("bounce");
        span.classList.add("bounce-blast");
      });
      span.addEventListener("mouseout", () => {
        span.classList.remove("bounce-blast");
      });
    });
  }, 5000);
}
document.querySelector(".mainContent").addEventListener("scroll", () => {
  const clientHeight = document.documentElement.clientHeight;
  const homePageTop = document
    .querySelector(".homePage .bouncyText")
    .getBoundingClientRect().y;
  const aboutMeTop = document
    .querySelector(".aboutMe .bouncyText")
    .getBoundingClientRect().y;
  const skillsTop = document
    .querySelector(".skills .bouncyText")
    .getBoundingClientRect().y;
  const projectsTop = document
    .querySelector(".projects .bouncyText")
    .getBoundingClientRect().y;
  const contactTop = document
    .querySelector(".contactMe .bouncyText")
    .getBoundingClientRect().y;
  if(clientHeight>homePageTop && clientHeight<=aboutMeTop){
    stop1.style=`stop-color:${gradients.home.color1}`;
    stop2.style=`stop-color:${gradients.home.color2}`;
    document.querySelector('.navbar').classList.remove('bgColor1','bgColor2','bgColor3','bgColor4','bgColor5');
    document.querySelector('.navbar').classList.add('bgColor1');
  }
  else if (
    clientHeight > aboutMeTop &&
    clientHeight <= skillsTop
  ) {
    if(aboutCount === 0){
      aboutCount = 1;
      let spans = document.querySelectorAll(".aboutMe span");
      spans.forEach((span) => {
        span.classList.add("bounce");
      });
      setTimeout(() => {
        spans.forEach((span) => {
          span.addEventListener("mouseover", () => {
            span.classList.remove("bounce");
            span.classList.add("bounce-blast");
          });
          span.addEventListener("mouseout", () => {
            span.classList.remove("bounce-blast");
          });
        });
      }, 2000);
    }
    stop1.style=`stop-color:${gradients.about.color1}`;
    stop2.style=`stop-color:${gradients.about.color2}`;
    document.querySelector('.navbar').classList.remove('bgColor1','bgColor2','bgColor3','bgColor4','bgColor5');
    document.querySelector('.navbar').classList.add('bgColor2');
  } else if (clientHeight > skillsTop && clientHeight <= projectsTop) {
    if (skillCount === 0) {
      let spans = document.querySelectorAll(".skills span");
      spans.forEach((span) => {
        span.classList.add("bounce");
      });
      setTimeout(() => {
        spans.forEach((span) => {
          span.addEventListener("mouseover", () => {
            span.classList.remove("bounce");
            span.classList.add("bounce-blast");
          });
          span.addEventListener("mouseout", () => {
            span.classList.remove("bounce-blast");
          });
        });
      }, 2500);
    }
    if (
      clientHeight >
        skillsTop +
          (document.querySelector(".skills .bouncyText").getBoundingClientRect()
            .height *
            1) /
            2 &&
      clientHeight <= projectsTop
    ) {
      let levelBar = document.querySelectorAll(".level div");
      levelBar.forEach((element) => {
        element.classList.add("fillLevel");
      });
    }
    stop1.style=`stop-color:${gradients.skills.color1}`;
    stop2.style=`stop-color:${gradients.skills.color2}`;
    document.querySelector('.navbar').classList.remove('bgColor1','bgColor2','bgColor3','bgColor4','bgColor5');
    document.querySelector('.navbar').classList.add('bgColor3');
    skillCount = 1;
  } else if (
    clientHeight > projectsTop &&
    clientHeight <= contactTop
  ) {
    if(projectCount===0){
      let spans = document.querySelectorAll(".projects .bouncyText span");
      spans.forEach((span) => {
        span.classList.add("bounce");
      });
      setTimeout(() => {
        spans.forEach((span) => {
          span.addEventListener("mouseover", () => {
            span.classList.remove("bounce");
            span.classList.add("bounce-blast");
          });
          span.addEventListener("mouseout", () => {
            span.classList.remove("bounce-blast");
          });
        });
      }, 1700);
    }
    projectCount = 1;
    stop1.style=`stop-color:${gradients.project.color1}`;
    stop2.style=`stop-color:${gradients.project.color2}`;
    document.querySelector('.navbar').classList.remove('bgColor1','bgColor2','bgColor3','bgColor4','bgColor5');
    document.querySelector('.navbar').classList.add('bgColor4');
  } else if(clientHeight>contactTop) {
    if(contactCount===0){
      contactCount = 1;
      let spans = document.querySelectorAll(".contactMe span");
      spans.forEach((span) => {
        span.classList.add("bounce");
      });
      setTimeout(() => {
        spans.forEach((span) => {
          span.addEventListener("mouseover", () => {
            span.classList.remove("bounce");
            span.classList.add("bounce-blast");
          });
          span.addEventListener("mouseout", () => {
            span.classList.remove("bounce-blast");
          });
        });
      }, 1700);
    }
    stop1.style=`stop-color:${gradients.contact.color1}`;
    stop2.style=`stop-color:${gradients.contact.color2}`;
    document.querySelector('.navbar').classList.remove('bgColor1','bgColor2','bgColor3','bgColor4','bgColor5');
    document.querySelector('.navbar').classList.add('bgColor5');
  }
});
// const spans=document.querySelectorAll('.bouncyText span');
//     spans.forEach((span)=>{
//     });
const navbar = document.getElementsByClassName("navbar")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
const closeBtn = document.getElementsByClassName("close")[0];
const formItem = document.querySelectorAll(".formItem");
const projectImg = document.querySelectorAll(".projectItem .img");
hamburger.addEventListener("click", () => {
  hamburger.style = "display:none;";
  closeBtn.style = "display:flex;";
  navbar.style = "display:block; animation:bringIn 0.5s;";
});
closeBtn.addEventListener("click", () => {
  closeBtn.style = "display:none;";
  hamburger.style = "display:flex;";
  navbar.style = "display:block;animation:bringOut 0.5s forwards;";
});
formItem.forEach((element) => {
  element.firstElementChild.addEventListener("focus", () => {
    removeBorder();
    element.lastElementChild.style = "animation:flowBorder 1s forwards";
  });
  // element.addEventListener('mouseout',()=>{element.lastElementChild.style="animation:none"});
});
function removeBorder(element) {
  formItem.forEach((element) => {
    element.lastElementChild.style = "animation:none;";
  });
}
const container = ".elementSphere";
const texts = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "EJS",
  "Bootstrap",
  "ExpressJS",
  "NodeJS",
  "MongoDB",
  "SQL",
  "C",
  "C++",
  "PHP",
  "Git",
  "_lodash",
];
const options = { radius: 150, maxSpeed: "fast" };
TagCloud(container, texts, options);
document
  .querySelector(".projects .projectDisplay .projectClose .closeBtn")
  .addEventListener("click", () => {
    document.querySelector(".projects .projectDisplay").style =
      "transform:scale(0,0);";
    document.querySelector(".projects").style = "z-index:1;";
  });
document
  .querySelectorAll(".projects .projectItem .btn button")
  .forEach((element) => {
    let parentId = element.parentElement.parentElement.id;
    let projectHeading = "";
    let projectDescription = "";
    let projectImg1 = "";
    let projectImg2 = "";
    let projectLink = "";
    element.addEventListener("click", () => {
      if (parentId === "item1") {
        projectHeading = "Food Express";
        projectDescription =
          "Food Express Is a food delivery website with all the necessary functions integrated that are needed in a website of this kind.<br><mark>Technologies Used - HTML, CSS, Javascript, PHP, MYSQL</mark>";
        projectImg1 = "public/foodExpress1.png";
        projectImg2 = "public/foodExpress2.png";
        projectLink = "https://foodsexpress.000webhostapp.com/";
      } else if (parentId === "item2") {
        projectHeading = "PayBuddy";
        projectDescription =
          "PayBuddy is a platform where you can keep a note of all of your transactions like how much you owe someone and how much they owe you and along with this there is a also a bill splitter integrated in this platform.<br><mark>Technologies Used - ReactJS, NodeJS, ExpressJS, MongoDB, Javascript, Bootstrap</mark>";
        projectImg1 = "public/payBuddy1.png";
        projectImg2 = "public/payBuddy2.png";
        projectLink = "https://github.com/Atul250603/PayBuddy/";
      } else if (parentId === "item3") {
        projectHeading = "TicTacToe";
        projectDescription =
          "TicTacToe is a platform where you can play tic tac toe with your friends and relive the old memories. <br><mark>Technologies Used - HTML, CSS, Javascript</mark>";
        projectImg1 = "public/tictactoe1.png";
        projectImg2 = "public/tictactoe2.png";
        projectLink = "http://tittattoe.000webhostapp.com/";
      } else {
        projectHeading = "Space Website";
        projectDescription =
          "Space Website is a platform where you can find the details about some of the planets on which some mission were conducted, you will about the crew that took part in those missions and also the technology used in them. Its a completely responsive platform. <br><mark>Technologies Used - HTML, CSS, Javascript</mark>";
        projectImg1 = "public/spaceWeb1.png";
        projectImg2 = "public/spaceWeb2.png";
        projectLink = "https://atul250603.github.io/space-website-webdev/";
      }
      let projectHeadingElement = document.getElementById("projectHeading");
      let projectDescriptionElement =
        document.getElementById("projectDescription");
      let projectImg1Element =
        document.getElementById("projectImages").firstElementChild;
      let projectImg2Element =
        document.getElementById("projectImages").lastElementChild;
      let projectLinkElement =
        document.getElementById("projectLink").firstElementChild;
      projectHeadingElement.innerHTML = projectHeading;
      projectDescriptionElement.innerHTML = projectDescription;
      projectImg1Element.src = projectImg1;
      projectImg2Element.src = projectImg2;
      projectLinkElement.href = projectLink;
      document.querySelector(".projects .projectDisplay").style =
        "transform:scale(1,1);";
      document.querySelector(".projects").style = "z-index:5;";
    });
  });
