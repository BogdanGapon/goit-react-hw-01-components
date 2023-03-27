import css from './TransactionItem.module.css';
import PropTypes from 'prop-types';
export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.moneyLine}>{type}</td>
      <td className={css.moneyLine}>{amount}</td>
      <td className={css.moneyLine}>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
