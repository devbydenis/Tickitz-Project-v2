import React from 'react'
import { Provider } from 'react-redux'
import store, { persistedStore } from './store'
import { PersistGate } from 'redux-persist/integration/react'

function ReduxProvider({children}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider