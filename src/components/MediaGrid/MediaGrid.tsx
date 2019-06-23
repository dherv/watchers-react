import React, { Component } from "react";
import MediaGridItem from "./MediaGridItem/MediaGridItem";
import { IHistory, ILocation, IMovie } from "../../types/interfaces";

import styles from "./MediaGrid.module.css";

interface IProps {
  history: IHistory;
  location: ILocation;
  movies: IMovie[];
}

export default class MediaGrid extends Component<IProps> {
  render() {
    return (
      <section className={styles.page}>
        <ul className={styles.container}>
          {this.props.movies.map((item, index) => (
            <MediaGridItem
              key={item.id}
              item={item}
              index={index}
              size="500"
              history={this.props.history}
              location={this.props.location}
            />
          ))}
        </ul>
      </section>
    );
  }
}
