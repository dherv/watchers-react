import React, { PureComponent } from "react";
import { IHistory, IMovie } from "../../../types/interfaces";
import IconPlus from "../../../icons/IconPlus";
import Card from "../../../components/Card";
import Avatar from "../../../components/Avatar";
import DateString from "../../../components/DateString";
import Rating from "../../../components/Rating";

// ---------------
interface IProps {
  history: IHistory;
  item: IMovie;
  index: number;
  size: string;
}
// ---------------
export default class MoviesItem extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.history.push(`/movie/${this.props.item.id}`);
  }
  render() {
    const { item, size } = this.props;
    const image = item.image_path
      ? item.image_path.replace("@size", `w${this.props.size}`)
      : null;

    return (
      <Card size={size} onClick={this.handleClick}>
        {image ? (
          <Card.Picture src={image} />
        ) : (
          <Avatar size={this.props.size} />
        )}
        <Card.Text>
          <Card.Header>
            <Card.Title>{item.title}</Card.Title>
            <Rating rating={item.rating} />
            {/* <Card.Icon>
              <IconPlus />
            </Card.Icon> */}
          </Card.Header>

          <DateString>{item.release_date}</DateString>
        </Card.Text>
      </Card>
    );
  }
}
// ---------------

// ---------------
