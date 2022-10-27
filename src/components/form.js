export default function form() {
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
          <img src="./src/assets/send-button.png" alt="">
        </div>
      </form>
    </div>
  </div>`
}