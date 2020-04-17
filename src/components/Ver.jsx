import React from 'react';

const ver = (props) => {
        
        return (
           <div className="Ver">
               <div dangerouslySetInnerHTML={ {__html:  props.videoSelect ? props.videoSelect : ""}}/>
           </div> 
       );
        
};

export default ver;