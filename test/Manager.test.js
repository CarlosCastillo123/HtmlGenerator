const Manager = require('../lib/Manager')

test('Employee class in an object', () => {
    const e = new Manager()
    expect(typeof(e)).toBe('object')
})
test('Employee class can bind name property', () => {
    const name = 'Dane'
    const m = new Manager(name)
    expect(m.name).toBe(name)
})
test('Employee classs can bind Id property', () => {
    const id = 14
    const m = new Manager('Carlos', id)
    expect(m.id).toBe(id)
})
test('Employee classs can bind Id property', () => {
    const email = 'carlos@123.com'
    const m = new Manager('Carlos', 12, email)
    expect(m.email).toBe(email)
})
