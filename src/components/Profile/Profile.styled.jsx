import styled from '@emotion/styled';

export const ProfileSection = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(222, 219, 219);
  border-radius: 15px;
  width: 350px;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;
export const Avatar = styled.img`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 50%;
  background-color: rgb(38, 39, 53)
`;
export const Tag = styled.p`
  font-weight: 600;
  color: rgb(72, 72, 72);
  margin-bottom: 20px;
`;

export const Location = styled.p`
  font-weight: 600;
  color: rgb(72, 72, 72);
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: block;
  width: 350px;
  display: flex;
  border: 1px solid black;
  background-color: rgb(38, 39, 53);
  color: rgb(255, 255, 255);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.2);
`;

export const Item = styled.li`
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: calc(350px / 3);
  border-right: 1px solid rgb(191, 191, 191);
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
