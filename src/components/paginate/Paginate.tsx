import React, { SFC } from "react";

interface IProps {
  count: number;
  current_page: number;
  next_page: number;
  previous_page: number;
  onClick: (page: number) => void;
}
const Paginate: SFC<IProps> = ({
  count,
  current_page,
  next_page,
  previous_page,
  onClick
}) => {
  const number_of_page: number[] = Array(Math.ceil(count / 23));
  // added "downlevelIteration": true to original create-react-app tsconfig.json to allow [...number_of_page.keys()]
  const iterator = [...number_of_page.keys()].map((key: number) => key + 1);

  const handleClick = (page: number) => {
    onClick(page);
  };
  return (
    <ul>
      {iterator.map((page: number) => (
        <li key={page} onClick={() => handleClick(page)}>
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
