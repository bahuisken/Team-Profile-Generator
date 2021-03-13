const Intern = require('../lib/Intern');

test('can instantiate Intern instance', () => {
    const x = new Intern(name);
    expect(typeof (x)).toBe('object');
});

test('can set name via constructor argument', () => {
    const name = 'Larry';
    const x = new Intern(name);
    expect(x.name).toBe(name);
});

test('can set id via constructor argument', () => {
    const id = 1;
    const x = new Intern('foo', id);
    expect(x.id).toBe(id);
});

test('can set email via constructor argument', () => {
    const email = 'larry@gmail.com';
    const x = new Intern('foo', 1, email);
    expect(x.email).toBe(email);
});

test('can get name via getName() method', () => {
    const value = 'Foo Bar';
    const x = new Intern(value);
    expect(x.getName()).toBe(value);
});

test('can get id via getId() method', () => {
    const value = 666;
    const x = new Intern('Foo Bar', value);
    expect(x.getId()).toBe(value);
});

test('can get email via getEmail() method', () => {
    const value = 'foobar@workingtest.com';
    const x = new Intern('Foo Bar', 666, value);
    expect(x.getEmail()).toBe(value);
});

test('can get School via getSchool() method', () => {
    const value = 'DU';
    const x = new Intern('Foo Bar', 666, 'foobar@workingtest.com', value);
    expect(x.getSchool()).toBe(value);
});

test('can get Employee via getRole() method', () => {
    const value = 'Intern';
    const x = new Intern('Foo Bar', 666, 'foobar@workingtest.com', 'DU');
    expect(x.getRole()).toBe(value);
});