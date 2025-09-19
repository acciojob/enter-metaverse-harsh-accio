 function changeToHeading() {
      // Get the paragraph element
      const para = document.getElementById('status');

      // Create a new <h1> element
      const heading = document.createElement('h1');
      heading.innerText = "Entered Metaverse";

      // Keep the same id so tests or scripts can still access it
      heading.id = "status";

      // Replace the <p> with the new <h1>
      para.parentNode.replaceChild(heading, para);
    }