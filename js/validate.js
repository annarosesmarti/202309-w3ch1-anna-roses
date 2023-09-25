const showSetDateAndTime = () => {
  const checkBox = document.querySelector(".checkbox");
  const setDate = document.querySelector(".set-date");
  if (checkBox.checked) {
    setDate.style.display = "block";
  } else {
    setDate.style.display = "none";
  }
};

showSetDateAndTime();
