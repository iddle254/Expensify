const add = (a,b) => a+b;
const generateGreeting = (name) => `Hello ${name}.`

test('should add two numbers',() => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test(
    'should validate greeting',
    ()=>{
        const name = 'Mike';
        const result = generateGreeting(name);
        expect(result).toBe(`Hello ${name}.`);
    }
);