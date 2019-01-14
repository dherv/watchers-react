export interface IHistory {
  push: (url: string) => void;
}

export interface IData {
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
