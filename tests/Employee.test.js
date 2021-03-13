const Employee = require('../lib/Employee');

test('can instantiate Employee instance', () => {
    const x = new Employee(name);
    expect(typeof (x)).toBe('object');
});

test('can set name via constructor argument', () => {
    const name = 'Larry';
    const x = new Employee(name);
    expect(x.name).toBe(name);
});

test('can set id via constructor argument', () => {
    const id = 1;
    const x = new Employee('foo', id);
    expect(x.id).toBe(id);
});

test('can set email via constructor argument', () => {
    const email = 'larry@gmail.com';
    const x = new Employee('foo', 1, email);
    expect(x.email).toBe(email);
});

test('can get name via getName() method', () => {
    const value = 'Foo Bar';
    const x = new Employee(value);
    expect(x.getName()).toBe(value);
});

test('can get id via getId() method', () => {
    const value = 666;
    const x = new Employee('Foo Bar', value);
    expect(x.getId()).toBe(value);
});

test('can get email via getEmail() method', () => {
    const value = 'foobar@workingtest.com';
    const x = new Employee('Foo Bar', 666, value);
    expect(x.getEmail()).toBe(value);
});

test('can get Employee via getRole() method', () => {
    const value = 'Employee';
    const x = new Employee('Foo Bar', 666, 'foobar@workingtest.com');
    expect(x.getRole()).toBe(value);
});