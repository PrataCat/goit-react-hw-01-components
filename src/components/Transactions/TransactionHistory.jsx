import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import TransactionCss from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={TransactionCss['transaction-history']}>
      <thead className={TransactionCss['thead']}>
        <tr className={TransactionCss['tr']}>
          <th className={TransactionCss['table-title']}>Type</th>
          <th className={TransactionCss['table-title']}>Amount</th>
          <th className={TransactionCss['table-title']}>Currency</th>
        </tr>
      </thead>

      <tbody className={TransactionCss['tbody']}>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
