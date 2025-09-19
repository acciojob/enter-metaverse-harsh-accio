function changeToHeading() {
  // Select the paragraph element
  const para = document.getElementById('status');

  // Create a new <h1> element
  const heading = document.createElement('h1');
  heading.innerText = "Entered Metaverse";

  // Keep the same id so scripts or tests can access it
  heading.id = "status";

  // Replace the <p> with <h1>
  para.parentNode.replaceChild(heading, para);
}
