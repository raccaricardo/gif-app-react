import React from "react";
import "animate.css";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';
const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs(category, 5);
 

  

  return (
    <>
      <h3> {category} </h3>
        { loading && <h2 className="animate__shakeY">Cargando... </h2>}
      <div className="card-grid animate__backInDown" >
        {data.map((img) => (
          <GifGridItem 
          className="animate__fadeInTopLeft" 
          key={img.id} 
          {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
