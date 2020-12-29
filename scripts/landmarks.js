(() => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../landmarks.json", true);

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var users = JSON.parse(xhr.responseText);
      let names = "";
      users.map((itm,idx) => {
        names += `<div class="landmark"> 
          <h3>${itm.name}</h3>
          <h4>${itm.location}</h4>
          <img src="${itm.img}">
          <p>${itm.description}</p>
          `;
      }, this);
      document.getElementById('landmarks').innerHTML = names;
    }
  }

  xhr.send();
	
})(this);