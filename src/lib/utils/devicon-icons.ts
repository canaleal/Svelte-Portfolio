export const getDevicon = (toolString: string) => {
  const isGithub = toolString.includes("github");
  const suffix = toolString.includes("-wordmark") ? "-wordmark" 
              : toolString.includes("-plain") ? "-plain" 
              : "-original";

  // remove original, plain, line, wordmark from string
  const icon = toolString.replace(new RegExp(`-original|-plain|-wordmark|-github`, 'g'), '');

  return isGithub 
    ? `https://raw.githubusercontent.com/devicons/devicon/develop/icons/${icon}/${icon}${suffix}.svg`
    : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}${suffix}.svg`;
};
