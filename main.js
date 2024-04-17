import './style.scss'

const btn_menu = document.getElementById('btn_menu');
const nav_app = document.getElementById('nav_app')

btn_menu.addEventListener('click',()=>{
  nav_app.classList.add('nav_app_show')
})

nav_app.addEventListener('click',(el)=>{
  el.target.id === 'nav_app' ? el.target.classList.remove('nav_app_show') : null
})