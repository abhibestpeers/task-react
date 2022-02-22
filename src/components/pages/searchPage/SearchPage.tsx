import * as React from 'react';
import {FC} from 'react'
import {useLocation} from 'react-router-dom'
import apiClient from '../../../config/axios.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import  './SearchPage.scss';

export const SearchPage: FC = () => {

  const {state} = useLocation();
  console.log(state);

  const getAll = async () => {
    return await apiClient.get('/connections')
      .then((response) => {
        console.log("on reg", response);
        const d = response.data.split('\n')
        debugger
        const obj = {}
        d.map((item) => {
          let splitedItem = item.split(":")
          obj[splitedItem[0]] = splitedItem[1].replaceAll(" ", '').split(',')
        })
        funt("1960","1452", obj)
        console.log("rfrfr", obj);
      })
      .catch((err) => {
        console.error("errors", err);
      });
  };

  const funt = (from, to, obj) => {
    if (obj[from].includes(to)) {
      return console.log("direct-connection")
    } else {
      return console.log("indirect-connection")
    }
  }



  return(
    <div className='searchPage'>
      <a href="#" className='backBtn'><span><FontAwesomeIcon icon={faLeftLong}/></span> Back</a>
        <div className="airportPlace">
          <div>
            <h2>Warsaw</h2>
            <p>Warsaw chopin airport</p>
          </div>
          <div></div>
          <div>
            <h2>Warsaw</h2>
            <p>Warsaw chopin airport</p>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body d-flex">
                <div className="left-text d-flex">
                  <h3>Waw</h3>
                  <div className="d-flex w-75 boredr-doted">
                  <div>
                    <span className="circle"></span>
                  </div>
                  <div>
                    <span className="circle"></span>
                    <small>AWS</small>
                  </div>
                  <div>
                    <span className="circle"></span>
                  </div>
                  </div>
                  <h3>DXb</h3>
                </div>
                <div className="right-text">
                  <p>1 change aaa</p>
                  <button type="submit" className="btn btn-success">Go!</button>
                </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body d-flex">
                <div className="left-text">
                  <h3>Waw</h3>
                  <div className="d-flex w-75 boredr-doted">
                  <div>
                    <span className="circle"></span>
                  </div>
                  <div>
                    <span className="circle"></span>
                    <small>AWS</small>
                  </div>
                  <div>
                    <span className="circle"></span>
                    <small>AWS</small>
                  </div>
                  <div>
                    <span className="circle"></span>
                  </div>
                  </div>
                  <h3>DXb</h3>
                </div>
                <div className="right-text">
                  <p>1 change aaa</p>
                  <button type="submit" className="btn btn-success">Go!</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )}