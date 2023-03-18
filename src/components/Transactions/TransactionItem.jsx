import PropTypes from 'prop-types';
import TransactionCss from './TransactionHistory.module.css';

export default function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr
      key={id}
      className={`${TransactionCss['tr']} ${TransactionCss['tr-border']}`}
    >
      <td className={TransactionCss['item-text']}>{type}</td>
      <td className={TransactionCss['item-text']}>{amount}</td>
      <td className={TransactionCss['item-text']}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
