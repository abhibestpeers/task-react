import * as React from "react";
import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

//file-imports
import { Loader } from '../../Loader/Loader'
import { RootState } from "../../../redux/store";
import { setAlert } from '../../../redux/actions/alertAction'
import { setLoading, getAllAirports } from '../../../redux/actions/airportActions'
import { PortData } from "../../../redux/types/types";
import { Airport } from "../../Airport/Airport";
import  "./Home.scss";
// interface HomeProps {
//   id: number;
//   name: string;
//   code: string;
//   country: string;
//   images: {
//     small: string;
//     big: string;
//     full: string;
//   };
//   averageRating: number;
// }

export const Home: FC<PortData[]> = () => {  

  const dispatch = useDispatch();
  const portData = useSelector((state: RootState) => state.ports.data );
  const loading =   useSelector((state: RootState) => state.ports.loading );
  const error =   useSelector((state: RootState) => state.ports.error );
  const alert = useSelector((state: RootState) => state.alert.message );

  const [allPorts, setAllPorts] = useState<PortData[] | null>([]);
  console.log(portData);

  useEffect(() => {
     dispatch(setLoading());
    dispatch(getAllAirports()); 
    setAllPorts(portData);
  }, []);
 




  return (
    <div className="airportsList">
      {error ? <p>{error}</p> : "" }
      {loading ? <Loader/> : (
        allPorts?.map((port) =>(
          <Airport key={port.id} imageSrc={port.images.small} name={port.name} averageRating={port.averageRating} /> ))
      )}
    </div>
  );
};
