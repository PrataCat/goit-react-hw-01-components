import PropTypes from 'prop-types';
import StatisticsCss from './Statistics.module.css';
import getRandomColor from 'components/GetRandomColor';

export default function StatsEl({ id, label, percentage }) {
  return (
    <li
      key={id}
      className={StatisticsCss['item']}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className={StatisticsCss['label']}>{label}</span>
      <span className={StatisticsCss['percentage']}>{percentage}%</span>
    </li>
  );
}

StatsEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
