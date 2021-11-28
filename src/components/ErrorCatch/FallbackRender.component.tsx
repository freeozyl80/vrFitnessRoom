import React from "react";

interface Props {
  error: Error | null;
}

export const FallbackRender = ({ error }: Props) => {
  console.log("fallbacjRender", error);

  return (
    <div>
      <h1>页面有哪里发生错误了哦</h1>
      <h2>错误提示：</h2>
      <h2>{error && error.message}</h2>
    </div>
  );
};
