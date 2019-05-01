import React, { PureComponent } from "react";

interface IProps {
  children: number;
}
export default class IconMovie extends PureComponent<IProps> {
  render() {
    const rating = this.props.children * 10;
    const limits = [70, 60, 50, 0];

    const range = (current = 0): number => {
      if (rating >= limits[current]) {
        return limits[current];
      }
      return range(current + 1);
    };

    let fill = () => {
      const result = range();
      switch (result) {
        case 70:
          return "#2a9d90";
        case 60:
          return "#4bafd7";
        case 50:
          return "#cd3e50";
        default:
          return "#BDBDBD";
      }
    };

    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle cx="12" cy="12" r="12" fill={fill()} />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            style={{
              fontFamily: "Abel, sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              fill: "#EEEEEE"
            }}
            alignmentBaseline="central"
          >
            {rating}
          </text>
        </g>
      </svg>
    );
  }
}
