import React, { PureComponent } from "react";
import { IHistory, IData, ILocation, IMovie } from "../../../types/interfaces";
import Card from "../../Card";
import Avatar from "../../Avatar";
import DateString from "../../DateString";
import Rating from "../../Rating";
import styles from "../MediaGrid.module.css";

// ---------------

interface IProps {
  history: IHistory;
  location: ILocation;
  item: IMovie;
  index: number;
  size: string;
}

// ---------------
export default class MediaGridItem extends PureComponent<IProps> {
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
    const image = item.backdrop_path
      ? item.backdrop_path.replace("@size", `original`)
      : null;

    return (
      <Card
        size={size}
        onClick={this.handleClick}
        className={
          this.props.index < 3
            ? styles.top
            : this.props.index === 3
            ? `${styles.top} ${styles.regular}`
            : styles.regular
        }
      >
        {image ? (
          //           <picture alt="Description of image">

          //   <source src={item.backdrop_path.replace("@size", `original`)}>

          //   <source src={item.backdrop_path.replace("@size", `large`} media="(min-width: 400px)">

          //   <img src={item.backdrop_path.replace("@size", `original`)} alt="description of image">
          // </picture>
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
