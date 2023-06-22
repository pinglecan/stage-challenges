function fizz_buzz(fizz, buzz){
    console.log('real')
    numbers = ''
    for(x = 1; x <100; x++){
        if(Number.isInteger(x / fizz) && Number.isInteger( x / buzz) ){
            numbers += 'fb '
        }else if(Number.isInteger(x / fizz)){
            numbers += 'f '
        }else if(Number.isInteger(x / buzz)){
            numbers += 'b '
        }else{
            numbers += (x + ' ')
        }
    }
    return numbers
}
function create_text(){
    console.log('rel')
    let fizz_prompt = prompt('geef een getal')
    let buzz_prompt = prompt('geef nog een getal')
    let create_text = document.createElement("p")
    create_text.innerHTML = fizz_buzz(fizz_prompt,buzz_prompt)

    document.getElementById("numbers").appendChild(create_text);
}