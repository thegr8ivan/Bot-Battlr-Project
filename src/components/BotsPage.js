import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botArmy, setBotArmy] = useState([]);

  const addBotToArmy = (bot) => {
    setBotArmy([...botArmy, bot]);
  };

  const removeBotFromArmy = (id) => {
    setBotArmy(botArmy.filter(bot => bot.id !== id));
  };

  return (
    <div>
      <YourBotArmy botArmy={botArmy} onRemoveBot={removeBotFromArmy} />
      <BotCollection onAddToArmy={addBotToArmy} />
    </div>
  );
}

export default BotsPage;
