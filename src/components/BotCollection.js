import React, { useState, useEffect } from "react";
import axios from "axios";
import BotCard from "./BotCard";

function BotCollection({ onAddToArmy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8002/bots")
      .then(response => {
        setBots(response.data);
      })
      .catch(error => {
        console.error("Error fetching bot collection data", error);
      });
  }, []);

  return (
    <div className="ui segment">
      <h2>Bot Collection</h2>
      <div className="ui four column grid">
        <div className="row">
          {bots.length === 0 ? (
            <div>No bots available!</div>
          ) : (
            bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                onAdd={() => onAddToArmy(bot)}
                isInArmy={false}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BotCollection;
