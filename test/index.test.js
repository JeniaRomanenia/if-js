function sum(a = 0) {
    return function(b = 0) {
        return a + b;
    };
}

test('function will return number', () => {
    expect(sum(5)(2)).toBe(7);
});


