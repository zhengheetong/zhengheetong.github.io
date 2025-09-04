function toggle(button){

    // this works because the button is immediately after the "moreDetails" element it pertains to
    let Text = button.previousElementSibling;

    // this would work if you move the button so it is not immediately after moreDetails, but still in the same parent div.
    //let Text = button.parentElement.querySelector(".moreDetails");
    
    if(Text.style.display == "none"){
        Text.style.display= "block";
		button.innerHTML= "Show Less";
    }
    else {
        Text.style.display = "none";
		button.innerHTML= "Show More";
    }
}

const moreDetailses = document.querySelectorAll(".moreDetails");
for (let i = 0; i < moreDetailses.length; i++) {
  moreDetailses[i].style.display = "none";
}