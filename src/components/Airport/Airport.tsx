import * as React from "react";

import "./Airport.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Rating from "../Rating/Rating";
// import { faStarSharp } from '@fortawesome/free-solid-svg-icons';


interface Props {
  imageSrc: string;
  name: string;
  averageRating: number;
}

export const Airport = ({ imageSrc, name, averageRating }: Props) => (
  <figure className="listContainer effect-lily">
            <img className="image" src={imageSrc} />
            <figcaption>
              <div>
                  <div className="description">
                      <div className="">  
                        <h4>{name}</h4>
                        <span>Sédar Senghor In.</span>
                      </div>
                    <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/> 
                     <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/> 
                      {/* <Rating averageRating={averageRating}/> */}
                    </div>
                  </div>
                <div className="hover-text">
                  <p>Direct connection</p>
                  <p>BCN | MAD | MAD</p>
                  <a className="btn-success">Start from</a> <a className="btn-success">Go to</a>
                </div>
              </div>
              
            </figcaption>     
          </figure>
  // <div className="listContainer">
  //   <div className="airport">
  //     <img className="image" src={imageSrc} />
  //     <div className="description">
  //       <div className="text-des">
  //         <div>
  //           <h4>{name}</h4>
  //           <span>Sédar Senghor In.</span>
  //           <div className="hover-text">
  //             <p>Direct connection</p>
  //             <p>BCN | MAD | MAD</p>
  //           </div>
  //         </div>
  //         <p>{averageRating}</p>
  //       </div>
  //     </div>

  //   </div>
  // </div>
);
  