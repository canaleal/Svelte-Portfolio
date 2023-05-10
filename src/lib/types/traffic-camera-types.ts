import type { IGeojsonGeometryType } from "$lib/types/geojson-types";

export interface ICamera {
    id?: number;
    created_at?: string | null;
    updated_at?: string | null;
    gps_type?: IGeojsonGeometryType;
    gps_coordinates?: number[];
}
export interface ITrafficCamera extends ICamera {
  image_url?: string;
  image_url_north?: string | null;
  image_url_east?: string | null;
  image_url_south?: string | null;
  image_url_west?: string | null;
  main_road?: string;
  cross_road?: string;
}

