import className from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

import Button from '~/components/Button';
import {
  IconAngleRight,
  IconCommentsIdea,
  IconMoon,
  IconMoreOption,
  IconQuestion,
  IconSettings,
  IconSignOut,
} from '~/components/Icons';
import QuantityNotification from '~/components/QuantityNotification';
import { css } from '~/utils';

import styles from './MoreOption.module.scss';
import Popper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import configs from '~/configs';

const cx = className.bind(styles);

const listOption = [
  {
    icon: <IconSettings />,
    title: 'Cài đặt và quyền riêng tư',
    children: {
      title: 'Cài đặt và quyền riêng tư',
      data: [
        { icon: <IconSettings />, title: 'Cài đặt' },
        { icon: <IconSettings />, title: 'Cài đặt' },
        { icon: <IconSettings />, title: 'Cài đặt' },
        { icon: <IconSettings />, title: 'Cài đặt' },
      ],
    },
  },
  { icon: <IconQuestion />, title: 'Trợ giúp và hỗ trợ' },
  { icon: <IconMoon />, title: 'Trợ giúp và hỗ trợ' },
  { icon: <IconCommentsIdea />, title: 'Đóng góp ý kiến' },
  { icon: <IconSignOut />, title: 'Đăng xuất', to: configs.routes.LOGIN },
];

const MoreOption = ({ className }) => {
  const [showMoreOption, setShowMoreOption] = useState(false);
  const [history, setHistory] = useState([{ data: listOption }]);

  const currentOption = history[history.length - 1];
  console.log(currentOption);

  return (
    <div className={className}>
      <HeadlessTippy
        visible={showMoreOption}
        placement="bottom"
        interactive
        onClickOutside={() => {
          setShowMoreOption(false);
        }}
        render={(attr) => (
          <Popper {...attr} className={cx('popper-more-option')}>
            <AccountItem
              optionItem={false}
              lastName="Đặng Duy"
              firstName="Đức"
              message="Xem trang cá nhân của bạn"
              styleTitle={{ fontWeight: 600, fontSize: '1.6rem' }}
              friendImage="https://video.fsgn1-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NRDNCEBYhbMAX8uk5lG&_nc_ht=video.fsgn1-1.fna&oh=00_AT8nWmEhbW--GbUo7bIKAlcBKHpgcbLHz6Nj3KW4oIyxkg&oe=62B9D106"
            />
            <div className={cx('separation')}></div>
            <div className={cx('list-btn-option')}>
              {currentOption.data.map((option, index) => (
                <Button
                  to={option.to}
                  key={index}
                  hoverOverlay
                  className={cx('btn-option')}
                  onClick={() => {
                    if (option.children && option.children.data) {
                      setHistory((prev) => [...prev, option.children]);
                    }
                  }}
                >
                  <div className={cx('icon')}>{option.icon}</div>
                  <p>{option.title}</p>
                  {option.children && option.children.data && option.children.data.length > 0 && (
                    <IconAngleRight className={cx('icon-right')} />
                  )}
                </Button>
              ))}
            </div>
          </Popper>
        )}
      >
        <Tippy delay={[500, 100]} content="Trang cá nhân của bạn">
          <Button
            hoverOverlayHigh
            circle
            size={[40]}
            onClick={() => setShowMoreOption(!showMoreOption)}
            active={showMoreOption}
          >
            <QuantityNotification position={[-10, css.calc('50% + 8px')]} dot>
              <IconMoreOption />
            </QuantityNotification>
          </Button>
        </Tippy>
      </HeadlessTippy>
    </div>
  );
};

MoreOption.propTypes = {};
export default MoreOption;
