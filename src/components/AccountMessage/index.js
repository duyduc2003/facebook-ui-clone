import { useState } from 'react';
import className from 'classnames/bind';
import PropTypes from 'prop-types';

import images from '~/assets/Images';
import Button from '../Button';
import { IconSended, IconUserSeen } from '../Icons';

import Image from '../Image';

import styles from './AccountMessage.module.scss';

const cx = className.bind(styles);

const AccountMessage = ({
  action = 'hidden',
  lastName = '',
  firstName = 'Người dùng facebook',
  nickname,
  friendImage = images.placeholderUser,
  message = '',
}) => {
  const [userAction, setUserAction] = useState(action);

  const [fullName, setFullName] = useState(nickname ? nickname : `${lastName} ${firstName}`.trim());

  function handleClickAccount(e) {
    if (userAction === 'unread') setUserAction('hidden');
  }

  return (
    <Button hoverOverlay className={cx('wrapper')} onClick={handleClickAccount}>
      <div className={cx('inner')}>
        <Image
          className={cx('avt-user')}
          src={friendImage}
          height={56}
          width={56}
          objectFit="cover"
          borderRadius={'50%'}
        />
        <div className={cx('wrapper-user', { [userAction]: userAction })}>
          <h5 className={cx('username')}>{fullName}</h5>
          {message && (
            <p className={cx('content')}>
              {(action === 'seen' || action === 'sended') && 'Bạn:'} {message.trim()}
            </p>
          )}
        </div>
        <div className={cx('action')}>
          {userAction === 'unread' && <span className={cx('unread')}></span>}
          {userAction === 'sended' && <IconSended className={cx('sended')} />}
          {userAction === 'seen' && <IconUserSeen src={friendImage} />}
        </div>
      </div>
    </Button>
  );
};

AccountMessage.propTypes = {
  action: PropTypes.oneOf(['seen', 'sended', 'unread', 'hidden']),
  friendName: PropTypes.string,
  friendImage: PropTypes.string,
  message: PropTypes.string,
};
export default AccountMessage;
