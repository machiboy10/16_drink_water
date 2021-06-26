const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlighCups(idx)
    })
})

function highlighCups(idx){



    try {
        if((smallCups[idx].children[0].classList.contains('full') && 
        !smallCups[idx].nextElementSibling.children[0].classList.contains('full'))){  
            idx--
    }
    } catch (error) {
        smallCups[7].children[0].classList.toggle('full')
        idx = 6
    }
   
    smallCups.forEach((cup, idx2)=> {
        if(idx2 <= idx) {
            cup.children[0].classList.add('full')
        } else {
            cup.children[0].classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.fill.full').length

    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}