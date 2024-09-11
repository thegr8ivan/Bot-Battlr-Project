import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, onRemoveBot }) {
  return (
    <div className="ui segment">
      <h2>Your Bot Army</h2>
      <div className="ui three column grid">
        <div className="row">
          {botArmy.length === 0 ? (
            <div>No bots in your army yet!</div>
          ) : (
            botArmy.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                onRemove={() => onRemoveBot(bot.id)}
                isInArmy={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
