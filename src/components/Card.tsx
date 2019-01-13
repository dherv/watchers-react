import styled from "styled-components";

const Card: any = styled("div")<{ size: string }>`
  display: flex;
  flex-direction: column;
  max-width: ${props => `${props.size}px`};
`;

Card.Picture = styled("img")<{ size?: string }>`
  display: block;
  max-width: 100%;
  height: auto;
`;

Card.Text = styled.div`
  padding: 2rem;
  background-color: #181717;
`;

Card.Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

Card.Title = styled.h3`
  font-weigth: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

Card.Icon = styled.div`
  position: absolute;
  top: -52px;
  right: 1rem;
`;
export default Card;
