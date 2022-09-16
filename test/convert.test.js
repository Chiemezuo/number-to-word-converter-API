const { convert } = require('../src/utils/convert')

test('Fail when provided input is not a number', () => {
    expect(() => { convert('b') }).toThrow(new Error('Not a number'))
})

test('Fail when provided input is larger than a trillion', () => {
    expect(() => { convert('1000000000001') }).toThrow(new Error('Number is too large'))
})

test('Convert 0 to zero', () => {
    expect(convert(0)).toBe('zero')
})

test('Convert 10 to ten', () => {
    expect(convert(10)).toBe('ten')
})

test('Convert 20 to twenty', () => {
    expect(convert(20)).toBe('twenty')
})

test('Convert 13 to thirteen', () => {
    expect(convert(13)).toBe('thirteen')
})

test('Convert 99 to ninety nine', () => {
    expect(convert(99)).toBe('ninety nine')
})

test('Convert 87 to eighty seven', () => {
    expect(convert(87)).toBe('eighty seven')
})

test('Convert 100 to one hundred', () => {
    expect(convert(100)).toBe('one hundred')
})

test('Convert 205 to two hundred and five', () => {
    expect(convert(205)).toBe('two hundred and five')
})

test('Convert 214 to two hundred and fourteen', () => {
    expect(convert(214)).toBe('two hundred and fourteen')
})

test('Convert 1120 to one thousand, one hundred and twenty', () => {
    expect(convert(1120)).toBe('one thousand, one hundred and twenty')
})

test('Convert 19009 to nineteen thousand and nine', () => {
    expect(convert(19009)).toBe('nineteen thousand and nine')
})

test('Convert 19909 to nineteen thousand, nine hundred and nine', () => {
    expect(convert(19909)).toBe('nineteen thousand, nine hundred and nine')
})

test('Convert 20000 twenty thousand', () => {
    expect(convert(20000)).toBe('twenty thousand')
})

test('Convert 976540 to nine hundred and seventy six thousand, five hundred and forty', () => {
    expect(convert(976540)).toBe('nine hundred and seventy six thousand, five hundred and forty')
})

test('Convert 1000450 to one million, four hundred and fifty', () => {
    expect(convert(1000450)).toBe('one million, four hundred and fifty')
})

test('Convert 1000001 to one million and one', () => {
    expect(convert(1000001)).toBe('one million and one')
})

test('Convert 1000100000 to one billion, one hundred thousand', () => {
    expect(convert(1000100000)).toBe('one billion, one hundred thousand')
})

test('Convert 1000000001 to one billion and one', () => {
    expect(convert(1000000001)).toBe('one billion and one')
})

test('Convert 1111111111 to one billion, one hundred and eleven million, one hundred and eleven thousand, one hundred and one', () => {
    expect(convert(1111111111)).toBe('one billion, one hundred and eleven million, one hundred and eleven thousand, one hundred and eleven')
})