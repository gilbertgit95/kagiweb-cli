import React, {useEffect, useCallback} from 'react';

function App() {
  // const apptheme = useAppSelector(state => state?.appRefs.appTheme)
  // const isSignedIn = useAppSelector(state => state?.signedInAccount?.isSignedIn)
  // const dispatch = useAppDispatch()
  // const finalTheme = useCallback(() => {
  //   const defaultTheme = appHandler.appConfig.AppThemeConfig || {}
  //   defaultTheme['palette'] = {
  //     ...(defaultTheme['palette'] || {}),
  //     ...{mode: apptheme}
  //   }
  
  //   return defaultTheme
  // }, [apptheme])
  // const themeConfiguration = createTheme(finalTheme())

  // useEffect(() => {
  //   (async () => {
  //     console.log('init app')
  //     const authToken = localStorage.getItem(appHandler.appConfig.TokenKey) || undefined
  //     // use the auth token from local storage on every private api request
  //     apiHelper.useToken(authToken)
  //     // set document title
  //     document.title = appHandler.appConfig.AppName

  //     // sytem theme change event
  //     window
  //       .matchMedia('(prefers-color-scheme: dark)')
  //       .addEventListener('change', (event) => {
  //           const sysTheme = event.matches ? 'dark' : 'light'
  //           dispatch(setAppRefs({appTheme: sysTheme}))
  //           localStorage.setItem(appHandler.appConfig.AppThemeKey, sysTheme)
  //           // console.log('changed!', sysTheme)
  //       })

  //     try {
  //       await appUtils.loadSigninAccountData()
  //       await appUtils.loadAppRefsData()

  //       // !! should be disabled sync features enable only when synching
  //       // !! temporary enabled
  //       // await appHandler.syncToFeatures() // !!! please disable this line, only use this in developement

  //     } catch (err) {
  //       console.log('Not authorized to fetch app data references')
  //     }
  //   })()
  // }, [dispatch])

  // return (
  //   <ThemeProvider theme={themeConfiguration}>
  //     <CssBaseline />
  //     {
  //       isSignedIn === undefined? <InitialDisplay />:isSignedIn? <PrivateRoutes />: <PublicRoutes />
  //     }
  //   </ThemeProvider>
    
  // )
  return null
}

export default App;
