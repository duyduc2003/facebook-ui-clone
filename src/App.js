import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { v4 as idv4 } from 'uuid';

import { MainLayout } from './layouts';
import { PUBLIC_ROUTES } from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {PUBLIC_ROUTES.map((route) => {
            const Page = route.component;
            let Layout = MainLayout;

            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }

            const propsLayout = {};

            if (route.sidebarTransparent) {
              propsLayout.sidebarTransparent = route.sidebarTransparent;
            }

            const key = idv4();

            return (
              <Route
                key={key}
                path={route.path}
                element={
                  <Layout {...propsLayout}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
