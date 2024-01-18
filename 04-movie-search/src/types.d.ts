export interface movieType{
    Title:string,
    Year:string,
    imdbID:string,
    Type:string,
    Poster:string,
}

interface FilterOptions{
   type: string,
   sort: string,
  }