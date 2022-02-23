
const Intern = require('../lib/Intern')

test('Is intern an object', () => {
    const i = new Intern()
    expect(typeof(i)).toBe('object')
})
test('Can Intern class bind name', () => {
    const name = 'Carlos'
    const i = new Intern(name)
    expect(i.name).toBe(name)
})
test('Can Intern class bind id', () => {
    const id = 12
    const i = new Intern('carlos', id)
    expect(i.id).toBe(id)
})
test('Can Intern class bind email', () => {
    const email = 12
    const i = new Intern('carlos', 123, email)
    expect(i.email).toBe(email)
})
test('Can Intern class bind Github user name', () => {
    const school = 'UCSD'
    const i = new Intern('Carlos', 123, 'carlos@123.com', school)
    expect(i.school).toBe(school)
})