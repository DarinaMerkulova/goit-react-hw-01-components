import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  padding: 10px 25px;
  border: 1px solid rgb(222, 219, 219);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 8px rgb(38, 39, 53);
    background-color: rgb(38, 39, 53);
    color: rgb(255, 255, 255);
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: rgb(221, 78, 78);
  border-radius: 50%;
  background-color: ${props =>
    props.statusType ? 'green' : 'rgb(221, 78, 78)'};
`;

export const Avatar = styled.img``;
