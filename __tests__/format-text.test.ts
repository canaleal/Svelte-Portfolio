

import { formatString } from '../src/utils/format-text';

describe('formatString function', () => {
    test('should return the original string when no format is provided', () => {
        expect(formatString('Hello, world!')).toBe('Hello, world!');
    });

    test('should apply the uppercase format correctly', () => {
        expect(formatString('Hello, world!', 'uppercase')).toBe('HELLO, WORLD!');
    });

    test('should apply the lowercase format correctly', () => {
        expect(formatString('Hello, WORLD!', 'lowercase')).toBe('hello, world!');
    });

    test('should apply the capitalize format correctly', () => {
        expect(formatString('hello, world!', 'capitalize')).toBe('Hello, world!');
    });

    test('should apply the italic format correctly', () => {
        expect(formatString('Hello, world!', 'italic')).toBe('<em>Hello, world!</em>');
    });

    test('should apply the bold format correctly', () => {
        expect(formatString('Hello, world!', 'bold')).toBe('<strong>Hello, world!</strong>');
    });

    test('should apply multiple formats correctly', () => {
        const formattedText = formatString('Hello, world! **This is bold** and *this is italic*.');
        expect(formattedText).toBe("Hello, world! <strong>This is bold</strong> and <em>this is italic</em>.");

    });
});