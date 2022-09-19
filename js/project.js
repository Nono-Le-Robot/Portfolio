const project = document.querySelectorAll('.swiper-slide')
const card = document.querySelectorAll('.flip-card-inner')
const githubLogo = document.querySelectorAll('.github-project-logo')
const siteLogo = document.querySelectorAll('.site-project-logo')


for (let j = 0; j < githubLogo.length; j++) {
  githubLogo[j].addEventListener('click', (e) => {
    e.stopPropagation()
  })
}

for (let k = 0; k < siteLogo.length; k++) {
  siteLogo[k].addEventListener('click', (e) => {
    e.stopPropagation()
  })
  
}





for (let index = 0; index < card.length; index++) {







  if(index != 1){

    project[index].addEventListener('click', (e) => {
     
      card[index].classList.toggle('rotate')
      e.stopPropagation()
    })
  } 
}