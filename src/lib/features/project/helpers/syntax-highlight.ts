export const syntaxHighlight = (json: any, codeTheme: string) => {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const formattedJSON = json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|(\{|\}|\[|\]|\,))/g,
        function (match: string) {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            } else if (/[\{\}\[\],]/.test(match)) {
                cls = 'punctuation';
            }
            return `<span class=" ${codeTheme}-${cls}-value ">${match}</span>`;
        }
    );
    return formattedJSON;
}