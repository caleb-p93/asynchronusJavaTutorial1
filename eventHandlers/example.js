const log = document.querySelector(".event-log"); // selects HTML element named ".event-log"

document.querySelector("#xhr").addEventListener("click", () => { // adds event listener for when an object with the name XHR is clicked
  log.textContent = ""; //  outputs "" textContent of log variable the value of "" once click happens

  const xhr = new XMLHttpRequest(); // variable for new XMLHttpRequest

  xhr.addEventListener("loadend", () => { // adds event listener for when xhr object finishes loading
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`; // once load ends, it outputs "Finished with status:" + whatever the xhr status is 
  });

  // opens XMLHttpRequest to use json file at given jason using "GET" method from the nested URL
  xhr.open( 
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send(); // sends XMLHttpRequest
  log.textContent = `${log.textContent}Started XHR request\n`; // logs that XHR Request was started
});

// selects reload html object/ button and adds event listener for a click
document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";  // "clears" content in textContent
  document.location.reload(); // reloads document 
});
