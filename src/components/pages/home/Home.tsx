import * as React from "react";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//file-imports
import { Loader } from "../../Loader/Loader";
import { RootState } from "../../../redux/store";
import {  setLoading,  getAllAirports } from "../../../redux/actions/airportActions";
import { PortData } from "../../../redux/types/types";
import { Airport } from "../../Airport/Airport";
import "./Home.scss";
import Search from "../../Search/Search";

export const Home: FC<PortData[]> = () => {
  const dispatch = useDispatch();
  const portData = useSelector((state: RootState) => state.ports.data);
  const loading = useSelector((state: RootState) => state.ports.loading);
  const error = useSelector((state: RootState) => state.ports.error);

  console.log(portData);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getAllAirports());
  }, []);

  return (
    <>
      <Search />
      <div className="airportsList">
        {error ? <p>{error}</p> : ""}
        {loading ? (
          <Loader />
        ) : (
          portData?.map((port) => (
            <Airport
              key={port.id}
              imageSrc={port.images.small}
              name={port.name}
              averageRating={port.averageRating}
              country ={port.country}
            />
          ))
        )}
      </div>
    </>
  );
};
