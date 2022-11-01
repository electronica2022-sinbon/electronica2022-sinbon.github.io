
export default function form() {
  const API = axios.create({
    baseURL: 'https://my-god-render.onrender.com',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  API.get('/sinbon')

  this.bindingEvent = () => {
    document.querySelector('.submit-button').addEventListener('click', () => {

      const first_name = document.querySelector('#input-first-name').value;
      const last_name = document.querySelector('#input-last-name').value;
      const company_name = document.querySelector('#input-company-name').value;
      const email_address = document.querySelector('#input-email-address').value;

      API.post('/sinbon', {
        first_name,
        last_name,
        company_name,
        email_address,
      })
        .catch(e => console.log(e))
        .then(e => {
          document.querySelector('.pop-up').classList.add('show');
          document.querySelector('.button-ok').addEventListener('click', () => {
            document.querySelector('.pop-up').classList.remove('show');
          })
        })
    })
  }
  this.render = () => `<div class="form">
    <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
    <h1>Hi</h1>
    <div class="content">

      <p>Please leave your information to us, so we can email our company profile to you. Thank you for your interest!</p>
      <form action="">
        <div class="input-group" id="input-group-first-name">
          <label for="input-first-name">First Name</label>
          <div>
            <input id="input-first-name" type="text">
          </div>
        </div>
        <div class="input-group" id="input-group-last-name">
          <label for="input-last-name">Last Name</label>
          <div>
            <input id="input-last-name" type="text">
          </div>
        </div>
        <div class="input-group" id="input-group-company-name">
          <label for="input-company-name">Company Name</label>
          <div>
            <input id="input-company-name" type="text">
          </div>
        </div>
        <div class="input-group" id="input-group-email-address">
          <label for="input-email-address">Email Address</label>
          <div>
            <input id="input-email-address" type="email">
          </div>
        </div>
        <div class="submit-button">
          <img src="./src/assets/button-send.png" alt="">
        </div>
      </form>
    </div>
    <div class="pop-up">
      <div class="content">
        <div class="body">
          <img src="./src/assets/icon-success.png" alt="">
        </div>
        <div class="text">
          <span>Email send successfully!</span>
        </div>
        <div class="footer">
          <img class="button-ok" src="./src/assets/button-ok.png" alt="">
        </div>
      </div>
  </div>
  </div>`
}