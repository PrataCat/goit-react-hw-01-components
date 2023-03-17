import PropTypes from 'prop-types';
import StatisticsCss from './Statistics.module.css';

export default function StatsTitle({ title }) {
  return title && <h2 className={StatisticsCss['title']}>{title}</h2>;
}

StatsTitle.propTypes = {
  title: PropTypes.string,
};
