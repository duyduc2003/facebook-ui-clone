import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './MoreOption.module.scss';
import Button from '~/components/Button';
import { IconArrowLeft } from '~/components/Icons';

const cx = classnames.bind(styles);

const Header = ({ title, onBack }) => {
  return (
    <div className={cx('header-wrapper')}>
      <Button hoverOverlay size={[40]} style={{ borderRadius: '50%' }} onClick={onBack}>
        <IconArrowLeft />
      </Button>
      <h2 className={cx('header-title')}>{title}</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
};

export default Header;
