"use strict"



function renderRatings(){
    let retingValue = document.getElementById('amount').value;
    const ratingActive = document.getElementById('test');

    console.log(ratingActive);
    const ratingActiveWidth = retingValue / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
}



document.getElementById('type').addEventListener('change', function() {
    document.getElementById('test2').setAttribute('dir', this.value)
  })
  
