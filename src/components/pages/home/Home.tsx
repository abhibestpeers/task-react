import * as React from "react";
import { useEffect, useState } from "react";

//file-imports
import apiClient from "../../../config/axios.config";
import { Airport } from "../../Airport/Airport";
import * as styles from "./Home.scss";

interface AirportItemType {
  id: number;
  name: string;
  code: string;
  country: string;
  images: {
    small: string;
    big: string;
    full: string;
  };
  averageRating: number;
}

export const Home = () => {

  const [allPorts, setAllPorts] = useState<AirportItemType[]>([]);
  const getAll = async () => {
    return await apiClient
      .get()
      .then((response) => {
        console.log("on reg", response);
        setAllPorts(response.data);
        console.log(allPorts);
      })
      .catch((err) => {
        console.error("errors", err);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  
  return (
    <div className={styles.airportsList}>
      {allPorts.length === 0 ? "Loading" : (
        allPorts.map((port) =>(
          <Airport key={port.id} imageSrc={port.images.small} name={port.name} /> ))
      )}
    </div>
  );
};
