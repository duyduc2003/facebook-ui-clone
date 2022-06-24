import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/Images';
import { css } from '~/utils';
import Image from '../Image';

export const IconFacebook = ({ className, height = '40', width = '40' }) => (
  <svg viewBox="0 0 36 36" className={className} fill="url(#jsc_s_y)" height={height} width={width}>
    <defs>
      <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_y">
        <stop offset="0%" stopColor="#0062E0"></stop>
        <stop offset="100%" stopColor="#19AFFF"></stop>
      </linearGradient>
    </defs>
    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
    <path
      fill="#fff"
      d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
    ></path>
  </svg>
);

export const IconSearch = ({ className, width = '1.6rem', height = '1.6rem', ...props }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    width={width}
    height={height}
    className={className}
    {...props}
  >
    <g fillRule="evenodd" transform="translate(-448 -544)">
      <g fillRule="nonzero">
        <path
          d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
          transform="translate(448 544)"
        ></path>
        <path
          d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
          transform="translate(448 544)"
        ></path>
        <path
          d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
          transform="translate(448 544)"
        ></path>
        <path
          d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
          transform="translate(448 544)"
        ></path>
      </g>
    </g>
  </svg>
);

export const IconHome = ({ className, height = '28', width = '28' }) => (
  <svg viewBox="0 0 28 28" className={className} fill="currentColor" height={height} width={width}>
    <path d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"></path>
  </svg>
);

export const IconHomeActive = ({ className, height = '28', width = '28' }) => (
  <svg viewBox="0 0 28 28" className={className} fill="#1B74E4" height={height} width={width}>
    <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>
  </svg>
);
export const IconWatch = ({ className, height = 28, width = 28 }) => (
  <svg viewBox="0 0 28 28" className={className} fill="currentColor" height={height} width={width}>
    <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
  </svg>
);

export const IconWatchActive = ({ className, height = 28, width = 28 }) => (
  <svg viewBox="0 0 28 28" className={className} fill="#1B74E4" height={height} width={width}>
    <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path>
  </svg>
);

export const IconGroup = ({ className, height = '28', width = '28' }) => (
  <svg viewBox="0 0 28 28" className={className} fill="currentColor" height={height} width={width}>
    <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
  </svg>
);

export const IconGroupActive = ({ className, height = '28', width = '28' }) => (
  <svg viewBox="0 0 28 28" className={className} fill="#1B74E4" height={height} width={width}>
    <path d="M21.877 19 21.364 19C21.139 19 20.971 18.802 20.996 18.577 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.066 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.877 19ZM17.75 10.75C17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13 18.647 13 17.75 11.991 17.75 10.75ZM19.5 18.221C19.5 19.202 18.682 20 17.678 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.442 13.5 12.828 13.5L15.173 13.5C17.559 13.5 19.5 15.395 19.5 17.724L19.5 18.221ZM6.25 10.75C6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13 7.147 13 6.25 11.991 6.25 10.75ZM7.934 14.591C7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.991 18.461 7.004 18.577 7.03 18.802 6.861 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14L7.631 14C7.933 14 8.102 14.338 7.934 14.591ZM14 6C15.697 6 16.75 7.15 16.75 9 16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6ZM14 1C6.832 1 1 6.832 1 14 1 21.169 6.832 27 14 27 21.169 27 27 21.169 27 14 27 6.832 21.169 1 14 1Z"></path>
  </svg>
);

export const IconFriend = ({ className, height = 28, width = 28, style = {} }) => (
  <FontAwesomeIcon className={className} style={{ height, width, style }} icon={faUserFriends} />
);

export const IconFriendActive = ({ className, height = 28, width = 28, style = {} }) => (
  <FontAwesomeIcon
    className={className}
    style={{ height, width, style, color: '#1B74E4' }}
    icon={faUserFriends}
  />
);

export const IconMenu = ({ className, width = 20, height = 20, color }) => (
  <svg
    fill={color || 'currentColor'}
    viewBox="0 0 44 44"
    height={height}
    width={width}
    className={className}
  >
    <circle cx="7" cy="7" r="6"></circle>
    <circle cx="22" cy="7" r="6"></circle>
    <circle cx="37" cy="7" r="6"></circle>
    <circle cx="7" cy="22" r="6"></circle>
    <circle cx="22" cy="22" r="6"></circle>
    <circle cx="37" cy="22" r="6"></circle>
    <circle cx="7" cy="37" r="6"></circle>
    <circle cx="22" cy="37" r="6"></circle>
    <circle cx="37" cy="37" r="6"></circle>
  </svg>
);

