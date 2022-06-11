import classnames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';

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
  useEffect(() => {
    const idTimeOut = setTimeout(() => setAccountSearchResult([1]), 2000);
    return () => clearTimeout(idTimeOut);
  }, [valueInputSearch]);
  return (
    <HeadlessTippy
      visible={showPopperSearch && accountSearchResult.length > 0}
      interactive
      onClickOutside={(e) => setShowPopperSearch(false)}
      placement="bottom"
      render={(attr) => {
        return (
          <Popper {...attr} className={cx('popper-search')}>
            <header className={cx('header-search')}>
              <h5 className={cx('title')}>Kết quả tìm kiếm</h5>
              <Button className={cx('btn-edit')}>Chỉnh sửa</Button>
            </header>
            <div className={cx('body-search')}>
              <AccountSearch onClick={(e) => setShowPopperSearch(false)} />
              <AccountSearch onClick={(e) => setShowPopperSearch(false)} />
              <AccountSearch onClick={(e) => setShowPopperSearch(false)} />
              <AccountSearch onClick={(e) => setShowPopperSearch(false)} />
              <AccountSearch onClick={(e) => setShowPopperSearch(false)} />
            </div>
          </Popper>
        );
      }}
    >
      <div className={cx('form-input')}>
        <label htmlFor="input-search" className={cx('label-icon-search')}>
          <IconSearch style={{ color: '#65676b' }} />
        </label>
        <input
          id="input-search"
          placeholder="Tìm kiếm trên facebook"
          value={valueInputSearch}
          onChange={(e) => setValueInputSearch(e.target.value)}
          spellCheck={false}
          autoComplete="off"
          onFocus={(e) => setShowPopperSearch(true)}
        />
      </div>
    </HeadlessTippy>
  );
};

export default Search;
