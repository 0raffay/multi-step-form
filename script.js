// all the varibales

const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const numberInput = document.querySelector('#numberInput');
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const phoneError = document.querySelector('#numberError');
const validateForm = document.querySelector('.validateForm');
const goBackButton = document.querySelector('#goBackButton');
const stepOne = document.querySelector('#step-1');
const stepTwo = document.querySelector('#step-2');
const stepThree = document.querySelector('#step-3');
const stepFour = document.querySelector('#step-4')
const selectPlanBtnOne = document.querySelector('#selectButton-1');
const selectPlanBtnTwo = document.querySelector('#selectButton-2');
const selectPlanBtnThree = document.querySelector('#selectButton-3');
const selectPlanContainer = document.querySelector('.selectPlan');
const addMoreFeature = document.querySelector('.addOn');
const orderSummaryContainer = document.querySelector('.orderSummary');
const thankYouPopUp = document.querySelector('.thankYou');
const circle = document.querySelector('.circle');

// all the varibales

// user details validate functions 

function putNameValidate() {
    if (nameInput.value === '') {
        nameError.innerHTML = 'This field is required';
        return false;
    }
    if (!nameInput.value.match(/^[a-zA-Z\s]+$/)) {
        nameError.innerHTML = 'Enter Your Full Name';
        return false;
    }
    nameError.innerHTML = 'Valid Name';
    return true;
}

function putEmailValidate() {
    if (emailInput.value === '') {
        emailError.innerHTML = 'This field is Required';
        return false;
    }

    if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = 'Enter your Valid Email';
        return false;
    }

    emailError.innerHTML = 'Valid Email';
    return true;
}

function putNumberValidate() {
    if (numberInput.value === '') {
        phoneError.innerHTML = 'This field is required';
        return false;
    }

    if (!numberInput.value.match(/^\d{10}$/)) {
        phoneError.innerHTML = 'Enter your valid Phone Number';
        return false;
    }
    phoneError.innerHTML = 'Valid Phone Number';
    return true;
}

function emptyEmailField() {
    nameInput.value = '';
    emailInput.value = '';
    numberInput.value = '';
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    phoneError.innerHTML = '';
}

// user details validate function


// next button clicked

const nextBtnOne = document.querySelector('.btn-one');
nextBtnOne.addEventListener('click', () => {
    if (nameInput.value === '' || emailInput.value === '' || numberInput.value === '') {
        putNameValidate();
        putEmailValidate();
        putNumberValidate();
    } else {
        stepOne.classList.remove('stepStyle');
        stepTwo.classList.add('stepStyle');
        validateForm.classList.add('hidden');
        selectPlanContainer.classList.remove('hidden');
    }
})

const returnButtonOne = document.querySelector('.returnBtnOne');
returnButtonOne.addEventListener('click', () => {
    selectPlanContainer.classList.add('hidden');
    validateForm.classList.remove('hidden');
    stepOne.classList.add('stepStyle');
    stepTwo.classList.remove('stepStyle');
    selectPlanBtnOne.classList.remove('planStyle');
    selectPlanBtnTwo.classList.remove('planStyle');
    selectPlanBtnThree.classList.remove('planStyle');
    emptyEmailField();
})


function selectOnePlan() {
    selectPlanBtnOne.addEventListener('click', () => {
        selectPlanBtnOne.classList.add('planStyle');
        selectPlanBtnTwo.classList.remove('planStyle');
        selectPlanBtnThree.classList.remove('planStyle');
    })

    selectPlanBtnTwo.addEventListener('click', () => {
        selectPlanBtnTwo.classList.add('planStyle');
        selectPlanBtnOne.classList.remove('planStyle');
        selectPlanBtnThree.classList.remove('planStyle');
    })

    selectPlanBtnThree.addEventListener('click', () => {
        selectPlanBtnThree.classList.add('planStyle');
        selectPlanBtnOne.classList.remove('planStyle');
        selectPlanBtnTwo.classList.remove('planStyle');
    })
}

selectOnePlan();

const nextBtnTwo = document.querySelector('.btn-two');
nextBtnTwo.addEventListener('click', () => {
    if (selectPlanBtnOne.classList.contains('planStyle') || selectPlanBtnTwo.classList.contains('planStyle') || selectPlanBtnThree.classList.contains('planStyle')) {
        selectPlanContainer.classList.add('hidden');
        addMoreFeature.classList.remove('hidden');
        stepTwo.classList.remove('stepStyle');
        stepThree.classList.add('stepStyle');
        if (circle.classList.contains('circleStyle')) {
            yearlySummary();
            console.log('working');
        } else {
            monthlySummary();
        }
    } else {

        document.querySelector(".selectPlanMainContent").classList.add("error")
        // alert('Hey WhatsApp');
    }
})

const checkInputOne = document.querySelector('.checkInputOne');
const checkInputTwo = document.querySelector('.checkInputTwo');
const checkInputThree = document.querySelector('.checkInputThree');


function chooseOneOption() {
    const addFeatureButtonsOne = document.querySelector('#addOnBtnOne');
    addFeatureButtonsOne.addEventListener('click', () => {
        if (checkInputOne.checked !== true) {
            checkInputOne.checked = true;
        } else {
            checkInputOne.checked = false;
        }
        addtionalFeatureAdded();
    })

    const addFeatureButtonsTwo = document.querySelector('#addOnBtnTwo');
    addFeatureButtonsTwo.addEventListener('click', () => {
        if (checkInputTwo.checked !== true) {
            checkInputTwo.checked = true;
        } else {
            checkInputTwo.checked = false;
        }
        addtionalFeatureAdded();
    })

    const addFeatureButtonsThree = document.querySelector('#addOnBtnThree');
    addFeatureButtonsThree.addEventListener('click', () => {
        if (checkInputThree.checked !== true) {
            checkInputThree.checked = true;
        } else {
            checkInputThree.checked = false;
        }
        addtionalFeatureAdded();
    })
}

