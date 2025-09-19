//your JS code here. If required.
function changeToHeading() {
    // get the paragraph
    const para = document.getElementById('status');

    // create a new h1 element
    const heading = document.createElement('h1');
    heading.innerText = "Entered Metaverse";

    // keep the same id so Cypress can find it
    heading.id = "status";

    // replace p with h1
    para.parentNode.replaceChild(heading, para);
  }