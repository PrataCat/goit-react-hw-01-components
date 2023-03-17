import PropTypes from 'prop-types';
import StatisticsCss from './Statistics.module.css';
import StatsTitle from './StatsTitle';
import StatsList from './StatsList';

export default function Statistics({ title, stats }) {
  return (
    <section className={StatisticsCss['statistics']}>
      <StatsTitle title={title} />
      <StatsList stats={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
