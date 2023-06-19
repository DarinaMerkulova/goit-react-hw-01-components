import PropTypes from 'prop-types'
import css from "./Statistics.module.css"
import {getRandomColor} from "./getRandomColor"
export const Statistics = ({stats, title}) => {
    return (<section className ={css.statistics}>
  <h2 className={css.title}>{title}</h2>
  <ul className={css.statlist}>
{stats.map( stat => (
       <li key={stat.id}
       style={{ backgroundColor: getRandomColor() }} 
        className={css.item}>
      <span className="label">{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>))}
    </ul>

  
</section>)
}

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

