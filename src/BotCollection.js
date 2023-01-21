import React, { useEffect, useState } from "react";
import BotItem from "./BotItem";

const BOT_API = "https://api.npoint.io/520c33cd3b0eac4de1c2"
// const API = "http://localhost:3000/bots"

function BotCollection() {
    
    const [robot, setRobot] = useState([])

    useEffect(() => {
        fetch(BOT_API)
        .then(response => response.json())
        .then(data => {
            setRobot(data.bots)
            console.log(data.bots)
        })
    }, [])

    const robotElems = robot.map((value) => <BotItem name={value.name} health={value.health} damage={value.damage} armour={value.armour} catchphrase={value.catchphrase} bot_class={value.bot_class} avatar_url={value.avatar_url} created_at={value.created_at} updated_at={value.updated_at} key={value.id} /> )

    return (
        <div className="container mt-4">
            <div className="row">
              {robotElems}
            </div>

        </div>
    )
}

export default BotCollection