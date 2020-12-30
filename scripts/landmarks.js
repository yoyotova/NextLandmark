(() => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../landmarks.json", true);

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var landmark = JSON.parse(xhr.responseText);
      let info = "";
      landmark.map((itm,idx) => {
        info = "";
        info += `<div class="landmark"> 
          <h3>${itm.name}</h3>
          <div>
            <img class="location-icon" src="../location.png"  alt="location-icon">
            <span>${itm.location}</span>
          </div>
          <img src="${itm.img}">
          <p>${itm.description}</p>
          <div class="add-favorite">
            <i class="fa fa-heart"></i>
            <p> Добави в любими </p>
          </div>
          `;
        document.getElementById('landmarks').innerHTML += info;
      }, this);
    }
  }

  xhr.send();
	
})(this);