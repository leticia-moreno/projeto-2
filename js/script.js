const slides=document.querySelectorAll(".slide"),slideContainer=document.querySelector(".slides__container"),numeroSlides=slides.length,navBtns=document.querySelectorAll(".nav_plus");let currSlide=0;var playSlider;const autoPlay=()=>{playSlider=setInterval(nextSlide,4e3)};function manualNav(e){slides[e].classList.add("active"),navBtns[e].classList.add("active")}function nextSlide(){currSlide++,slides[currSlide-1].classList.remove("active"),navBtns[currSlide-1].classList.remove("active"),currSlide>numeroSlides-1&&(currSlide=0),slides[currSlide].classList.add("active"),navBtns[currSlide].classList.add("active")}navBtns.forEach((e,l)=>{e.addEventListener("click",()=>{slides[currSlide].classList.remove("active"),navBtns[currSlide].classList.remove("active"),manualNav(l),currSlide=l})}),slideContainer.addEventListener("mouseover",()=>{clearInterval(playSlider)}),slideContainer.addEventListener("mouseout",()=>{autoPlay()}),autoPlay();
const masks={cpf(e){return e.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2")},tel(e){return e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d)/,"$1-$2").replace(/(\d{4})-(\d)(\d{4})/,"$1$2-$3")}};document.getElementById("cpf").addEventListener("input",e=>{e.target.value=masks.cpf(e.target.value)}),document.getElementById("tel").addEventListener("input",e=>{e.target.value=masks.tel(e.target.value)});
const closeBtn=document.getElementById("close-btn"),openBtns=document.querySelectorAll(".button--secondary");function closeForm(){document.getElementById("form-wrapper").classList.add("inactive"),document.getElementsByTagName("body")[0].style.overflow="unset"}function openForm(){document.getElementById("form-wrapper").classList.remove("inactive"),document.getElementsByTagName("body")[0].style.overflow="hidden"}closeBtn.addEventListener("click",closeForm),openBtns.forEach(e=>{e.addEventListener("click",openForm)});
async function sendLead(){var e=document.getElementById("nome").value,t=document.getElementById("email").value,n=document.getElementById("cpf").value,l=document.getElementById("tel").value,l={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,cpf:n,telefone:l})};await fetch("http://localhost:3000/users",l).catch(function(e){console.log(e)})}document.getElementById("form").addEventListener("submit",function(e){e.preventDefault();e=document.getElementById("cpf").value;(14<=document.getElementById("tel").value.length||14==e.length)&&sendLead()});
let skills=document.querySelectorAll(".skill");function removeOpenClass(s){s.forEach(s=>{s.classList.remove("open")})}function addOpenClass(s,e){removeOpenClass(s),s[e].classList.add("open"),s=document.querySelectorAll(".skill")}skills.forEach((s,e)=>{s.addEventListener("click",s=>{s.currentTarget.classList.contains("open")?removeOpenClass(skills):addOpenClass(skills,e)})});