const star = document.getElementById("star");
const energy = document.getElementById("energy");
const switchBlock = document.querySelector(".switch_block");
const notification = document.querySelector(".notification");
const toggler = document.querySelector(".toggle_dropdown");
const toggle_icon = document.querySelector(".toggle");
toggle_icon.addEventListener('click',()=>{
    toggler.classList.toggle("show_dropdown")
})

const notification_count = 1
if (notification_count== 0) {
    notification.style.display = "none";
}
else{
    notification.innerText = notification_count
}
star.addEventListener("click", () => {
  switchBlock.style.left = star.offsetLeft + "px";
});
energy.addEventListener("click", () => {
  switchBlock.style.left = energy.offsetLeft + "px";
});
const counters = document.querySelectorAll(".value");
const speed = 300;
counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("count");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };
  animate();
});
