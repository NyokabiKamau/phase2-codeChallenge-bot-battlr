import React from "react";

function BotItem({avatar_url, name, health, damage, armour, catchphrase}) {
    return (
        <div className="col-4 p-1">
            <div className="card h-100">
                <div className="card-body">
                    {avatar_url}
                    <h3>{name}</h3>
                        {health}
                        {damage}
                        {armour}
                        <p>{catchphrase}</p>
                </div>
            </div>
        </div>
    )
}

export default BotItem