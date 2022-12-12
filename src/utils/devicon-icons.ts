export const getDevicon = (toolString : string) => {
    if (toolString.includes("plain")) {
        const tempString = toolString.replace("-plain", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-plain.svg`;
    }

    if (toolString.includes("wordmark")) {
        const tempString = toolString.replace("-wordmark", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-wordmark.svg`;
    }

    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${toolString}/${toolString}-original.svg`;
};