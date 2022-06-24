import configs from '~/configs';
import {
  FriendPage,
  GroupPage,
  HomePage,
  LoginPage,
  MessengerPage,
  NotificationsPage,
  Page_Page,
  UserPage,
  WatchPage,
} from '~/pages';
import { HeaderLayout } from '~/layouts';

export const PUBLIC_ROUTES = [
  { path: configs.routes.LOGIN, component: LoginPage, layout: null },
  { path: configs.routes.HOME, component: HomePage },
  { path: configs.routes.FRIEND, component: FriendPage },
  { path: configs.routes.GROUP, component: GroupPage },
  { path: configs.routes.PROFILE, component: UserPage, layout: HeaderLayout },
  { path: configs.routes.WATCH, component: WatchPage },
  { path: configs.routes.MESSENGER, component: MessengerPage },
  { path: configs.routes.PAGE_, component: Page_Page },
  { path: configs.routes.NOTIFICATION, component: NotificationsPage, layout: HeaderLayout },
];

export const PRIVATE_ROUTES = [];
