import {  useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category)
  
  console.log({isLoading});

    


  return (
    <>
        <h3>{category}</h3>
        
        {
          isLoading && (<h2>Cargado...</h2>)
        }
        
        
        <div className="card-grid">
          {
            images.map(( {id, title, url}) => (
              <GifItem 
                key={id} 
                title ={title}
                url = {url}
                // { ...image }
              />
            ))
          }
          
        </div>
    </>
  )
}
