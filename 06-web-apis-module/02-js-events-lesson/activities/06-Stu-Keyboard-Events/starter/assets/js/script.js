

function keydownAction(event) {
  // TODO: Complete keydown function
  event.preventDefault();
  document.querySelector('#status').textContent = "KEYDOWN Event";
  document.querySelector('#key').textContent = event.key;
  document.querySelector('#code').textContent = event.code;
  
}

function keyupAction(event) {
  event.preventDefault();
  document.querySelector('#key').textContent = "";
  document.querySelector('#code').textContent = "";
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);
