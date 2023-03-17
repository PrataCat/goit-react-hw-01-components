import PropTypes from 'prop-types';
import StatisticsCss from './Statistics.module.css';

export default function StatsEl({ id, label, percentage }) {
  return (
    <li key={id} className={StatisticsCss['item']}>
      <span className={StatisticsCss['label']}>{label}</span>
      <span className={StatisticsCss['percentage']}>{percentage}%</span>
    </li>
  );
}

StatsEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
