import React from 'react';

const video = (props) => {
        console.log(props.elem);
        return (
            <div className="Video" onClick={props.selectHandler.bind(this,props.elem.id.videoId)}>
                <img className="Image2" src={props.elem.snippet.thumbnails.default.url} alt="Miniatura"/>
                    <div className = "Column">
                        <div className = "Title"> {props.elem.snippet.title}</div>
                        {props.elem.snippet.description}
                    </div>
                    
                     
               
               
           </div> 
       );
        
};

export default video;
