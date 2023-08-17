const generatePasswordButton = document.querySelector('#generate_password')
const generatedPasswordElement = document.querySelector('#generated_password')

const getLetterLowerCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97))
}


const getLetterUpperCase = () => {
     return ((String.fromCharCode(Math.floor(Math.random() * 26) + 65)))
}

const getNumber = () => {
    return (Math.floor(Math.random() * 10 ).toString())
}

const getSymbol = () => {
    const symbols = '!@#$%^&?/'
     return (symbols[Math.floor(Math.random() * symbols.length)])
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ''
    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    const maxInterations = 100

    for(let i = 0; i < passwordLength; i += 4) {

        if(i >= maxInterations) {
            break
        }
        
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
        })
    }

    password = password.slice(0, passwordLength)

    generatedPasswordElement.style.display = 'block'
    generatedPasswordElement.querySelector('h4').innerText = password
}


generatePasswordButton.addEventListener('click', () => {
    generatePassword (
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
})



