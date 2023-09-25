const validateForm = (form) => {
  console.log(form.target[0].value);
};

const showSetDateAndTime = () => {
  const checkBox = document.querySelector(".checkbox");
  const setDate = document.querySelector(".set-date");
  if (checkBox.checked) {
    setDate.style.display = "block";
  } else {
    setDate.style.display = "none";
  }
};

const formElement2 = document.querySelector(".parent-container");
const senderInputElement = document.querySelector(".sender-email");
const recipientInputElement = document.querySelector(".recipient-email");

formElement2.addEventListener("input", (event) => {
  switch (event.target) {
    case senderInputElement:
      let sender = event.target.value;
      console.log(sender);
      break;
    case recipientInputElement:
      let recipient = event.target.value;
      console.log(recipient);
  }
});

const textCounter = () => {
  const messageBody = document.querySelector(".body-container");
  messageBody.forEach((message) => message.length);
  if (message.length < 10) {
    console.log("El cuerpo debe tener una longitud mínima de 10 carácteres");
  }
};
