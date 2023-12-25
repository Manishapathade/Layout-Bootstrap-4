const cl = console.log;

const toggleBtn = document.getElementById('toggleBtn');





const onNavbarToggle = (eve) =>{
    // cl(eve.target)
    eve.target.classList.toggle("fa-xmark")
    eve.target.classList.toggle("fa-bars")

}








toggleBtn.addEventListener('click', onNavbarToggle)