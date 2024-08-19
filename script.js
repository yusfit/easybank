// const toggle_btn = document.querySelector('.drop-down_toggle')
const navigation = document.querySelector('.navigation')
const toggle_close = document.querySelector('.toggle_close')

function showSidebar(){
    const navigation = document.querySelector('.navigation')
    navigation.style.display = 'flex'
}

function hideSidebar(){
    const navigation = document.querySelector('.navigation')
    navigation.style.display = 'none'
}

// if(toggle_btn){
//     toggle_btn.addEventListener('click', ()=>{
//         navigation.classList.add('show-menu')
//     })
// }

// if(toggle_close){
//     toggle_close.addEventListener('click', ()=>{
//         navigation.classList.remove('show-menu')
//     })
// }

// const navLink = document.querySelectorAll('.navlink')

// const linkAction = () =>{
//     const navigation = document.querySelector('.navigation')
//     navigation.className.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))