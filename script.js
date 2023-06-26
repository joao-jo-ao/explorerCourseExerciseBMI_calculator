const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const modalWrapper = document.querySelector('.modal-wrapper')
const message = document.querySelector('.modal h2')
const closeModal = document.querySelector('.modal button')


let bmiCalculator = (weight, height)=>{
  return(weight/(height**2)).toFixed(1)
}

form.onsubmit = e => {
  e.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value
  
  const BMI = bmiCalculator(weight, height)
  message.innerText = `BMI is ${BMI};`
  
  modalWrapper.classList.add('open')
}

closeModal.onclick = () => {
  modalWrapper.classList.remove('open')
  weight = inputWeight.value = ''
  height = inputHeight.value = ''
}