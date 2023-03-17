import PropTypes from 'prop-types';
import StatisticsCss from './Statistics.module.css';
import StatsEl from './StatsEl';

export default function StatsList({ stats }) {
  return (
    <ul className={StatisticsCss['stat-list']}>
      {stats.map(({ id, label, percentage }) => (
        <StatsEl key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
}

StatsList.protoTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
