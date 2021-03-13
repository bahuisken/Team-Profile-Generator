const Manager = require('../lib/Manager');

test('can instantiate Manager instance', () => {
    const x = new Manager(name);
    expect(typeof (x)).toBe('object');
});

test('can set name via constructor argument', () => {
    const name = 'Larry';
    const x = new Manager(name);
    expect(x.name).toBe(name);
});

test('can set id via constructor argument', () => {
    const id = 1;
    const x = new Manager('foo', id);
    expect(x.id).toBe(id);
});

test('can set email via constructor argument', () => {
    const email = 'larry@gmail.com';
    const x = new Manager('foo', 1, email);
    expect(x.email).toBe(email);
});

test('can get name via getName() method', () => {
    const value = 'Foo Bar';
    const x = new Manager(value);
    expect(x.getName()).toBe(value);
});

test('can get id via getId() method', () => {
    const value = 666;
    const x = new Manager('Foo Bar', value);
    expect(x.getId()).toBe(value);
});

test('can get email via getEmail() method', () => {
    const value = 'foobar@workingtest.com';
    const x = new Manager('Foo Bar', 666, value);
    expect(x.getEmail()).toBe(value);
});

test('can get officeNumber via getOfficeNumber() method', () => {
    const value = 34;
    const x = new Manager('Foo Bar', 666, 'foobar@workingtest.com', value);
    expect(x.getOfficeNumber()).toBe(value);
});

test('can get Employee via getRole() method', () => {
    const value = 'Manager';
    const x = new Manager('Foo Bar', 666, 'foobar@workingtest.com', 34);
    expect(x.getRole()).toBe(value);
});