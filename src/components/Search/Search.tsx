import * as React from "react";
import { FormEvent, FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Combobox from "react-widgets/Combobox";
import { PortData } from "../../redux/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

interface IPort {
  ports: string;
}

const Search: FC<PortData> = () => {
  const allPorts = useSelector((state: RootState) => state.ports.data);
  const [ports, setPorts] = useState<IPort>({ ports: "" });

  // const filterPortOption = (ports: IPort) => {
  //   const portOptions: any[] = [];
  //   allPorts?.filter((item, i) => {
  //     if (item.name.includes(ports)) {
  //       portOptions.push({ port: item.name, value: i });
  //     }
  //   });
  //   console.log(portOptions);
  //   return portOptions;
  // };

  console.log(ports);
  const getPortOptions = (ports: IPort) => {
    // setPorts(e.currentTarget.value)
    const options: any[] = [];
    allPorts?.map((item: any, i: number) => {
      options.push({ port: item.name, value: i });
    });
    return options;
  };
  
  

  return (
    <div className="searchBox">
      <form className="form-field">
        <div className="form-group">
          <label>From</label>
          <Combobox
            className="form-control"
            data={getPortOptions(ports)}
            // dataKey={"value"}
            textField="port"
            placeholder={"Select Port Name"}
            // value={ports}
            onChange={(value) => setPorts(value)}
          />
        </div>
        <div className="form-group">
          <label>To</label>
          {/* <select className="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select> */}
          <Combobox
            className="form-control"
            data={getPortOptions(ports)}
            dataKey={"value"}
            textField="port"
            placeholder={"Select Port Name"}
            // value={ports}
            onChange={(value) => setPorts(value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default Search;
