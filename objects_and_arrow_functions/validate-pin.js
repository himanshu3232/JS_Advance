//UC-3
let regex = /^[ 0-9]{6,}$/
const PIN_CODE = "400 088"


console.log("PIN code", `${PIN_CODE} ${regex.test(PIN_CODE) ? 'Is valid' : 'is not valid'}`)