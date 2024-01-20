export interface apiResponse{
    count: string,
    next: string,
    previous: string,
    results: characterInfo[]
}

export interface characterInfo {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    eye_color: string,
    skin_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    film: string[],
    species:  string[],
    vehicles:  string[],
    starships:  string[],
    url: string,
}