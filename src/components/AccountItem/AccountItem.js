import { useState } from 'react';
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
  { title: 'Đánh dấu là chưa đọc', icon: <IconTick /> },
  { title: 'Mở bằng Messenger', icon: <IconMessageRegular /> },
  { title: 'Tắt thông báo', icon: <IconNotificationRegular /> },
  { title: 'Xem trang cá nhân', icon: <IconUserRegular /> },
  { title: 'Xóa đoạn chat', icon: <IconTrash /> },
];

const optionNotification = [
  { title: 'Đánh dấu là đã đọc', icon: <IconTick /> },
  { title: 'Gỡ thông báo này', icon: <IconRectangleClose /> },
  { title: 'Xem trang cá nhân', icon: <IconUserRegular /> },
];

const modes = {
  MESSAGE: 'message',
  NOTIFICATION: 'notification',
};

const actions = {
  HIDDEN: 'hidden',
  SEEN: 'seen',
  UNREAD: 'unread',
  SENDED: 'sended',
};

const AccountItem = ({
  mode = modes.MESSAGE,
  action = actions.HIDDEN,
  lastName = '',
  firstName = 'Người dùng facebook',
  nickname,
  srcImageUser = images.placeholderUser,
  message = '',
  optionItem = true,
  styleTitle,
  to,
}) => {
  const [userAction, setUserAction] = useState(action);
  const [fullName, setFullName] = useState(nickname ? nickname : `${lastName} ${firstName}`.trim());
  const [showOption, setShowOption] = useState(false);

  function handleClickAccount(e) {
    if (userAction === actions.UNREAD && mode === modes.MESSAGE) setUserAction('hidden');
  }
  const handleCloseOptions = (e) => {
    e.stopPropagation();
    setShowOption(false);
  };

  const handleToggleOptions = (e) => {
    e.stopPropagation();
    setShowOption(!showOption);
  };

  const renderOptions = (attr) => (
    <Popper {...attr} className={cx('option')}>
      {mode === modes.MESSAGE &&
        optionMessage.map(({ icon, title }, index) => (
          <Button
            key={index}
            hoverOverlay
            className={cx('option-item')}
            onClick={handleCloseOptions}
          >
            {icon}
            <p>{title}</p>
          </Button>
        ))}
      {mode === modes.NOTIFICATION &&
        optionNotification.map(({ icon, title }, index) => (
          <Button
            key={index}
            hoverOverlay
            className={cx('option-item')}
            onClick={handleCloseOptions}
          >
            {icon}
            <p>{title}</p>
          </Button>
        ))}
    </Popper>
  );

  return (
    <Button to={to} hoverOverlay className={cx('wrapper')} onClick={handleClickAccount}>
      <div className={cx('inner')}>
        <Image
          className={cx('avt-user')}
          src={srcImageUser}
          height={56}
          width={56}
          objectFit="cover"
          borderRadius={'50%'}
        />
        <div className={cx('wrapper-user', { [userAction]: userAction })}>
          {mode === modes.MESSAGE && (
            <h5 className={cx('username')} style={styleTitle}>
              {fullName}
            </h5>
          )}
          {mode === modes.MESSAGE && message && (
            <p className={cx('content')}>
              {(action === actions.SEEN || action === actions.SENDED) && 'Bạn:'} {message.trim()}
            </p>
          )}
          {mode === modes.NOTIFICATION && (
            <p className={cx('content-notification')}>
              <span>{firstName}</span> {message}
            </p>
          )}
        </div>
        <div className={cx('action')}>
          {userAction === actions.UNREAD && <span className={cx('unread')}></span>}
          {mode !== modes.NOTIFICATION && userAction === actions.SENDED && (
            <IconSended className={cx('sended')} />
          )}
          {mode !== modes.NOTIFICATION && userAction === actions.SEEN && (
            <IconUserSeen src={srcImageUser} />
          )}
        </div>
      </div>
      {optionItem && (
        <HeadlessTippy
          visible={showOption}
          placement="bottom"
          interactive
          onClickOutside={(e) => setShowOption(false)}
          popperOptions={{ strategy: 'fixed' }}
          render={renderOptions}
        >
          <div className={cx('option-account')} onClick={handleToggleOptions}>
            <Icon3Dot className={cx('icon')} />
          </div>
        </HeadlessTippy>
      )}
    </Button>
  );
};

AccountItem.propTypes = {
  action: PropTypes.oneOf([actions.SEEN, actions.SENDED, actions.UNREAD, actions.HIDDEN]),
  mode: PropTypes.oneOf([modes.MESSAGE, modes.NOTIFICATION]),
  friendName: PropTypes.string,
  srcImageUser: PropTypes.string,
  message: PropTypes.string,
  to: PropTypes.string,
};

export default AccountItem;
