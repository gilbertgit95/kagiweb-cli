import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import App, {
  appStore,
  appHandler
} from '@kagiweb-tech/ui-core-a';

// public pages
import ContactUsPage, { ContactUsRoute, ContactUsRouteNav } from './pages/public/aboutUs/contactUsPage';

// private pages
import NotesPage, { NotesRoute, NotesRouteNav } from './pages/private/notes/notesPage';
import NotePage, { NoteRoute } from './pages/private/notes/notePage';
import UpdateNotePage, { UpdateNoteRoute } from './pages/private/notes/updateNotePage';


// create root component
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const customTheme = {
  palette: {
    primary: {
      main: '#9C27B0',
      light: '#E1BEE7',
      dark: '#7B1FA2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#673AB7',
      contrastText: '#FFFFFF',
      dark: '#512DA8',
      light: '#D1C4E9',
    },
  }
}

const customConfig = {
  AppName: 'Kagiweb tech',
  AppDescription: '',
  ServerAddress: 'http://127.0.0.1:5001',
  RootApiEndpoint: '/api/v1/',
  TokenKey: '_auth_token',
  AppThemeKey: '_app_theme',
  AppThemeConfig: customTheme,

  defaultDateFormat: 'YYYY-MM-DD',
  defaultDateTimeFormat: 'ddd MMM DD YYYY, hh:mm:ss A',
  defaultPageSizeList: [5, 10, 25, 100],
  defaultPageSize: 10,
  defaultPage: 1
}

// add navs
// public navs
appHandler.addPublicUserDrawerNav({
  label: 'About Us',
  links: [
    ContactUsRouteNav,
  ]
})
// private nav
appHandler.addMainDrawer({
  label: 'Custom Drawer',
  links:  [
    NotesRouteNav
  ]
})

// add pages
// public pages
appHandler.addPublicRoute({url: ContactUsRoute, page: ContactUsPage})
// private pages
appHandler.addPrivateRoute({url: NotesRoute, page: NotesPage })
appHandler.addPrivateRoute({url: NoteRoute, page: NotePage })
appHandler.addPrivateRoute({url: UpdateNoteRoute, page: UpdateNotePage })

appHandler.setAppConfig(customConfig)
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
