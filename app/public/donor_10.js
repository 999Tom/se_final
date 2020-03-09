ocument.addEventListener("DOMContentLoaded", function() {
  /* Obtain form element via querySelector */
  const form = document.querySelector('form[name="donor"]');

  /* Bind listener to forms submit event */
  form.addEventListener("submit", async function(event) {
    /* Prevent browsers default submit and page-reload behavior */
    event.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    let text2 = `
    name: ${name}
    email: ${email}
    amount: £10
    `;
    let text = String(text2);
    let response = await fetch('./donor_10',
                               {
                                 method: "POST",
                                 headers: {
                                   "Content-Type": "application/x-www-form-urlencoded"
                                 },
                                 body: "text=" + text
                               });
    if(!response.ok){
      throw new Error("problem adding post" + response.code);
    }

    let body = await response.text();
    let message = JSON.parse(body);
    console.log(message.message);
  }