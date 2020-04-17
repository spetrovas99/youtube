import React,{useState} from 'react';
import './App.css';
import axios from "axios";
import Header from './components/Header';
import Body from "./components/Body";
import Ver from "./components/Ver";

function App() {
const [listaBusqueda, setListaBusqueda] = useState(undefined);
const [videoSelect, setVideoSelect] = useState(undefined);
const [videoRelated, setVideoRelated] = useState(undefined);

const url =" https://www.googleapis.com/youtube/v3/";
const key ="AIzaSyAyRLOHsU4jUyLJtJqhG-IlC36FowDhkdw";


  const searchBarHandler = ()=>{
    const input = document.getElementById("searchbar").value;
     if(input){
         axios.get(url + "search?key=" + key + "&q=" + input + "&part=snippet&type=video").then(response =>{
           setListaBusqueda(response.data.items) 
           setVideoSelect(undefined);
           console.log(response.data.items);
         });
       }
   }
   const selectHandler =(videoId)=>{
    axios.get(url + "videos?key=" + key + "&part=player" + "&id=" + videoId ).then(response=>{
      setVideoSelect(response.data.items[0].player.embedHtml);
    }) 
    axios.get(url + "search?key=" + key + "&part=snippet&type=video" + "&relatedToVideoId=" + videoId ).then(response=>{
      setVideoRelated(response.data.items);
    }) 
  }
  if(videoSelect){
    return (
      <div className="App">
        <Header searchBarHandler={searchBarHandler} ></Header>
        <Ver videoSelect= {videoSelect}></Ver>
        <Body listaBusqueda = {videoRelated} selectHandler={selectHandler}></Body>
      </div>
    );
  }else{
    return (
      <div className="App"> 
        <Header searchBarHandler={searchBarHandler} ></Header>
        <Body listaBusqueda = {listaBusqueda} selectHandler={selectHandler}></Body>
  
      </div>   
    );
  }
  
 
}

export default App;
