
// Create is null or undefined
export function isNull(value: any): boolean {
    return value === null || value === undefined;
}


// If the decimal place is less than 0, the original value is returned
export function formatNumber(value: number, decimalPlaces?: number, prefix?: string, suffix?: string): string {
    let formattedNumber = value.toString();
    if (decimalPlaces && decimalPlaces >= 0) {
        formattedNumber = decimalPlaces === 0 ? Math.round(value).toString() : value.toFixed(decimalPlaces);
    }
    return `${prefix ?? ""}${formattedNumber}${suffix ?? ""}`;
}

//Localizer is required localizer type and interface
export type ILocalizer = { toShortDate: (date: string) => string };

export function formatDate(date: string, localizer: ILocalizer): string {
    return localizer.toShortDate(date);
}

// create html escape function
export function htmlEscape(text: string): string {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}



export const UPPERCASE_FORMAT = "uppercase";
export const LOWERCASE_FORMAT = "lowercase";
export const CAPITALIZE_FORMAT = "capitalize";
export const ITALIC_FORMAT = "italic";
export const BOLD_FORMAT = "bold";

type TextFormatOptionsType = typeof UPPERCASE_FORMAT | typeof LOWERCASE_FORMAT | typeof CAPITALIZE_FORMAT | typeof ITALIC_FORMAT | typeof BOLD_FORMAT;


export function formatString(
    text: string,
    format?: TextFormatOptionsType
): string {
    let textString = htmlEscape(text);

    const BOLD_REGEX = /\*\*(.+?)\*\*/g;
    const ITALICS_REGEX = /\*(.+?)\*/g;
    const UPPER_REGEX = /\^(.+?)\^/g;
    const LOWER_REGEX = /_+(.+?)_+/g;
    const CAPITALIZE_FIRST_CHAR_REGEX = /~\b([a-z])/g;
    const FORMAT_TEXT_REGEX_SYMBOLS = /[*^_~]/g;

    textString = textString.replace(BOLD_REGEX, "<strong>$1</strong>")
        .replace(ITALICS_REGEX, "<em>$1</em>")
        .replace(UPPER_REGEX, (textString) => textString.toUpperCase())
        .replace(LOWER_REGEX, (textString) => textString.toLowerCase())
        .replace(CAPITALIZE_FIRST_CHAR_REGEX, (match) => match.toUpperCase())
        .replace(FORMAT_TEXT_REGEX_SYMBOLS, ''); // remove all regex symbols


    if (!format) {
        return textString;
    }

    const formatFunctions: { [key in TextFormatOptionsType]: (text: string) => string } = {
        [UPPERCASE_FORMAT]: (text: string) => text.toUpperCase(),
        [LOWERCASE_FORMAT]: (text: string) => text.toLowerCase(),
        [CAPITALIZE_FORMAT]: (text: string) => text.charAt(0).toUpperCase() + text.slice(1),
        [ITALIC_FORMAT]: (text: string) => `<em>${text}</em>`,
        [BOLD_FORMAT]: (text: string) => `<strong>${text}</strong>`,
    };

    return formatFunctions[format](textString);
}
