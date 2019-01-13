import React, { PureComponent } from "react";

export default class IconPlus extends PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="transparent"
      >
        <path d="M0 0h24v24H0z" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
          fill="#4DB6AC"
        />
      </svg>
    );
  }
}
