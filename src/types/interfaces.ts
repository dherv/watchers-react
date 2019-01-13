export interface IHistory {
  push: (url: string) => void;
}

export interface IMovie {
  id: string;
  title: string;
  image_path: string;
  rating: number;
  release_date: string;
}

export interface IMatch {
  path: string;
  params: {
    id: string;
  };
}
