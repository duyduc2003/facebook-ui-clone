import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import className from 'classnames/bind';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';

import images from '~/assets/Images';
import Button from '../Button';
import {
  Icon3Dot,
  IconMessageRegular,
  IconNotificationRegular,
  IconRectangleClose,
  IconSended,
  IconTick,
  IconTrash,
  IconUserRegular,
  IconUserSeen,
} from '../Icons';

import Image from '../Image';

import styles from './AccountItem.module.scss';
import Popper from '../Popper';

const cx = className.bind(styles);

const optionMessage = [
  { title: 'Đánh dấu là chưa đọc', icon: IconTick },
  { title: 'Mở bằng Messenger', icon: IconMessageRegular },
  { title: 'Tắt thông báo', icon: IconNotificationRegular },
  { title: 'Xem trang cá nhân', icon: IconUserRegular },
  { title: 'Xóa đoạn chat', icon: IconTrash },
];

const optionNotification = [
  { title: 'Đánh dấu là đã đọc', icon: IconTick },
  { title: 'Gỡ thông báo này', icon: IconRectangleClose },
  { title: 'Xem trang cá nhân', icon: IconUserRegular },
];

const AccountItem = ({
  mode = 'message',
  action = 'hidden',
  lastName = '',
  firstName = 'Người dùng facebook',
  nickname,
  friendImage = images.placeholderUser,
  message = '',
}) => {
  const [userAction, setUserAction] = useState(action);
  const [fullName, setFullName] = useState(nickname ? nickname : `${lastName} ${firstName}`.trim());
  const [showOption, setShowOption] = useState(false);

  function handleClickAccount(e) {
    if (userAction === 'unread' && mode === 'message') setUserAction('hidden');
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
          {mode === 'message' && <h5 className={cx('username')}>{fullName}</h5>}
          {mode === 'message' && message && (
            <p className={cx('content')}>
              {(action === 'seen' || action === 'sended') && 'Bạn:'} {message.trim()}
            </p>
          )}
          {mode === 'notification' && (
            <p className={cx('content-notification')}>
              <span>{firstName}</span> {message}
            </p>
          )}
        </div>
        <div className={cx('action')}>
          {userAction === 'unread' && <span className={cx('unread')}></span>}
          {userAction === 'sended' && <IconSended className={cx('sended')} />}
          {userAction === 'seen' && <IconUserSeen src={friendImage} />}
        </div>
      </div>
      <HeadlessTippy
        visible={showOption}
        placement="bottom"
        interactive
        onClickOutside={(e) => setShowOption(false)}
        render={(attr) => (
          <Popper {...attr} className={cx('option')}>
            {mode === 'message' &&
              optionMessage.map(({ icon: Icon, title }, index) => (
                <Button
                  key={index}
                  hoverOverlay
                  className={cx('option-item')}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOption(false);
                  }}
                >
                  <Icon />
                  <p>{title}</p>
                </Button>
              ))}
            {mode === 'notification' &&
              optionNotification.map(({ icon: Icon, title }, index) => (
                <Button
                  key={index}
                  hoverOverlay
                  className={cx('option-item')}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOption(false);
                  }}
                >
                  <Icon />
                  <p>{title}</p>
                </Button>
              ))}
          </Popper>
        )}
      >
        <div
          className={cx('option-account')}
          onClick={(e) => {
            e.stopPropagation();
            setShowOption(!showOption);
          }}
        >
          <Icon3Dot className={cx('icon')} />
        </div>
      </HeadlessTippy>
    </Button>
  );
};

AccountItem.propTypes = {
  action: PropTypes.oneOf(['seen', 'sended', 'unread', 'hidden']),
  mode: PropTypes.oneOf(['message', 'notification']),
  friendName: PropTypes.string,
  friendImage: PropTypes.string,
  message: PropTypes.string,
};

export default AccountItem;
