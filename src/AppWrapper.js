import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { store } from "./redux/store"

export const AppWrapper = () => {
  return (
    <Provider store={store}>
        <App/>
    </Provider>
  )
}
