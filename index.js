const soundPlayer = document.querySelector(".sound");
const off = document.querySelector("#off");
const on = document.querySelector("#on");
const myAudio = document.querySelector("#myAudio");
myAudio.volume = 0.05;

off.addEventListener("click", () => soundTrack("off"));
on.addEventListener("click", () => soundTrack("on"));

const soundTrack = (soundState) => {
  if (soundState === "off") {
    on.style.display = "block";
    off.style.display = "none";
    soundPlayer.style.color = "#FCEE09";
    myAudio.play();
  } else if (soundState === "on") {
    on.style.display = "none";
    off.style.display = "block";
    soundPlayer.style.color = "#F75049";
    myAudio.pause();
  }
};

// Play music functionality

const btnBars = document.querySelector(".fa-bars");
const btnTimes = document.querySelector(".fa-times");
const SideNav = document.querySelector(".aside");

btnBars.addEventListener("click", () => myFunc("open"));
btnTimes.addEventListener("click", () => myFunc("close"));

const myFunc = (navCondition) => {
  if (navCondition === "open") {
    SideNav.classList.add("show-nav");
    btnTimes.style.display = "block";
    btnBars.style.display = "none";
  } else if (navCondition === "close") {
    SideNav.classList.remove("show-nav");
    btnTimes.style.display = "none";
    btnBars.style.display = "block";
  }
};

$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
      },
      "tags"
    )
  ) {
    // something went wrong hide the canvas container,
    $("#myCanvasContainer");
  }
});

// Contact section functionality starts here. The FInal part

const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  validateInput()
})

const validateInput = () => {
  let email = emailInput.value
  let textarea = textareaInput.value

  if (!email && !textarea) {
    setError(emailInput.parentElement)
    setError(textareaInput.parentElement)
    showMessage('Please fill in the required inputs')
  } else if (!email && textarea) {
    setError(emailInput.parentElement)
    showMessage("Oops Email can't be empty")
  } else if (!textarea && email) {
    setError(textareaInput.parentElement)
    showMessage('Please provide a message')
  } else if (email && textarea) {
    emailjs.sendForm(
      'service_rvlqach',
      'template_d32ix5s',
      contactForm,
      'lD25U1N6WN3XbKSFV',
    )
    setSuccess(emailInput.parentElement)
    setSuccess(textareaInput.parentElement)
    showMessage('Message sent successfully', 'green')
    textareaInput.value = ''
    emailInput.value = ''
    nameInput.value = ''
    subjectInput.value = ''
  }
}


const setError = (input) => {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  } else {
    input.classList.add('error')
  }
}
const setSuccess = (input) => {
  if (input.classList.contains('error')) {
    input.classList.remove('error')
  } else {
    input.classList.add('success')
  }
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add('message-content')
  divContent.style.backgroundColor = updateColor
  messageDiv.prepend(divContent)

  messageDiv.style.transform = `translate(${(0, 0)}%)`
  setTimeout(() => {
    divContent.classList.add('hide')
    divContent.addEventListener('transitionend', () => {
      divContent.remove()
    })
  }, 5000)
}

// Contact section functionality ends here.
// Mouse function
document.onmousemove = animateCircles; // circle follow mouse

var colors = ['#f75049', '#5ef6ff', '#fcee09']

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle); // adds function to body

  // adds motion
  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  // randomize color
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  // adds animation
  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + 'px';
  circle.style.top = circle.offsetTop - 20 + 'px';

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
}