import styled from '@emotion/styled';
export const StatisticsSection = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  border: 1px solid rgb(222, 219, 219);
  border-radius: 15px;
  width: 350px;
  height: auto;
  padding: 40px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Statlist = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Item = styled.li`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: calc(350px / 5);
  &:last-child {
    border-right: none;
  }
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Label = styled.span``;
