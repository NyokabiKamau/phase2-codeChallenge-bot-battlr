import React from "react";

function BotItem({avatar_url, name, health, damage, armour, bot_class, catchphrase}) {
    return (
        <div className="col-3 p-1">
            <div className="card h-100">
            <img className="card-img-top" style={{background: 'lightgrey'}} src={avatar_url}></img>
                <div className="card-body">
                    <h3 className="card-title">{name}
                        <img src={bot_class} />
                    </h3>
                    <p className="card-text">{catchphrase}</p>
                </div>

                <div className="card-footer ">
                    {health}
                    {damage}
                    {armour}
                </div>
            </div>
        </div>
    )
}

export default BotItem