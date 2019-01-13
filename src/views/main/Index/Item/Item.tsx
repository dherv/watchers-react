import React, { PureComponent } from "react";
import { IHistory, IData, ILocation } from "../../../../types/interfaces";
import Card from "../../../../components/Card";
import Avatar from "../../../../components/Avatar";
import DateString from "../../../../components/DateString";
import Rating from "../../../../components/Rating";

// ---------------

interface IProps {
  history: IHistory;
  location: ILocation;
  item: IData;
  index: number;
  size: string;
}

// ---------------
export default class IndexItem extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const path = this.props.location.pathname;
    const id = this.props.item.id;
    this.props.history.push(`${path}/${id}`);
  }
  render() {
    const { item, size } = this.props;
    const image = item.image_path
      ? item.image_path.replace("@size", `original`)
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
