import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { memo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import styles from './Message.module.scss';

import Popper from '~/components/Popper';
import { IconArrowLeft, IconSearch } from '~/components/Icons';
import configs from '~/configs';
import Button from '~/components/Button';
import AccountSearch from '~/components/AccountSearch';
import AccountItem from '~/components/AccountItem';

const cx = classnames.bind(styles);

const MessagePopper = ({ attr, listBtnOption, listUserMessage }) => {
  const [valueInputSearch, setValueInputSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearchPopper = useCallback(() => setShowSearch(true), []);
  const handleCloseSearchPopper = useCallback(() => setShowSearch(false), []);
  const handleInputValueSearchChange = (e) => setValueInputSearch(e.target.value);

  const renderResultsUserSearch = (attr) => (
    <Popper {...attr} className={cx('popper-search-message')}>
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
      <AccountSearch />
    </Popper>
  );

  return (
    <Popper {...attr} className={cx('message-popper')}>
      <header className={cx('header-message')}>
        <h3 className={cx('heading')}>Chat</h3>
        <div className={cx('message-option')}>
          {listBtnOption.map(({ icon, title, to }, index) => {
            return (
              <Tippy key={index} delay={[500, 100]} content={title} placement="bottom-end">
                <Button
                  size={[35]}
                  hoverOverlay
                  circle
                  className={cx('btn-option-message')}
                  to={to}
                >
                  <span className={cx('icon')}>{icon}</span>
                </Button>
              </Tippy>
            );
          })}
        </div>
      </header>
      <div onClick={(e) => e.stopPropagation()}>
        <HeadlessTippy
          visible={showSearch}
          placement="bottom"
          interactive
          popperOptions={{ strategy: 'fixed' }}
          render={renderResultsUserSearch}
        >
          <div className={cx('search-message-wrapper')}>
            {showSearch && (
              <Button
                size={[36]}
                hoverOverlay
                className={cx('btn-back')}
                onClick={handleCloseSearchPopper}
              >
                <IconArrowLeft />
              </Button>
            )}
            <div className={cx('search-message-inner')}>
              {!showSearch && (
                <label htmlFor="search-message">
                  <IconSearch />
                </label>
              )}
              <input
                id="search-message"
                type="text"
                placeholder="Tìm kiếm trên Messenger"
                value={valueInputSearch}
                onChange={handleInputValueSearchChange}
                onFocus={handleShowSearchPopper}
              />
            </div>
          </div>
        </HeadlessTippy>
      </div>
      <div className={cx('body-message')}>
        {!showSearch &&
          (listUserMessage.length > 0 ? (
            listUserMessage.map(
              ({ action, message, srcImageUser, nickname, firstName, lastName }, index) => (
                <AccountItem
                  key={index}
                  action={action}
                  message={message}
                  srcImageUser={srcImageUser}
                  nickname={nickname}
                  firstName={firstName}
                  lastName={lastName}
                />
              )
            )
          ) : (
            <span>Bạn không có tin nhắn</span>
          ))}
      </div>
      <footer className={cx('footer-message')}>
        <Link to={configs.routes.MESSENGER} className={cx('inner')}>
          Xem tất cả trong Messenger
        </Link>
      </footer>
    </Popper>
  );
};

MessagePopper.propTypes = {
  listBtnOption: PropTypes.array,
  listUserMessage: PropTypes.array,
};

export default memo(MessagePopper);
