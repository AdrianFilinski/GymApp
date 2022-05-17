const trainingPlanBtn = document.querySelector('.plan-btn');
const trainingPlan = document.querySelector('.training-plan')
const closeBtn = document.querySelector('.fas')

const showPlan = () => {
    trainingPlan.classList.add('active')
}


const closePlan = () => {
    trainingPlan.classList.remove('active')
}
trainingPlanBtn.addEventListener('click', showPlan);
closeBtn.addEventListener('click', closePlan)