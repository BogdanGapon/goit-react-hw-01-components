import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={css.status}></span>
      ) : (
        <span className={css.isOnline}></span>
      )}

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
