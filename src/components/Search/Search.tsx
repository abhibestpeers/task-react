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
  const [from, setFrom] = useState<IPort>({ port: "" });
  const [to, setTo] = useState<IPort>({ port: "" });
  const navigate = useNavigate();

  console.log(allPorts);

  const getPortOptions = (port: IPort) => {
    const options: any[] = [];
    allPorts?.map((item: PortData) => {
      options.push({ port: item.name, id: item.id, code: item.code, images: item.images, country:item.country });
    });
    return options;
  };

  const handleSearch = (from, to) => {
    navigate('/searchPage', { state: { from, to } });
    // console.log(portOne, portTwo);
  }

  return (
    <div className="searchBox">
      <form className="form-field">
        <div className="form-group">
          <label>From</label>
          <Combobox
            className="form-control"
            data={getPortOptions(from)}
            dataKey={"value"}
            textField="port"
            placeholder={"Select Port Name"}
            // value={portOne}
            onChange={(value) => setFrom(value)}
          />
        </div>
        <div className="form-group">
          <label>To</label>
          <Combobox
            className="form-control"
            data={getPortOptions(to)}
            dataKey={"value"}
            textField="port"
            placeholder={"Select Port Name"}
            // value={portTwo}
            onChange={(value) => setTo(value)}
          />
        </div>
        <button type="submit" className="btn btn-success" onClick={()=>handleSearch(from, to)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default Search;
