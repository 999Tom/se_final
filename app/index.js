window.addEventListener('click', async function(event){
  let response = await fetch('http://localhost:8090/list');
  let body = await response.text();
  document.getElementById('content').innerHTML = "<ul>";

  let images = JSON.parse(body);
  this.console.log(images);
  for(let i = 0; i < images.length; i++){
    //document.getElementById('content').innerHTML += "<li>" + images[i] + "</li>";
    document.getElementById('content').innerHTML += "<img src=" + images[i] + ">";

  }

  document.getElementById('content').innerHTML += "</ul>";

});
