export interface IHistory {
  push: (url: string) => void;
}

export interface IData {
  data: IMovie[];
  count: number;
  current_page: number;
  next_page: number;
  previous_page: number;
}
export interface IMovie {
  id: string;
  title: string;
  backdrop_path: string;
  rating: number;
  release_date: string;
}

export interface IMatch {
  path: string;
  params: {
    id: string;
  };
}
export interface ILocation {
  pathname: string;
}

export interface ISort {
  text: string;
  value: string;
}
export interface INavLink {
  text: string;
  value: string;
}
