let myCalendar = document.querySelector(".my-calendar")
console.log(myCalendar)
myCalendar.innerHTML =
  `<div class="container">
      <div id="v-cal">
        <div class="vcal-header">
          <button class="vcal-btn" data-calendar-toggle="previous">
					<svg height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
						<path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
					</svg>
				</button>
          <div class="vcal-header__label" data-calendar-label="month">
            March 2017
          </div>
          <button class="vcal-btn" data-calendar-toggle="next">
					<svg height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
						<path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
					</svg>
				</button>
        </div>
        <div class="vcal-week">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
        <div class="vcal-body" data-calendar-area="month"></div>
      </div>
      <p class="demo-picked">
        Date picked:
        <span data-calendar-label="picked"></span>
      </p>
    </div>`

function loadFile(path, type) {
  if (type == "js") {
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", path);
  } else if (type == "css") {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", path);
  }
  document.getElementsByTagName("head")[0].appendChild(fileref);
}
loadFile("http://0.0.0.0:8000/vanillaCalendar.css", 'css');
loadFile("http://0.0.0.0:8000/vanillaCalendar.js", 'js');