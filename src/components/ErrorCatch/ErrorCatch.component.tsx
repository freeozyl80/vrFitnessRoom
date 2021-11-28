import React, { ReactNode } from "react";

interface Props {
  (props: { error: Error | null }): ReactNode;
}

// class PureComponent<Props = {}, State = {}, SS = any> extends Component<P, S, SS> { }

export class ErrorCatch extends React.PureComponent<
  React.PropsWithChildren<{ fallbackRender: Props }>,
  { error: Error | null }
> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error | null) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log("error", error);
    return { error: error };
  }

  render() {
    const { error } = this.state;
    const { children, fallbackRender } = this.props;

    return error ? fallbackRender({ error }) : children;
  }
}
