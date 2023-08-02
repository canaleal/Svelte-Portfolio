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
export const SYNTAX_HIGHLIGHTING = ['key-value', 'string-value', 'number-value', 'boolean-value', 'null-value', 'punctuation-value']
export const SPACE_OBJECT_EXAMPLE = {
    "astroPhysics": { "tools": ["Hubble Space Telescope", "James Webb Space Telescope"],
        "primaryStudy": "Exoplanets",
        "isObservational": true,
        "skyObject": {
            "name": "Kepler-186f",
            "distanceLightYears": 582.36
        },
        "researchPaper": null
    }
}
export const TRAFFIC_CAMERAS_EXAMPLE =  {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            -79.3813860009273,
            43.6431200069527
        ]
    },
    "properties": {
        "id": 2,
        "image_url": "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/CameraImages/loc8001.jpg",
        "image_url_north": "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/ComparisonImages/loc8001n.jpg",
        "image_url_east": "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/ComparisonImages/loc8001e.jpg",
        "image_url_south": "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/ComparisonImages/loc8001s.jpg",
        "image_url_west": "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/ComparisonImages/loc8001w.jpg",
        "main_road": "YORK ST",
        "cross_road": "BREMNER BLVD / RAPTORS WAY",
        "gps_type": "POINT",
        "gps_coordinates": [
            -79.3813860009273,
            43.6431200069527
        ]
    }
}
export const TRAFFIC_LIGHTS_EXAMPLE =  {
    "type": "Feature",
    "properties": {
      "@id": "node/1497897",
      "highway": "traffic_signals",
      "traffic_signals": "signal",
      "traffic_signals:direction": "both"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.3308931,
        43.7266871
      ]
    },
    "id": "node/1497897"
  }
export const GEOJSON_EXAMPLE = { "type": "FeatureCollection",
"features": [
  { "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
    "properties": {"prop0": "value0"}
    },
  { "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
        ]
      },
    "properties": {
      "prop0": "value0",
      "prop1": 0.0
      }
    },
  { "type": "Feature",
     "geometry": {
       "type": "Polygon",
       "coordinates": [
         [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
           [100.0, 1.0], [100.0, 0.0] ]
         ]
     },
     "properties": {
       "prop0": "value0",
       "prop1": {"this": "that"}
       }
     }
  ]
}