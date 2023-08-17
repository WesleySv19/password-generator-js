const generatePasswordButton = document.querySelector('#generate_password')
const generatedPasswordElement = document.querySelector('#generated_password')

const getLetterLowerCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97))
}

getLetterLowerCase()

const getLetterUpperCase = () => {
     console.log((String.fromCharCode(Math.floor(Math.random() * 26) + 65)))
}

const getNumber = () => {
    console.log(Math.floor(Math.random() * 10 ).toString())
}

const getSymbol = () => {
    const symbols = '!@#$%^&?/'
     console.log(symbols[Math.floor(Math.random() * symbols.length)])
}

getSymbol()

generatePasswordButton.addEventListener('click', () => {
    console.log('teste')
})
