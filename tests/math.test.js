const { fahrenheitToCelsius, celsiusToFahrenheit} = require('../src/math')


test('Should calculate Fahrenheit to Celsius', () => { 
    const temperature = fahrenheitToCelsius(32)
    expect(temperature).toBe(0)
})

test('Should calculate Celsius to Fahrenheit', () => {
    const temperature = celsiusToFahrenheit(0)
    expect(temperature).toBe(32)
})

// test('Async test demo', (done) =>{
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
    

// })