import React, { useEffect, useState } from "react";
import BotItem from "./BotItem";

const BOT_API = "https://api.npoint.io/520c33cd3b0eac4de1c2"
// const API = "http://localhost:3000/bots"


function BotCollection() {
   
    // sets the Robot's data collection
    const [robot, setRobot] = useState([])

    //sets the robot army
    const [selected, setSelected] = useState([])


    // callback to add individual robots if they have not been selected otherwise it does nnot appear
    const callback = payload => {
        console.log(payload)
        if(!selected.includes(payload.bots[0])){
            setSelected(current =>[...current,payload.bots[0]])
        } else if(payload.position == "down") {
            let newArray = selected.filter((item) => (item.id != payload.bots[0].id))
            setSelected(newArray)
        }
    
    }


    useEffect(() => {
        fetch(BOT_API)
        .then(response => response.json())
        .then(data => {
            setRobot(data.bots)
        })
    }, [])

    // give a position value of up and down to be used for the bot can be enlisted only **once**.
    const robotElems = robot.map((value) => <BotItem name={value.name} health={value.health} damage={value.damage} armor={value.armor} catchphrase={value.catchphrase} bot_class={value.bot_class} avatar_url={value.avatar_url} created_at={value.created_at} updated_at={value.updated_at} item={value} callback={callback} position="up"/> )

  

    return (
        <>
        <div className="row mt-4" style={{minHeight:"400px",background:"green"}}>
            {
                (selected != undefined)? 
                selected.map(value => 
                    <BotItem name={value.name} health={value.health} damage={value.damage} armor={value.armor} catchphrase={value.catchphrase} bot_class={value.bot_class} avatar_url={value.avatar_url} created_at={value.created_at} updated_at={value.updated_at} item={value} callback={callback} position="down"/>
                )
                : <></>
            }

        </div>
         <div className="row mt-4">
              {robotElems}
        </div>
        </>
           
    )
}

export default BotCollection