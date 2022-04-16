let count = 0;

const counts = document.querySelector(".counts");
const btn1 = document.querySelectorAll(".btn");

btn1.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("btn-decrease")) {
      count--;
    } else if (styles.contains("btn-increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      counts.style.color = "green";
    } 
    
    if (count < 0) {
      counts.style.color = "red";
    }
    if  (count === 0){
      counts.style.color = "black";
    }
    counts.textContent=count;
  });
});
