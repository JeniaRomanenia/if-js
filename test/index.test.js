function sum(a = 0) {
    return function(b = 0) {
        return a + b;
    };
}
test('Sum function should return sum of two values', () => {
    expect(sum(5)(3)).toBe(8)
    expect(sum(0.3)(0.2)).toBeCloseTo(0.5)
})
test('Sum function should return value correctly comparing to other values', () => {
    expect(sum(6)(3)).toBeGreaterThan(8)
    expect(sum(6)(3)).toBeGreaterThanOrEqual(9)
    expect(sum(6)(3)).toBeLessThan(10)
    expect(sum(6)(3)).toBeLessThanOrEqual(10)
})

function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}
test('Min function should return the minimum value of values', () => {
    expect(min(4, 6)).toBe(4)
})

function min1(a, b) {
    return a < b ? a : b;
}
test('Min function should return the minimum value of values', () => {
    expect(min1(3, 5)).toBe(3)
})

function max(a, y) {
    if (a > y) {
        return a;
    }
    return y;
}
test('Max function should return the maximum value of values', () => {
    expect(max(9, 5)).toBe(9)
})

function max1(a, y) {
    return a > y ? a : y;
}
test('Max function should return the maximum value of values', () => {
    expect(max1(3, 5)).toBe(5)
})
