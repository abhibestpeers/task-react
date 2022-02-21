import * as React from 'react';
import { Airport } from '../../Airport/Airport';
// import * as img from '../../../assets/airplane.png'

import  './SearchPage.scss';

export const SearchPage = () => (
    <div className='searchPage'>
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
            <div className="d-flex">
                <div className="left-text d-flex">
                  <h3>Waw</h3>
                  <div className="d-flex w-75">
                  <div className="boredr-doted"></div>
                  <div className="boredr-doted"></div>
                  <div className="boredr-doted"></div>
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
)