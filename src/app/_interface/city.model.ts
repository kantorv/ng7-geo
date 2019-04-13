
export interface City{
    pk:string;
    name: string;
    osm_id?: number;
}

export interface CityGeojson{
    type: string;
    properties:City;
    geometry?: Object;
}
