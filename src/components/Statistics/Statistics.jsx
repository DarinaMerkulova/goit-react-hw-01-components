import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  Statlist,
  Item,
  Percentage,
  Label,
} from './Statistics.styled';
import { getRandomColor } from './getRandomColor';
export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <Statlist>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </Statlist>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
