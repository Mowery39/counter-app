/*Getting count*/
const getCount = document.getElementById("count");
/*Getting increase Button*/
const getBtn = document.getElementById("incrementBtn");
/*Getting reset Button*/
const getBtn2 = document.getElementById("resetBtn");
/*Getting decrease Button*/
const getBtn3 = document.getElementById("decrementBtn");


let count = 0;


function getColor() {
        if (count > 0) {
        getCount.style.color = "green";
    } else if (count < 0) {
        getCount.style.color = "red";
    } else {
        getCount.style.color = "black";
    }
}

getBtn.addEventListener("click", function(){
    count++;
    getCount.textContent = count;
    getColor();
})

getBtn2.addEventListener("click", function() {
    count = 0;
    getCount.textContent = count;
    getColor();
})

getBtn3.addEventListener("click", function() {
    count--;
    getCount.textContent = count;
    getColor();
})

getColor();
getCount.textContent = count;