import classnames from 'classnames/bind';

import images from '~/assets/Images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import configs from '~/configs';

import styles from './Login.module.scss';

const cx = classnames.bind(styles);

const Login = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('slogan')}>
          <Image src={images.imgFacebookLogin} height={106} alt="facebook" />
          <h2>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
        </div>
        <div className={cx('form-login')}>
          <div className={cx('background')}>
            <input type="text" placeholder="Email hoặc số điện thoại" />
            <input type="password" placeholder="Mật khẩu" />
            <Button to={configs.routes.HOME}>Đăng nhập</Button>
            <Button>Quên mật khẩu</Button>
            <Button>Tạo tài khoản mới</Button>
          </div>
          <p>
            <Button>Tạo Trang</Button> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
