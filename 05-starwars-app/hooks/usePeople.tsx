export function usePeople() {
  const API_URL = "https://swapi.dev/api/people/";
  const API_URL_Query = "https://swapi.dev/api/people/?search=";

  const getCharacters = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };

  const getCharacterDetails = async (id: number) => {
    try {
      const response = await fetch(API_URL + id);
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };
  const getCharacterByName = async (query: string) => {
    try {
      const response = await fetch(API_URL_Query + query);
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };

  const getNextPage = async (pageUrl: string | undefined) => {
    if (pageUrl == undefined) return;
    try {
      const response = await fetch(pageUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };
  return { getCharacters, getCharacterDetails, getNextPage,getCharacterByName };
}
