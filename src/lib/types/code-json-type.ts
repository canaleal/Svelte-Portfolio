export const VSCODE = 'vscode';
export const ANDROMEDA = "andromeda";
export const NEON = "neon"
export const MYSTIC = "mystic"
export const SOLAR = "solar"
export const MONOKAI = "monokai"
export const ORION = "orion"
export const WINTER = "winter"
export const FOREST = "forest"
export const CANYON = "canyon"

export const CodeJsonThemes = [VSCODE, ANDROMEDA, NEON, MYSTIC, SOLAR, MONOKAI, ORION, WINTER, FOREST, CANYON]
export type ICodeJsonTheme = typeof CodeJsonThemes[number];


export const ExampleObject = {
    "machineLearning": {
        "tools": ["TensorFlow",  "PyTorch"],
        "primaryLanguage": "Python",
        "isSupervised": true,
        "dataset": {
            "name": "MNIST",
            "size": 70000
        },
        "model": null
    }
}

