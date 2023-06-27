function Numbers_to_roman(input){
    let roman_numerals = ''
    while(input != 0 ){
        if(input >= 1000){
            input -= 1000
            roman_numerals += 'M'
        }else if(input >= 900){
            input -= 900
            roman_numerals += 'CM'
        }else if(input >= 500){
            input -= 500
            roman_numerals +='D'
        }else if(input >= 400){
            input -= 400
            roman_numerals +='CD'
        }else if(input >= 100){
            input -= 100
            roman_numerals +='C'
        }else if(input >= 90){
            input -= 90
            roman_numerals +='XC'
        }else if(input>= 50){
            input -= 50
            roman_numerals += 'L'
        }else if(input >= 40){
            input -= 40
            roman_numerals += 'XL'
        }else if (input >= 10){
            input -= 10
            roman_numerals += 'X'
        }else if(input >= 9){
            input -= 9
            roman_numerals += 'IX'
        }else if(input >= 5){
            input -= 5
            roman_numerals += 'V'
        }else if(input >= 4){
            input -= 4
            roman_numerals += 'IV'
        }else if(input >= 1){
            input -= 1
            roman_numerals += 'I'
        }else{
            console.log('error')
        }
    }
    return roman_numerals

}


let user_input = prompt('give a number');


let create_text = document.createElement("p")
create_text.innerHTML = Numbers_to_roman(user_input)

document.getElementById("Numbers").appendChild(create_text);