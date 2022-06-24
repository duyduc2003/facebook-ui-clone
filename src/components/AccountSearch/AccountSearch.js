import classnames from 'classnames/bind';
import { func } from 'prop-types';

import Button from '../Button';
import Image from '../Image';

import styles from './AccountSearch.module.scss';

const cx = classnames.bind(styles);

const AccountSearch = ({ onClick }) => {
  return (
    <Button
      to={'/user/' + Math.floor(Math.random() * 20)}
      onClick={onClick}
      hoverOverlay
      className={cx('wrapper')}
    >
      <div className={cx('inner')}>
        <Image
          className={cx('avatar-user')}
          src="https://video.fsgn1-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NRDNCEBYhbMAX8uk5lG&_nc_ht=video.fsgn1-1.fna&oh=00_AT8nWmEhbW--GbUo7bIKAlcBKHpgcbLHz6Nj3KW4oIyxkg&oe=62B9D106"
          alt="dangduyduc"
        />
        <h5 className={cx('username')}>Đặng Duy Đức</h5>
      </div>
    </Button>
  );
};

AccountSearch.propTypes = {
  onClick: func,
};

export default AccountSearch;
