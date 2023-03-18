import PropTypes from 'prop-types';
import FriendsCss from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={FriendsCss['item']}>
      <span
        className={`${FriendsCss['status']} ${FriendsCss[isOnline]}`}
      ></span>
      <img
        className={FriendsCss['avatar']}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={FriendsCss['name']}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
