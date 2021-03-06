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
const trainingAreaContainerPull = document.querySelector('.training__area--container-pull')
const pushTrainingOptions = document.querySelector('.push__training')
const pullTrainingOptions = document.querySelector('.pull__training')
const plusBtn = document.querySelector('.add')



const showPlan = () => {
    trainingPlanArea.classList.add('shown');
}

const closePlan = () => {
    trainingPlanArea.classList.remove('shown')
}

const runTraining = () => {
    trainingPanel.style.display = 'flex';
    header.style.display = 'none';
    mainOptions.style.display = 'none';
    closePlan();
}

const closeTraining = () => {
    trainingPanel.style.display = 'none';
    header.style.display = 'flex';
    mainOptions.style.display = 'flex';
    trainingAreaContainerPush.style.display = 'none';
    trainingAreaContainerPull.style.display = 'none';
}

const chooseTypeTraining = () => {
    if ((pushTrainingOptions).checked) {
        trainingAreaContainerPull.style.display = 'none'
        trainingAreaContainerPush.style.display = 'flex'
    } else if (pullTrainingOptions.checked) {
        trainingAreaContainerPull.style.display = 'flex'
        trainingAreaContainerPush.style.display = 'none'
    }
}

plusBtn.addEventListener('click', function () {
    plusBtn.insertAdjacentHTML('afterend', `Ciężar: <input class="exercises" type="number" min="1" max="250" id="text">
    Powtórzenia: <input class="exercises" type="number" min="1" max="" id="name">
    <button class="add"><i class="fas fa-solid fa-plus"></i></button>`)
})
trainingPlan.addEventListener('click', showPlan);
closeBtn.addEventListener('click', closePlan);
startTraining.addEventListener('click', runTraining);
closeTrainingBtn.addEventListener('click', closeTraining);
typeOfTraining.addEventListener('click', chooseTypeTraining);
