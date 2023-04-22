const passInput = document.getElementById('inputPasswordId');
const lenInput = document.getElementById('inputLengthId');
const infoLength = document.querySelector('label[for="inputLengthId"]');
const btnGerar = document.getElementById('btnGerar');

const chkLower = document.getElementById('chkLowerId');
const chkUpper = document.getElementById('chkUpperId');
const chkNumber = document.getElementById('chkNumberId');
const chkSymbol = document.getElementById('chkSymbolId');

const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ["!","@","#","$","&"];

const caracters = Array.from(Array(26)).map((_,i)=> i + 97);
const lowerCaseCaracters = caracters.map((item)=>String.fromCharCode(item));
const UpperCaseCaracters = lowerCaseCaracters.map((item)=>item.toUpperCase());

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener('change', ()=>{
    infoLength.innerHTML = lenInput.value;
})

btnGerar.addEventListener('click',()=>{
    generatePassword(
        chkNumber.checked,
        chkSymbol.checked,
        chkLower.checked,
        chkUpper.checked,
        lenInput.value
    );
})

const generatePassword = (
    hasNumbers, 
    hasSymbols, 
    hasLowerCase, 
    hasUpperCase, 
    length
) =>{
    const newArray = [
    // Lembrar desses malditos 3 pontinhos!!!
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowerCase ? lowerCaseCaracters : []),
        ...(hasUpperCase ? UpperCaseCaracters : []),
    ];

    if(newArray.length === 0) return;

    console.log(newArray.length);

    let password = "";

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }

    passInput.value = password;
}