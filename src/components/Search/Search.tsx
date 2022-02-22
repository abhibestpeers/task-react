import * as React from "react";
import { FormEvent, FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Combobox from "react-widgets/Combobox";
import { useNavigate } from "react-router-dom";
import { PortData } from "../../redux/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

interface IPort {
  port: string;
}

const Search: FC<PortData> = () => {
  const allPorts = useSelector((state: RootState) => state.ports.data);
  const [portOne, setPortOne] = useState<IPort>({ port: "" });
  const [portTwo, setPortTwo] = useState<IPort>({ port: "" });
  const navigate = useNavigate();

  const getPortOptions = (port: IPort) => {
    const options: any[] = [];
    allPorts?.map((item: any) => {
      options.push({ port: item.name, id: item.id });
    });
    return options;
  };

  const handleSearch = (portOne, portTwo) => {
    navigate('/searchPage', { state: { portOne, portTwo } });
    console.log(portOne, portTwo);
  }

  return (
    <div className="searchBox">
      <form className="form-field">
        <div className="form-group">
          <label>From</label>
          <Combobox
            className="form-control"
            data={getPortOptions(portOne)}
            dataKey={"value"}
            textField="port"
            placeholder={"Select Port Name"}
            // value={portOne}
            onChange={(value) => setPortOne(value)}
          />
        </div>
        <div className="form-group">
          <label>To</label>
          <Combobox
            className="form-control"
            data={getPortOptions(portTwo)}
            dataKey={"value"}
            textField="port"
            placeholder={"Select Port Name"}
            // value={portTwo}
            onChange={(value) => setPortTwo(value)}
          />
        </div>
        <button type="submit" className="btn btn-success" onClick={()=>handleSearch(portOne, portTwo)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default Search;
