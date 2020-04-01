/* Run script after DOMContentLoaded event to ensure form element is 
present */
document.addEventListener("DOMContentLoaded", function() {
	/* Obtain form element via querySelector */
	const form = document.querySelector('form[name="addtext"]');
  
	/* Bind listener to forms submit event */
	form.addEventListener("submit", async function(event) {
	  /* Prevent browsers default submit and page-reload behavior */
	  event.preventDefault();
  
	  /* Obtain values from each field in form */
	  //information
	  const title = form.querySelector('#title').value;
	  const name = form.querySelector('input[name="name"]').value;
	  const address = form.querySelector('input[name="address"]').value;
	  const post = form.querySelector('input[name="post"]').value;
	  const mobNumber = form.querySelector('input[name="mobnumber"]').value;
	  const email = form.querySelector('input[name="email"]').value;
	  const age = form.querySelector('input[name="age"]').value;
	  const emergName = form.querySelector('input[name="Emergname"]').value;
	  const relationship = form.querySelector('input[name="Relationship"]').value;
	  const emergMobNumber = form.querySelector('input[name="Emergmobnumber"]').value;
	  const devskills = form.querySelector('textarea[name="Devskills"]').value;
	  const experience = form.querySelector('textarea[name="experience"]').value;
	  
	  //interest position
	  const interest1 = form.querySelector('#interest1').value;
	  const interest2 = form.querySelector('#interest2').value;
	  
	  //availablity
	  const note = form.querySelector('input[name="notes"]').value;
	  //available time
	  const date = form.querySelector('input[name="date"]').value;
	  const daytime = form.querySelector('#daytime').value;
	  
	  
	  //referees 1
	  const refName = form.querySelector('input[name="refname"]').value;
	  const refRelatioinship = form.querySelector('input[name="refRelationship"]').value;
	  const refNumber = form.querySelector('input[name="refnumber"]').value;
	  const refEmail = form.querySelector('input[name="refemail"]').value;
	  const refPost = form.querySelector('input[name="refpost"]').value;
	  const refAddress = form.querySelector('input[name="refaddress"]').value;
	  
	 
	  //information source
	  const source = form.querySelector('#how').value;
	  /* Compose text file content */
	  let text = `
	  Title: ${title}
	  Name: ${name}
	  Address: ${address}
	  Post code: ${post}
	  Mobile Number: ${mobNumber}
	  Home Number: ${homeNumber}
	  Email: ${email}
	  Age: ${age}
	  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  Emergency contact
	   Name: ${emergName}
	   Relationship: ${relationship}
	   Mobile number: ${emergMobNumber}
	  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  Experience
	   ${experience} 
	  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  Interesting position
	   first choice: ${interest1}
	   second choice: ${interest2}
	  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  Available time
	  	date: ${date}
	  	daytime: ${daytime}
	  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  Special note
	  	special notes: ${note}
	  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  referee 1
	   Name: ${refName}
	   Relationship: ${refRelationship}
	   Number: ${refNumber}
	   Email: ${refEmail}
	   Post Code: ${refPost}
	   Address: ${refAddress}
	   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	   Information source
	   web: ${web}
	   publication: ${publication}
	   mouth: ${mouth}
	   school: ${school}
	   public_event: ${public_event}
	   volunteerCentre: ${volunteerCentre}
	   charityShop: ${charityShop}
	   externalPublication: ${externalPublication}
	   personalConnection: ${personalConnection}
	  `;
  
	  /* Create temporary link element and trigger file download  */
	  //const link = document.createElement("a");
	  //const href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
	  //link.setAttribute("href", href);
	  //link.setAttribute("download", filename);
  
	  //document.body.appendChild(link);
  
	  //link.click();
  
	  //document.body.removeChild(link);
	  let text2 = String(text)
	  console.log(text2)
	  let response = await fetch('./upload_vf',
								 {
								   method: "POST",
								   headers: {
									 "Content-Type": "application/x-www-form-urlencoded"
								   },
								   body: "text=" + text2
								 });
	  if(!response.ok){
		throw new Error("problem adding post" + response.code);
	  }
	  else
	  {
		  alert("The form has been submitted");
	  }
  
	  let body = await response.text();
	  let message = JSON.parse(body);
	  console.log(message.message);
	  
	
  
	});
  });