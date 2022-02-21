import * as  React from 'react';
import { FormEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux'

import { setAlert } from '../../redux/actions/alertAction'
import { setLoading, getAllAirports } from '../../redux/actions/airportActions'

import "./Search.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({title}) => {
  
  const dispatch = useDispatch();
  const [port, setPort] = useState("");


  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
      setPort(e.currentTarget.value)
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(port.trim() === ''){
      return dispatch(setAlert("Port name is required"))
    }

    dispatch(setLoading());
    dispatch(getAllAirports());
    setPort("");
  }


  return (
    <div className="searchBox">
      <form className="form-field" onSubmit={submitHandler}>
      <div className="form-group">
        <label>From</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Populer airport nearby</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label>From</label>
        <select className="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </form>
    </div>
  )
}

export default Search