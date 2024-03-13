let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')
let label = [document.querySelectorAll('label')]
console.log(label);
let input = [document.querySelectorAll('input')]
let couleur = [document.querySelectorAll('.required')]
let spanY = document.querySelector('span')
let spanM = document.querySelector('.span') 
let spanD = document.querySelector('.res') 

let valid = [document.querySelectorAll('.valid')]
let result



const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
const formattedToday = dd + '/' + mm + '/' + yyyy;


/*if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;*/





function resultat(){
    if(day.value <= 31 && day.value>0){
        result = dd - day.value
        spanD.innerHTML = result
    }else if(day.value ===""){
        label.forEach(item => item[0].classList.add('rouge'))
        couleur.forEach(element => element[0].style.display= 'block' )
        couleur.forEach(element => element[0].classList.add('rouge') )
        valid.forEach(element => element[0].style.display= 'none' )
        input.forEach(element => element[0].style.border = '1px solid red')
    }else{
        couleur.forEach(element => element[0].style.display= 'none' )
        valid.forEach(element => element[0].style.display= 'block' )
        valid.forEach(element => element[0].classList.add('rouge') )
        input.forEach(element => element[0].style.border = '1px solid red')
        label.forEach(item => item[0].classList.add('rouge'))
    }

    if(month.value <= 12 && month.value>0){
       result = mm - month.value
        spanM.innerHTML = result
    }else if(month.value ===""){
        label.forEach(item => item[1].classList.add('rouge'))
        couleur.forEach(element => element[1].style.display= 'block' )
        couleur.forEach(element => element[1].classList.add('rouge') )
        valid.forEach(element => element[1].style.display= 'none' )
        input.forEach(element => element[1].style.border = '1px solid red')
    }else{
        couleur.forEach(element => element[1].style.display= 'none' )
        valid.forEach(element => element[1].style.display= 'block' )
        valid.forEach(element => element[1].classList.add('rouge') )
        input.forEach(element => element[1].style.border = '1px solid red')
        label.forEach(item => item[1].classList.add('rouge'))
    }
    
    if(year.value.length === 4){
        result = yyyy - year.value
        spanY.innerHTML = result

    }else if(year.value ===""){
        label.forEach(item => item[2].classList.add('rouge'))
        couleur.forEach(element => element[2].style.display= 'block' )
        couleur.forEach(element => element[2].classList.add('rouge') )
        valid.forEach(element => element[2].style.display= 'none' )
        input.forEach(element => element[2].style.border = '1px solid red')
    }else{
        couleur.forEach(element => element[2].style.display= 'none' )
        valid.forEach(element => element[2].style.display= 'block' )
        valid.forEach(element => element[2].classList.add('rouge') )
        input.forEach(element => element[2].style.border = '1px solid red')
        label.forEach(item => item[2].classList.add('rouge'))
    }
    
    
}






    
