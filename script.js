const trainingPlanArea = document.querySelector('.training-plan-area')
const trainingPlan = document.querySelector('.training-plan')

const showPlan = () => {
    trainingPlanArea.style.display = 'flex';
}


trainingPlan.addEventListener('click', showPlan);
