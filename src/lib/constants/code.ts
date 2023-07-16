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

export const CODE_OBJECT_EXAMPLE = {
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

export const SPACE_OBJECT_EXAMPLE = {
    "astroPhysics": {
        "tools": ["Hubble Space Telescope", "James Webb Space Telescope"],
        "primaryStudy": "Exoplanets",
        "isObservational": true,
        "skyObject": {
            "name": "Kepler-186f",
            "distanceLightYears": 582.36
        },
        "researchPaper": null
    }
}

export const SOLAR_ENERGY_OBJECT_EXAMPLE = {
    "photovoltaics": {
        "solarPark": {
            "name": "Tengger Desert Solar Park",
            "capacityMW": 1547
        },
        "primaryMaterial": "Monocrystalline Silicon",
        "tools": ["Solar Panels", "Inverters"],
        "gridConnected": true,
        "installationGuide": null
    }
}
