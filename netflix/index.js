const responseQuestion = document.getElementsByClassName('question-reponse')
const svgQuestion = document.getElementsByClassName('question-svg')

function toogleQuestion(indexDiv) {
  responseQuestion[indexDiv].classList.toggle('hidden')
  svgQuestion[indexDiv].classList.toggle('rotate-45')
}

function closeCookies() {
  let infoCookies = document.getElementById('info-cookies')
  infoCookies.classList.add('hidden')
}