import { useState, useEffect } from "react";
import { getFetchGifs } from "../helpers/getFetchGifs";

export const useFetchGifs = (category, limit = 2) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getFetchGifs(category, limit).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 1000);
    });
  }, [category]); //aca establecemos que si category cambia, volvera a ejecutarse useEffect

  return state;
};
