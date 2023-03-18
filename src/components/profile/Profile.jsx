import PropTypes from 'prop-types';
import ProfileCss from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={ProfileCss['profile']}>
      <div className={ProfileCss['description']}>
        <img src={avatar} alt="User avatar" className={ProfileCss['avatar']} />
        <p className={ProfileCss['name']}>{username}</p>
        <p className={ProfileCss['tag']}>@{tag}</p>
        <p className={ProfileCss['location']}>{location}</p>
      </div>

      <ul className={ProfileCss['stats']}>
        <li>
          <span className={ProfileCss['label']}>Followers</span>
          <span className={ProfileCss['quantity']}>{followers}</span>
        </li>
        <li>
          <span className={ProfileCss['label']}>Views</span>
          <span className={ProfileCss['quantity']}>{views}</span>
        </li>
        <li>
          <span className={ProfileCss['label']}>Likes</span>
          <span className={ProfileCss['quantity']}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