export const IconMessage = ({ className, height = 20, width = 20, color }) => (
  <svg
    viewBox="0 0 28 28"
    alt=""
    className={className}
    fill={color || 'currentColor'}
    height={height}
    width={width}
  >
    <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
  </svg>
);

export const IconNotification = ({ className, height = 20, width = 20 }) => (
  <svg
    viewBox="0 0 28 28"
    alt=""
    className={className}
    fill="currentColor"
    height={height}
    width={width}
  >
    <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
  </svg>
);

export const IconMoreOption = ({ className, height = 20, width = 20 }) => (
  <svg fill="currentColor" viewBox="0 0 20 20" height={height} width={width} className={className}>
    <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
  </svg>
);

export const IconPost = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_1),
      backgroundPosition: '-110px -70px',
      backgroundSize: '190px 146px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconPostsInGroup = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_2),
      backgroundPosition: '0px -1144px',
      backgroundSize: '26px 1726px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconNews = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_3),
      backgroundPosition: '0px -636px',
      backgroundSize: '34px 788px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);
export const IconGroupFull = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_2),
      backgroundPosition: '0px -330px',
      backgroundSize: '26px 1726px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconFlag = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_2),
      backgroundPosition: '0px -396px',
      backgroundSize: '26px 1726px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const Icon3Dot = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_5),
      backgroundPosition: '0 -92px',
      backgroundSize: '190px 146px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconOpenMessage = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_4),
      backgroundPosition: '0px -724px',
      backgroundSize: '34px 972px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconWriteMessage = ({ className, height = 16, width = 16, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_6),
      backgroundPosition: '0px -1414px',
      backgroundSize: '34px 1666px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconSended = ({ className, height = 16, width = 16 }) => (
  <svg
    className={className}
    height={height}
    width={width}
    viewBox="2 2 20 20"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m12 2a10 10 0 1 0 10 10 10.011 10.011 0 0 0 -10-10zm5.219 8-6.019 6.016a1 1 0 0 1 -1.414 0l-3.005-3.008a1 1 0 1 1 1.419-1.414l2.3 2.3 5.309-5.31a1 1 0 1 1 1.41 1.416z"></path>
  </svg>
);

export const IconUserSeen = ({ className, src, alt }) => (
  <Image
    className={className}
    src={src}
    alt={alt}
    height={16}
    width={16}
    borderRadius="50%"
    objectFit={'cover'}
    style={{}}
  />
);

export const IconTick = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_7),
      backgroundPosition: '0px -114px',
      backgroundSize: '190px 216px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconMessageRegular = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_7),
      backgroundPosition: '-52px -88px',
      backgroundSize: '190px 216px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconNotificationRegular = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_8),
      backgroundPosition: '0px -218px',
      backgroundSize: '38px 580px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);
export const IconUserRegular = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_4),
      backgroundPosition: '0px -664px',
      backgroundSize: '34px 950px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);
export const IconTrash = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_4),
      backgroundPosition: '0px -836px',
      backgroundSize: '34px 950px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconOpenNotification = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_9),
      backgroundPosition: '0px 0px',
      backgroundSize: '22px 44px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconRectangleClose = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_4),
      backgroundPosition: '0px -472px',
      backgroundSize: '34px 994px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconArrowLeft = ({ className, width = 20, height = 20 }) => (
  <svg fill="currentColor" viewBox="0 0 20 20" width={width} height={height} className={className}>
    <g fillRule="evenodd" transform="translate(-446 -350)">
      <g fillRule="nonzero">
        <path
          d="M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z"
          transform="translate(355 153.5)"
        ></path>
        <path
          d="M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z"
          transform="translate(355 153.5)"
        ></path>
      </g>
    </g>
  </svg>
);

export const IconSettings = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_10),
      backgroundPosition: '-22px -270px',
      backgroundSize: '74px 342px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconAngleRight = ({ className, height = 24, width = 24, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_5),
      backgroundPosition: '-112px -20px',
      backgroundSize: '190px 172px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconQuestion = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_11),
      backgroundPosition: '0 -286px',
      backgroundSize: '22px 348px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconMoon = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_12),
      backgroundPosition: '0 -758px',
      backgroundSize: '34px 1180px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);

export const IconCommentsIdea = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_13),
      backgroundPosition: '0 -26px',
      backgroundSize: '26px 158px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);
export const IconSignOut = ({ className, height = 20, width = 20, style = {} }) => (
  <i
    className={className}
    style={{
      backgroundImage: css.url(images.icons.ICON_13),
      backgroundPosition: '0 -48px',
      backgroundSize: '26px 158px',
      width,
      height,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      ...style,
    }}
  ></i>
);
