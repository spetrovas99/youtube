import React from 'react';
import Video from './Video'
const body = (props) => {
        console.log(props);
        if(props.listaBusqueda != undefined){
            return (
            <div className="Body" >
                {props.listaBusqueda.map(elem => {
                                return (
                                    <Video selectHandler={props.selectHandler}  elem = {elem}></Video>
                                );
                            })}
            </div>                
             );
        } else{
            return(
                <div className= "Body">
                        
                </div>
            );
        }
};

export default body;
