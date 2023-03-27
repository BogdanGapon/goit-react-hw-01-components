import css from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem';
import PropTypes from 'prop-types';
export const TransactionHistory = ({ transactions }) => {
  console.log(transactions);
  return (
    <table className={css.transactionTable}>
      <thead className={css.headLine}>
        <tr className={css.LineWrapper}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <tr key={id} className={css.LineWrapper}>
              <TransactionItem
                type={type}
                amount={amount}
                currency={currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
