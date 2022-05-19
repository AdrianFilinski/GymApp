const trainingPlanBtn = document.querySelector('.plan-btn');
const trainingPlan = document.querySelector('.training-plan')
const closeBtn = document.querySelector('.fas')
const measurent = document.querySelector('.measurement-form')
const measurementBtn = document.querySelector('.measurement-btn')
const closeMeasBtn = document.querySelector('.fas-close')

const showPlan = () => {
    trainingPlan.classList.add('active')
}

const closePlan = () => {
    trainingPlan.classList.remove('active')
}

const showMeasurent = () => {
    measurent.classList.add('active')
}

const closeMeas = () => {
    measurent.classList.remove('active')
}
trainingPlanBtn.addEventListener('click', showPlan);
closeBtn.addEventListener('click', closePlan);
measurementBtn.addEventListener('click', showMeasurent);
closeMeasBtn.addEventListener('click', closeMeas)