chooseOneOption();

function goToOrderSummary() {
    const nextBtnThree = document.querySelector('.btn-three');
    nextBtnThree.addEventListener('click', () => {
        if (checkInputOne.checked == true || checkInputTwo.checked == true || checkInputThree.checked == true) {
            addMoreFeature.classList.add('hidden');
            orderSummaryContainer.classList.remove('hidden');
            stepThree.classList.remove('stepStyle');
            stepFour.classList.add('stepStyle');
        } else {
            // alert('Hey What are you doing');
        }
    })
    const returnBtnTwo = document.querySelector('.returnBtnTwo');
    returnBtnTwo.addEventListener('click', () => {
        addMoreFeature.classList.add('hidden');
        selectPlanContainer.classList.remove('hidden');
        stepThree.classList.remove('stepStyle');
        stepTwo.classList.add('stepStyle');
    })
}

goToOrderSummary();

function goToThankYou() {
    const nextBtnFour = document.querySelector('.btn-four');
    nextBtnFour.addEventListener('click', () => {
        orderSummaryContainer.classList.add('hidden');
        thankYouPopUp.classList.remove('hidden');
    })
    const returnBtnThree = document.querySelector('.returnBtnThree');
    returnBtnThree.addEventListener('click', () => {
        orderSummaryContainer.classList.add('hidden');
        addMoreFeature.classList.remove('hidden');
        stepFour.classList.remove('stepStyle');
        stepThree.classList.add('stepStyle');
    })
}

goToThankYou();

const planStatus = document.querySelector('#planStatus');
const priceOfEachPlan = document.querySelector('#priceOne');
function monthlySummary() {
    if (selectPlanBtnOne.classList.contains('planStyle')) {
        planStatus.innerHTML = 'Arcade(Monthly)';
        priceOfEachPlan.innerHTML = '$9/mo'
    } else if (selectPlanBtnTwo.classList.contains('planStyle')) {
        planStatus.innerHTML = 'Advanced(Monthly)';
        priceOfEachPlan.innerHTML = '$12/mo'
    } else if (selectPlanBtnThree.classList.contains('planStyle')) {
        planStatus.innerHTML = 'Pro(Monthly)';
        priceOfEachPlan.innerHTML = '$15/mo'
    }
}

function yearlySummary() {
    if (selectPlanBtnOne.classList.contains('planStyle')) {
        planStatus.innerHTML = 'Arcade(Yearly)';
        priceOfEachPlan.innerHTML = '$90/yr'
    } else if (selectPlanBtnTwo.classList.contains('planStyle')) {
        planStatus.innerHTML = 'Advanced(Yearly)';
        priceOfEachPlan.innerHTML = '$120/yr'
    } else if (selectPlanBtnThree.classList.contains('planStyle')) {
        planStatus.innerHTML = 'Pro(Yearly)';
        priceOfEachPlan.innerHTML = '$150/yr'
    }
}

const serviceOne = document.querySelector('#serviceOne');
const serviceTwo = document.querySelector('#serviceTwo');
const serviceThree = document.querySelector('#serviceThree');

function addtionalFeatureAdded() {
    if (checkInputOne.checked == true) {
        serviceOne.classList.remove('hidden');
    } else {
        serviceOne.classList.add('hidden');
    }

    if (checkInputTwo.checked == true) {
        serviceTwo.classList.remove('hidden');
    } else {
        serviceTwo.classList.add('hidden');
    }

    if (checkInputThree.checked == true) {
        serviceThree.classList.remove('hidden');
    } else {
        serviceThree.classList.add('hidden');
    }
}

const specialButton = document.querySelector('.specialButton');
const timeSpanOne = document.querySelector('#timeSpanOne');
const timeSpanTwo = document.querySelector('#timeSpanTwo');
const timeSpanThree = document.querySelector('#timeSpanThree');
const priceTagOne = document.querySelector('.priceTagOne');
const priceTagTwo = document.querySelector('.priceTagTwo');
const priceTagThree = document.querySelector('.priceTagThree');

specialButton.addEventListener('click', () => {
    circle.classList.toggle('circleStyle');
    if (circle.classList.contains('circleStyle')) {
        timeSpanOne.classList.add('show');
        timeSpanTwo.classList.add('show');
        timeSpanThree.classList.add('show');
        priceTagOne.innerHTML = '$90/yr';
        priceTagTwo.innerHTML = '$120/yr';
        priceTagThree.innerHTML = '$150/yr';
        yearlySummary();
    } else {
        timeSpanOne.classList.remove('show');
        timeSpanTwo.classList.remove('show');
        timeSpanThree.classList.remove('show');
        priceTagOne.innerHTML = '$9/mo';
        priceTagTwo.innerHTML = '$12/mo';
        priceTagThree.innerHTML = '$15/mo';
    }
})




//Utility Functin

function selector(selector) {
    return typeof document.querySelectorAll(selector) === null ? false : document.querySelectorAll(selector);
}

function goback (){

}
function classAdder (whatToAdd, whoToAdd){ 
    let e = document.querySelectorAll(whoToAdd);

    if(e.length > 1) {
        Array.from(e).forEach((e)=> {
            e.classlist.add(whatToAdd);
        })
    } else {
        e.classlist.add(whatToAdd)
    }
}

//Step1:
function formStep1() {
    const input1 = ;
    const button = ;


}
function formStep2() {
    const input1 = ;
    const button = ;


}
function formStep3() {
    const input1 = ;
    const button = ;


}