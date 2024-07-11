import { useEffect, useState } from "react";
import axios from "axios";
import "./item.css" 
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Item=({name,url})=>{
    const [itemData, setItemData] = useState({
        name,
        imageUrl: "",
        ability:"",
        height:0,
        weight:0,
        type:"",
        hp:0,
        attack:0,
        speed:0,
        defense:0,
        specialAttack:0,
        specialDefense:0
      });

      useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(url);
          setItemData((prev) => ({
            ...prev,
            imageUrl: response.data.sprites.front_default,
            ability:response.data.abilities[0].ability.name,
            height:response.data.height,
            weight:response.data.weight,
            type:response.data.types[0].type.name,
            hp:response.data.stats[0].base_stat,
            attack:response.data.stats[1].base_stat,
            speed:response.data.stats[5].base_stat,
            defense:response.data.stats[2].base_stat,
            specialAttack:response.data.stats[3].base_stat,
            specialDefense:response.data.stats[4].base_stat

          }));
        };
    
        fetchData();
      }, [url]);

      return(
        <div className="pokemon">
            <div className="header">{name}</div>
            <div className="subcontainer">
            <img className="image" src={itemData.imageUrl}/>
            <div className="info">
            
            <div className="ability-key">Ability:</div><span className="ability-value">{itemData.ability}</span>
            <div className="ability-key">Height:</div><span className="ability-value">{itemData.height/10} m</span>
            <div className="ability-key">Weight:</div><span className="ability-value">{itemData.weight/10} kg</span>
            <div className="ability-key">Type:</div><span className="ability-value">{itemData.type}</span>
            </div>
            </div>
            <div className="stat">
              <div className="stat-header">Stat</div>
              <div className="stat-bar">
              <div style={{ width: 70, height: 70}}>
              <CircularProgressbar styles ={buildStyles({
                pathColor:"green",
                textColor:"green",
                textSize:"12px"
              })} value={itemData.hp} text={`${itemData.hp} hp`} />
                </div>
                <div style={{ width: 70, height: 70}}>
              <CircularProgressbar styles ={buildStyles({
                pathColor:"goldenrod",
                textColor:"goldenrod",
                textSize:"12px"
              })} value={itemData.speed} text={`${itemData.speed} Speed`} />
                </div>
                <div style={{ width: 70, height: 70}}>
              <CircularProgressbar styles ={buildStyles({
                pathColor:"orangered",
                textColor:"orangered",
                textSize:"12px"
              })} value={itemData.attack} text={`${itemData.attack} Attack`} />
                </div>
                <div style={{ width: 70, height: 70}}>
              <CircularProgressbar styles ={buildStyles({
                pathColor:"darkblue",
                textColor:"darkblue",
                textSize:"12px"
              })} value={itemData.defense} text={`${itemData.defense} Defense`} />
                </div>
                <div style={{ width: 70, height: 70}}>
              <CircularProgressbar styles ={buildStyles({
                pathColor:"mediumorchid",
                textColor:"mediumorchid",
                textSize:"12px"
              })} value={itemData.specialAttack} text={`${itemData.specialAttack} S.Attack`} />
                </div>
                <div style={{ width: 70, height: 70}}>
              <CircularProgressbar styles ={buildStyles({
                pathColor:"dodgerblue",
                textColor:"dodgerblue",
                textSize:"12px"
              })} value={itemData.specialDefense} text={`${itemData.specialDefense} S.Defense`} />
                </div>
            </div>
            </div>
        </div>
      )
}

export default Item