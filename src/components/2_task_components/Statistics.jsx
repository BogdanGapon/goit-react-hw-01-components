import css from './Statistics.module.css';
import { getRandomHexColor } from 'components/utilities/randomHexColor';
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {(title !== undefined || title.length > 0 || title !== null) && (
        <h2 className={css.title}> {title}</h2>
      )}
      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              className={css.item}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span className="label">{stat.label} </span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
