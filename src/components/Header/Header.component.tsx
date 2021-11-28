import React, { memo } from "react";

import "./Header.style.scss";


export const Header: React.FC = memo(() => {
  return (
    <div className="Header">这是游戏标题，各种场景下保持不变，作为菜单控制</div>
  )
})