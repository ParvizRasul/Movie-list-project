export const isValidTitle = (value) => {
    console.log('Validating Title', value) 
    return value.trim() !== '' && value.trim().length >= 3;
}

export const isValidYear = (value) => {
    console.log('Validating Year', value)
    const year = Number(value);
    return value !== '' && !isNaN(year) && year >= 1000 && year <= 3000;
}