// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// function sendEmail(){
//     Email.send({
//         secureToken: "b2bcd8af-f144-43a9-9dc1-845ce1ca44f9",
//         Host : "smtp.elasticemail.com",
//         Username : "jibinrp0@gmail.com",
//         Password : "9943AD655CEE428F90C673A4CDB33286F27B",
//         To : 'jibinrp0@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Contact Form Enquiry",
//         Body : "Name: " + document.getElementById("name").value
//         + "<br> Email: " + document.getElementById("email").value
//         + "<br> Message: " + document.getElementById("message").value
//     }).then(
//       message => alert("message send succesfully")
//     );

// };


var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      status.style.color="lime"
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)