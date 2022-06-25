import classnames from 'classnames/bind';
import { memo } from 'react';
import images from '~/assets/Images';
import PropTypes from 'prop-types';

import Button from '../Button';
import Image from '../Image';

import styles from './AccountSearch.module.scss';

const cx = classnames.bind(styles);

const AccountSearch = ({
  onClick,
  imageSrc = images.placeholderUser,
  idUser,
  lastName = '',
  firstName = 'Người dùng facebook',
}) => {
  return (
    <Button to={'/user/' + idUser} onClick={onClick} hoverOverlay className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Image className={cx('avatar-user')} src={imageSrc} alt={idUser} />
        <h5 className={cx('username')}>{lastName + ' ' + firstName}</h5>
      </div>
    </Button>
  );
};

AccountSearch.propTypes = {
  onClick: PropTypes.func,
  imageSrc: PropTypes.string,
  idUser: PropTypes.string,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
};

export default memo(AccountSearch);
