import PropTypes from 'prop-types';
import css from './Profile.module.css';
export const Profile = ({
  imgUrl,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={imgUrl}
          alt="User avatar"
          className={css.avatar}
          width="100"
          height="100"
        />
        <p className={css.name}>{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
