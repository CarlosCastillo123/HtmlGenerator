const Engineer = require('../lib/Engineer')

test('Is engineer an object', () => {
    const e = new Engineer()
    expect(typeof(e)).toBe('object')
})
test('Can Engineer class bind name', () => {
    const name = 'Carlos'
    const e = new Engineer(name)
    expect(e.name).toBe(name)
})
test('Can Engineer class bind id', () => {
    const id = 12
    const e = new Engineer('carlos', id)
    expect(e.id).toBe(id)
})
test('Can Engineer class bind email', () => {
    const email = 12
    const e = new Engineer('carlos', 123, email)
    expect(e.email).toBe(email)
})
test('Can Engineer class bind Github user name', () => {
    const github = 'Carlos123'
    const e = new Engineer('Carlos', 123, 'carlos@123.com', github)
    expect(e.github).toBe(github)
})