import React from 'react';

const header = (props) => {
        
        return (
           <div className="Header">
                <img className="Image" src= " https://brandemia.org/sites/default/files/logo_youtube.jpg" alt="Logo"/>
                <input className = "Bar" placeholder= "Search" type="Text" id="searchbar"></input>
                <button className = "Boton" onClick={props.searchBarHandler.bind(this)}>Search</button>
           </div> 
       );
        
};

export default header;