import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.friendItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
