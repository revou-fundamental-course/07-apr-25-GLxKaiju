window.onload = function () {
  const nameInput = prompt("Siapa nama kamu?");
  const welcome = document.getElementById('welcome-message');

  if (nameInput && welcome) {
    welcome.innerHTML = `<h1>Hi ${nameInput}, Selamat datang</h1>`;
  }
};

const form = document.getElementById('FeedbackForm');
const output = document.getElementById('formOutput');

form?.addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const feedback = document.getElementById('feedbackText').value.trim();

  if (!nama || !email || !phone || !feedback) {
    alert('Please fill in all fields.');
    return;
  }

  const result = `
    <h3>Submitted Info</h3>
    <p><strong>Name:</strong> ${nama}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Feedback:</strong> ${feedback}</p>
  `;

  output.innerHTML = result;
  form.reset();
});
