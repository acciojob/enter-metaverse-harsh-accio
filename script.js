//your JS code here. If required.
function changeToHeading() {
	const para =document.getElementById('status') 
	
	const heading = document.createElement('h1')
	heading.innerText="Entered Metaverse";
	
	para.parentNode.replaceChild(heading,para);
}