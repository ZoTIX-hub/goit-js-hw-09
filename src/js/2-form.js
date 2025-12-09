const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData = parsedData;
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
}

form.addEventListener("input", (e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
});