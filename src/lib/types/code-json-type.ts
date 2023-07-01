export const VSCODE = 'vscode';
export const ANDROMEDA = "andromeda";
export const NEON = "neon"
export const MYSTIC = "mystic"
export const SOLAR = "solar"
export const MONOKAI = "monokai"

export const CodeJsonThemes = [VSCODE, ANDROMEDA, NEON, MYSTIC, SOLAR, MONOKAI]
export type ICodeJsonTheme = typeof VSCODE | typeof ANDROMEDA | typeof NEON | typeof MYSTIC | typeof SOLAR | typeof MONOKAI;

export const ExampleObject = {
    "machineLearning": {
        "tools": ["TensorFlow", "Keras", "PyTorch", "scikit-learn"],
        "primaryLanguage": "Python",
        "isSupervised": true,
        "dataset": {
            "name": "MNIST",
            "size": 70000
        },
        "model": null
    }
}

