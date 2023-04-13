const cardName = document.querySelector('#card_name')
const inputcardHolder = document.querySelector('#cardholder')

const frontCardDigit = document.querySelector('#front-card-digit')
const inputcardNumber = document.querySelector('#cardnumber')

const mnth = document.querySelector('#mnth')
const inputcardMonth = document.querySelector('#cardmonth')

const year = document.querySelector('#year')
const inputcardMonthYear = document.querySelector('#cardmonthyear')

const backCardDigitCvc = document.querySelector('#back-card-digit')
const inputcardMonthCvc = document.querySelector('#cardmonthcvc')



const inputSubmitBtn = document.getElementById('submit-btn')
// const thankYou = document.querySelector('.thank_you')
const form = document.querySelector('#form')
const completeDetails = document.getElementById('complete-details')
const continueBtn = document.getElementById('continue')


const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')
const error5 = document.getElementById('error5')



inputcardHolder.addEventListener('keyup', (e)=>{
    if(!e.target.value){
       cardName.innerHTML = 'Jane Appleseed'
       inputcardHolder.style.border = '1px solid hsl(0, 100%, 66%)'
        error1.style.display = 'block'
    }else{
        cardName.innerHTML = e.target.value
        error1.style.display = 'none'
        inputcardHolder.style.borderColor = 'hsl(278, 94%, 30%)'
    }
})

inputcardNumber.addEventListener('keyup', (e)=>{
    if(!e.target.value){
        frontCardDigit.innerHTML = '1234 5678 9123 0000'
        inputcardNumber.style.border = '1px solid hsl(0, 100%, 66%)'
        error2.style.display = 'block'
    }else{
        const valuesOfInput = e.target.value.replaceAll("","") 

        if(e.target.value.length > 14){
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
            frontCardDigit.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
        }else if(e.target.value.length > 9){
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")
            frontCardDigit.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")
        }else if(e.target.value.length > 4){
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})/, "$1 $2")
            frontCardDigit.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})/, "$1 $2")
        }
        else{
            frontCardDigit.innerHTML = valuesOfInput
            inputcardNumber.style.border = '1px solid hsl(278, 94%, 30%)'
            error2.style.display = 'none'
        }
    }
})


inputcardMonth.addEventListener('keyup', (e)=>{
    if(!e.target.value){
        mnth.innerHTML = '00'
        inputcardMonth.style.border = '1px solid hsl(0, 100%, 66%)'
        error3.style.display = 'block'
    }else if(e.target.value.length <= 1){
        inputcardMonth.style.border = '1px solid hsl(0, 100%, 66%)'
        error3.style.display = 'block'
    }else{
        mnth.innerHTML = e.target.value
        error3.style.display = 'none'
        inputcardMonth.style.borderColor = 'hsl(278, 94%, 30%)'
    }
})

inputcardMonthYear.addEventListener('keyup', (e)=>{
    if(!e.target.value){
        year.innerHTML = '00'
        inputcardMonthYear.style.border = '1px solid hsl(0, 100%, 66%)'
        error5.style.display = 'block'
    }else if(e.target.value.length <= 1){
        inputcardMonthYear.style.border = '1px solid hsl(0, 100%, 66%)'
        error5.style.display = 'block'
    }else{
        year.innerHTML = e.target.value
        inputcardMonthYear.style.borderColor = 'hsl(278, 94%, 30%)'
        error5.style.display = 'none'
    }
})

inputcardMonthCvc.addEventListener('keyup', (e)=>{
    if(!e.target.value){
        backCardDigitCvc.innerHTML = '000'
        inputcardMonthCvc.style.border = "1px solid hsl(0, 100%, 66%)"
        error4.style.display = 'block'
    }else if(e.target.value.length < 2){
        inputcardMonthCvc.style.border = "1px solid hsl(0, 100%, 66%)"
        error4.style.display = 'block'
    }else{
        backCardDigitCvc.innerHTML = e.target.value
        error4.style.display = 'none'
        inputcardMonthCvc.style.borderColor = 'hsl(278, 94%, 30%)'
    }
})


inputSubmitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('click')

    if(inputcardHolder.value &&
        inputcardNumber.value &&
        inputcardMonth.value &&
        inputcardMonthYear.value &&
        inputcardMonthCvc.value){
            completeDetails.style.display = 'block'
            form.style.display = 'none'
        }

   
})

continueBtn.addEventListener('click', (e)=>{
    form.style.display = 'block'
    inputcardHolder.value = ''
    inputcardNumber.value = ''
    inputcardMonth.value = ''
    inputcardMonthYear.value = ''
    inputcardMonthCvc.value = ''

    cardName.innerHTML = 'Jane Appleseed'
    frontCardDigit.innerHTML = '0000 0000 0000 0000'
    mnth.innerHTML = '00'
    year.innerHTML = '00'
    backCardDigitCvc.innerHTML = '000'
})

