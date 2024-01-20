import { useEffect, useState } from "react";
import { apiResponse,characterInfo } from "../src/";

export function usePeople() {
  const API_URL = "https://swapi.dev/api/people/";

  const getCharacters = async () => {
    try{
        const response = await fetch(API_URL)
        const data=await response.json();
        return data
    }catch(error){
        return []
    }
  };

  const getCharacterDetails= async (id:number)=>{
    try{
        const response=await fetch(API_URL+id)
        const data=await response.json()
        return data
    }catch(error){
            return []
    }
  }
  return {getCharacters,getCharacterDetails}
}
