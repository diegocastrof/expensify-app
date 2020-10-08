const generateGreeting = (name = 'Anonymus') => `Hello ${name}`

test('Should say Hi Diego', () => {
    const hi = generateGreeting('Diego')
    expect(hi).toBe('Hello Diego')
})

test('Anonymus greeting', () => {
    expect(generateGreeting()).toBe('Hello Anonymus')
})