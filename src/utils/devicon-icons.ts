export const getDevicon = (toolString : string) => {

    if (toolString.includes("original") && toolString.includes("plain")) {
        let tempString = toolString.replace("-plain", "");
        tempString = tempString.replace("-original", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-original-plain.svg`;

    }

    if(toolString.includes("original") && toolString.includes("line")){
        let tempString = toolString.replace("-line", "");
        tempString = tempString.replace("-original", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-original-line.svg`;
    }



    if (toolString.includes("plain") && toolString.includes("wordmark")) {
        let tempString = toolString.replace("-wordmark", "");
        tempString = tempString.replace("-plain", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-plain-wordmark.svg`;
    }

    if(toolString.includes("original") && toolString.includes("wordmark")){
        let tempString = toolString.replace("-wordmark", "");
        tempString = tempString.replace("-original", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-original-wordmark.svg`;
    }

    if (toolString.includes("line")) {
        const tempString = toolString.replace("-line", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-line.svg`;
    }


    if (toolString.includes("wordmark")) {
        const tempString = toolString.replace("-wordmark", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-wordmark.svg`;
    }

    if (toolString.includes("plain")) {
        const tempString = toolString.replace("-plain", "");
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-plain.svg`;
    }

   

    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${toolString}/${toolString}-original.svg`;
};