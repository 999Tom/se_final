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
    const title = form.querySelector('input[name="title"]').value;
    const name = form.querySelector('input[name="name"]').value;
    const address = form.querySelector('input[name="address"]').value;
    const post = form.querySelector('input[name="post"]').value;
    const mobNumber = form.querySelector('input[name="mobnumber"]').value;
    const homeNumber = form.querySelector('input[name="homenumber"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const age = form.querySelector('input[name="age"]').value;
    const emergName = form.querySelector('input[name="Emergname"]').value;
    const relationship = form.querySelector('input[name="Relationship"]').value;
    const emergMobNumber = form.querySelector('input[name="Emergmobnumber"]').value;
    const devskills = form.querySelector('textarea[name="Devskills"]').value;
    const experience = form.querySelector('textarea[name="experience"]').value;
    const reason = form.querySelector('textarea[name="why"]').value;
    //interest position
    const admin = form.querySelector('input[name="Admin"]').check;
    const gardening = form.querySelector('input[name="Gardening"]').check;
    const inpatient = form.querySelector('input[name="Inpatient"]').check;
    const retail = form.querySelector('input[name="Retail"]').check;
    const livingCentre = form.querySelector('input[name="LivingCentre"]').check;
    const maintenanceDIY = form.querySelector('input[name="MaintenanceDIY"]').check;
    const maintenanceF = form.querySelector('input[name="MaintenanceF"]').check;
    const beauty = form.querySelector('input[name="Beauty"]').check;
    const relations = form.querySelector('input[name="relations"]').check;
    const driver = form.querySelector('input[name="Driver"]').check;
    const coffee = form.querySelector('input[name="Coffee"]').check;
    const kitchen = form.querySelector('input[name="Kitchen"]').check;
    const therapy = form.querySelector('input[name="Therapy"]').check;
    const housekeeping = form.querySelector('input[name="Housekeeping"]').check;
    const rdriver = form.querySelector('input[name="RDriver"]').check;
    const counselling = form.querySelector('input[name="Counselling"]').check;
    const oneoff = form.querySelector('input[name="OneOff"]').check;
    //information source
    const web = form.querySelector('input[name="web"]').check;
    const publication = form.querySelector('input[name="Publication"]').check;
    const mouth = form.querySelector('input[name="Mouth"]').check;
    const school= form.querySelector('input[name="School"]').check;
    const public_event = form.querySelector('input[name="Event"]').check;
    const volunteerCentre = form.querySelector('input[name="VolunteerCentre"]').check;
    const charityShop = form.querySelector('input[name="CharityShop"]').check;
    const externalPublication = form.querySelector('input[name="ExternalPublication"]').check;
    const personalConnection = form.querySelector('input[name="Connection"]').check;
    //available time
    //Monday
    const MMorning = form.querySelector('input[name="MMorning"]').check;
    const MAfternoon = form.querySelector('input[name="MAfternoon"]').check;
    const MEvening = form.querySelector('input[name="MEvening"]').check;
    //Tuesday
    const TuMorning= form.querySelector('input[name="TuMorning"]').check;
    const TuAfternoon = form.querySelector('input[name="TuAfternoon"]').check;
    const TuEvening = form.querySelector('input[name="TuEvening"]').check;
    //Wednesday
    const WMorning = form.querySelector('input[name="WMorning"]').check;
    const WAfternoon = form.querySelector('input[name="WAfternoon"]').check;
    const WEvening = form.querySelector('input[name="WEvening"]').check;
    //Thursday
    const ThMorning = form.querySelector('input[name="ThMorning"]').check;
    const ThAfternoon = form.querySelector('input[name="ThAfternoon"]').check;
    const ThEvening = form.querySelector('input[name="ThEvening"]').check; 
    //Friday
    const FMorning = form.querySelector('input[name="FMorning"]').check;
    const FAfternoon = form.querySelector('input[name="FAfternoon"]').check;
    const FEvening = form.querySelector('input[name="FEvening"]').check; 
    //Saturday
    const SatMorning = form.querySelector('input[name="SatMorning"]').check;
    const SatAfternoon = form.querySelector('input[name="SatAfternoon"]').check;
    const SatEvening = form.querySelector('input[name="SatEvening"]').check; 
    //Sunday
    const SunMorning = form.querySelector('input[name="SunMorning"]').check;
    const SunAfternoon = form.querySelector('input[name="SunAfternoon"]').check;
    const SunEvening = form.querySelector('input[name="SunEvening"]').check; 
    //how often
    const volunteerOften = form.querySelector('input[name="volunteerOften"]').value;
    //time limit
    const volLimits = form.querySelector('input[name ="Vollimits"]').value;
    //referees 1
    const ref1Name = form.querySelector('input[name="ref1name"]').value;
    const ref1Relatioinship = form.querySelector('input[name="ref1Relationship"]').value;
    const ref1Number = form.querySelector('input[name="ref1number"]').value;
    const ref1Email = form.querySelector('input[name="ref1email"]').value;
    const ref1Post = form.querySelector('input[name="ref1post"]').value;
    const ref1Address = form.querySelector('input[name="ref1address"]').value;
    //referees 2
    const ref2Name = form.querySelector('input[name="ref2name"]').value;
    const ref2Relatioinship = form.querySelector('input[name="ref2Relationship"]').value;
    const ref2Number = form.querySelector('input[name="ref2number"]').value;
    const ref2Email = form.querySelector('input[name="ref2email"]').value;
    const ref2Post = form.querySelector('input[name="ref2post"]').value;
    const ref2Address = form.querySelector('input[name="ref2address"]').value;
    const filename = form.querySelector('input[name="filename"]').value + 'txt';
    
    /* Compose text file content */
    const text = `
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
    SKills that want to be developed
     ${devskills}
    Experience
     ${experience} 
    Reason want to work 
     ${reason}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Interesting position
     Admin: ${admin}
     Gardening: ${gardening}
     In patient unit: ${inpatient}
     Retail Assistants for Charity Shops: ${retail}
     Living Centre: ${livingCentre}
     Maintenance/DIY: ${maintenanceDIY}
     Maintenance/Fundraising: ${maintenanceF}
     Beauty: ${beauty}
     Public relations: ${relations}
     Driver: ${driver}
     Coffee: ${coffee}
     Kitchen: ${kitchen}
     Therapy: ${therapy}
     Housekeeping: ${housekeeping}
     Retail driver: ${rdriver}
     Counselling: ${counselling}
     One off event: ${oneoff}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Available time
    Monday
     Morning: ${MMorning}
     Afternoon: ${MAfternoon}
     Evening: ${MEvening}
    Tuesday
     Morning: ${TuMorning}
     Afternoon: ${TuAfternoon}
     Evening: ${TuEvening}
    Wednesday
     Morning: ${WMorning}
     Afternoon: ${WAfternoon}
     Evening: ${WEvening}
    Thursday
     Morning: ${ThMorning}
     Afternoon: ${ThAfternoon}
     Evening: ${ThEvening}
    Friday
     Morning: ${FMorning}
     Afternoon: ${FAfternoon}
     Evening: ${FEvening}
    Saturday
     Morning: ${SatMorning}
     Afternoon: ${SatAfternoon}
     Evening: ${SatEvening}
    Sunday
     Morning: ${SunMorning}
     Afternoon: ${SunAfternoon}
     Evening: ${SunEvening}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    How often want to be volunteer
     ${volunteerOften}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    If availablity is limited
     ${volLimits}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    referee 1
     Name: ${ref1Name}
     Relationship: ${ref1Relationship}
     Number: ${ref1Number}
     Email: ${ref1Email}
     Post Code: ${ref1Post}
     Address: ${ref1Address}
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    referee 2
     Name: ${ref2Name}
     Relationship: ${ref2Relationship}
     Number: ${ref2Number}
     Email: ${ref2Email}
     Post Code: ${ref2Post}
     Address: ${ref2Address}

    `;
    text = String(text)
    /* Create temporary link element and trigger file download  */
    //const link = document.createElement("a");
    //const href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
    //link.setAttribute("href", href);
    //link.setAttribute("download", filename);

    //document.body.appendChild(link);

    //link.click();

    //document.body.removeChild(link);
    
    let response = await fetch('http://127.0.01:8090/upload_vf',
                               {
                                 method: "POST",
                                 headers: {
                                   "Content-Type": "application/x-www-form-urlencoded"
                                 },
                                 body: text
                               });
    if(!response.ok){
      throw new Error("problem adding post" + response.code);
    }
 
  

  });
});