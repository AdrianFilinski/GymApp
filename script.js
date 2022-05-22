const trainingPlanArea = document.querySelector('.training-plan-area');
const trainingPlan = document.querySelector('.training-plan');
const closeBtn = document.querySelector('.close');

const showPlan = () => {
    trainingPlanArea.style.display = 'flex';
}

const closePlan = () => {
    trainingPlanArea.style.display = 'none'
}

trainingPlan.addEventListener('click', showPlan);
closeBtn.addEventListener('click', closePlan)

