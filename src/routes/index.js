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
import { HeaderLayout, SidebarLeftLayout } from '~/layouts';

export const PUBLIC_ROUTES = [
  { path: configs.routes.LOGIN, component: LoginPage, layout: null },
  { path: configs.routes.HOME, component: HomePage, sidebarTransparent: true },
  { path: configs.routes.FRIEND, component: FriendPage, layout: SidebarLeftLayout },
  { path: configs.routes.GROUP, component: GroupPage, layout: SidebarLeftLayout },
  { path: configs.routes.PROFILE, component: UserPage, layout: HeaderLayout },
  { path: configs.routes.WATCH, component: WatchPage, layout: SidebarLeftLayout },
  { path: configs.routes.MESSENGER, component: MessengerPage, layout: HeaderLayout },
  { path: configs.routes.PAGE_, component: Page_Page, layout: SidebarLeftLayout },
  { path: configs.routes.NOTIFICATION, component: NotificationsPage, layout: HeaderLayout },
];

export const PRIVATE_ROUTES = [];
