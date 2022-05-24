const trainingPlanArea = document.querySelector('.training-plan-area');
const trainingPlan = document.querySelector('.training-plan');
const closeBtn = document.querySelector('.close');
const startTraining = document.querySelector('.start-training')
const trainingPanel = document.querySelector('.training-area')
const header = document.querySelector('header');
const closeTrainingBtn = document.querySelector('.close-training')
const mainOptions = document.querySelector('.main-options')
const typeOfTraining = document.querySelector('.type-of-training')
const trainingAreaContainerPush = document.querySelector('.training-area-container-push')
const pushType = document.getElementById('#1')
const pullType = document.getElementById('#2')

let id;
const showPlan = () => {
    trainingPlanArea.style.display = 'flex';
}

const closePlan = () => {
    trainingPlanArea.style.display = 'none'
}

const runTraining = () => {
    trainingPanel.style.display = 'flex';
    header.style.display = 'none';
    mainOptions.style.display = 'none';
}

const closeTraining = () => {
    trainingPanel.style.display = 'none';
    header.style.display = 'flex';
    mainOptions.style.display = 'flex';
}

const chooseTypeTraining = () => {
    if (pushType === 1) {
        trainingAreaContainerPush.style.display = 'flex'
    } else if (pullType === 2) {
        trainingAreaContainerPush.style.display = 'flex';
    }
}
trainingPlan.addEventListener('click', showPlan);
closeBtn.addEventListener('click', closePlan);
startTraining.addEventListener('click', runTraining);
closeTrainingBtn.addEventListener('click', closeTraining);
typeOfTraining.addEventListener('click', chooseTypeTraining);
