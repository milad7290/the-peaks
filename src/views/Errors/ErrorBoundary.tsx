import React, { PureComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends PureComponent<Props, State> {
  public state: State = {
    hasError: false,
  };

  componentDidCatch = (error: any, info: any) => {
    console.error("here our error", error, info);

    this.setState({
      hasError: true,
    });
  };

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <p
          style={{
            color: "gray",
            textAlign: "center",
            lineHeight: 1.7,
            padding: "20px",
          }}
        >
          There is something wrong with this part of{" "}
          <span style={{ color: "#000", fontWeight: "bold" }}>The Peaks</span>,
          it will be handle ASAP
        </p>
      );
    }

    return this.props.children;
  }
}
