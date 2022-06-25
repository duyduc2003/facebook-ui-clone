import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import React, { memo, useCallback, useEffect, useState } from 'react';

import Popper from '~/components/Popper';
import AccountSearch from '~/components/AccountSearch';
import styles from './Search.module.scss';
import Button from '~/components/Button';
import { IconSearch } from '~/components/Icons';

const cx = classnames.bind(styles);

const Search = () => {
  const [valueInputSearch, setValueInputSearch] = useState('');
  const [showPopperSearch, setShowPopperSearch] = useState(false);
  const [accountSearchResult, setAccountSearchResult] = useState([]);

  const handleCloseSearchPopper = useCallback(() => setShowPopperSearch(false), []);
  const handleShowSearchPopper = useCallback(() => setShowPopperSearch(true), []);
  const handleValueInputChange = (e) => setValueInputSearch(e.target.value);
  useEffect(() => {
    const idTimeOut = setTimeout(() => setAccountSearchResult([1]), 2000);
    return () => clearTimeout(idTimeOut);
  }, [valueInputSearch]);

  const renderResultSearch = (attr) => {
    return (
      <Popper {...attr} className={cx('popper-search')}>
        <header className={cx('header-search')}>
          <h5 className={cx('title')}>Kết quả tìm kiếm</h5>
          <Button className={cx('btn-edit')}>Chỉnh sửa</Button>
        </header>
        <div className={cx('body-search')}>
          <AccountSearch onClick={handleCloseSearchPopper} />
          <AccountSearch onClick={handleCloseSearchPopper} />
          <AccountSearch onClick={handleCloseSearchPopper} />
          <AccountSearch onClick={handleCloseSearchPopper} />
          <AccountSearch onClick={handleCloseSearchPopper} />
        </div>
      </Popper>
    );
  };

  return (
    <HeadlessTippy
      visible={showPopperSearch && accountSearchResult.length > 0}
      interactive
      onClickOutside={handleCloseSearchPopper}
      placement="bottom"
      render={renderResultSearch}
    >
      <div className={cx('form-input')}>
        <label htmlFor="input-search" className={cx('label-icon-search')}>
          <IconSearch style={{ color: '#65676b' }} />
        </label>
        <input
          id="input-search"
          placeholder="Tìm kiếm trên facebook"
          value={valueInputSearch}
          onChange={handleValueInputChange}
          spellCheck={false}
          autoComplete="off"
          onFocus={handleShowSearchPopper}
        />
      </div>
    </HeadlessTippy>
  );
};

export default memo(Search);
