const Employee = require('../lib/Employee')

test('Employee class in an object', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
})
test('Employee class can bind name property', () => {
    const name = 'Dane'
    const e = new Employee(name)
    expect(e.name).toBe(name)
})
test('Employee classs can bind id property', () => {
    const id = 14
    const e = new Employee('Carlos', id)
    expect(e.id).toBe(id)
})
test('Employee classs can bind email property', () => {
    const email = 'carlos@123.com'
    const e = new Employee('Carlos', 12, email)
    expect(e.email).toBe(email)
})


