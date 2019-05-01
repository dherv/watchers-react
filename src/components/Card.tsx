import styled from "styled-components";

const Card: any = styled("li")<{ size: string }>`
  box-shadow: var(--shadow);
`;

Card.Picture = styled("img")<{ size?: string }>`
  display: block;
  max-width: 100%;
  height: auto;
  object-fill: cover;
`;

Card.Text = styled.div`
  padding: 1.5rem 1rem;
  border-top: 2px solid #212121;
`;

Card.Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

Card.Title = styled.h3`
  font-weigth: 600;
  font-size: 1rem;
  max-width: 85%;
`;

Card.Icon = styled.div`
  position: absolute;
  top: -52px;
  right: 1rem;
`;
export default Card;
