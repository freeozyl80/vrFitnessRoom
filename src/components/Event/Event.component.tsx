import React, { memo } from "react";

import "./Event.style.scss";


export const Event: React.FC = memo(() => {
  return (
    <div className="Event">这是游戏标题，各种场景下保持不变，作为菜单控制</div>
  )
})