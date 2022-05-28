const trainingPlanArea = document.querySelector('.training__plan');
const trainingPlan = document.querySelector('.options--check');
const closeBtn = document.querySelector('.close');
const startTraining = document.querySelector('.options--start')
const trainingPanel = document.querySelector('.training__area')
const header = document.querySelector('header');
const closeTrainingBtn = document.querySelector('.close-training')
const mainOptions = document.querySelector('.options')
const typeOfTraining = document.querySelector('.training__area--type')
const trainingAreaContainerPush = document.querySelector('.training__area--container-push')
const pushTrainingOptions = document.querySelector('.push__training')
const pullTrainingOptions = document.querySelector('.pull__training')



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
    if ((pushTrainingOptions).checked) {
        trainingAreaContainerPush.style.display = 'flex'
    } else {
        console.log('wybierz rodzaj treningu')
    }
}
trainingPlan.addEventListener('click', showPlan);
closeBtn.addEventListener('click', closePlan);
startTraining.addEventListener('click', runTraining);
closeTrainingBtn.addEventListener('click', closeTraining);
typeOfTraining.addEventListener('click', chooseTypeTraining);
