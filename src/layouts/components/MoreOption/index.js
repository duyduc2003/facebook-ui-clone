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
  { icon: IconSettings, title: 'Cài đặt và quyền riêng tư', children: [1] },
  { icon: IconQuestion, title: 'Trợ giúp và hỗ trợ', children: [1] },
  { icon: IconMoon, title: 'Trợ giúp và hỗ trợ', children: [1] },
  { icon: IconCommentsIdea, title: 'Đóng góp ý kiến' },
  { icon: IconSignOut, title: 'Đăng xuất', to: configs.routes.LOGIN },
];

const MoreOption = ({ className }) => {
  const [showMoreOption, setShowMoreOption] = useState(false);
  return (
    <div className={className}>
      <HeadlessTippy
        visible={showMoreOption}
        placement="bottom"
        interactive
        onClickOutside={() => setShowMoreOption(false)}
        render={(attr) => (
          <Popper {...attr} className={cx('popper-more-option')}>
            <AccountItem
              optionItem={false}
              lastName="Đặng Duy"
              firstName="Đức"
              message="Xem trang cá nhân của bạn"
              styleTitle={{ fontWeight: 600, fontSize: '1.6rem' }}
              friendImage="https://video.fsgn13-1.fna.fbcdn.net/v/t39.30808-1/277463457_401443105149167_3117504075406379956_n.jpg?stp=cp0_dst-jpg_s80x80&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=E-EBARCVM4sAX_rC2l3&_nc_ht=video.fsgn13-1.fna&oh=00_AT-DiiwNjxf0-WlsDtsD1HEbfVivSPpaokwCyqKJ5gJEOw&oe=629C2746"
            />
            <div className={cx('separation')}></div>
            <div className={cx('list-btn-option')}>
              {listOption.map(({ icon: Icon, title, children, to }, index) => (
                <Button to={to} key={index} hoverOverlay className={cx('btn-option')}>
                  <div className={cx('icon')}>
                    <Icon />
                  </div>
                  <p>{title}</p>
                  {children && children.length > 0 && (
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
