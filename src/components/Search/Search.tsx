import * as React from 'react';
import "./Search.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className="searchBox">
      <form className="form-field">
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