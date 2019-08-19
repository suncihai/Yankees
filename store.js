import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const InitialState = {

}

export const actionTypes = {

}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

// ACTIONS


export function initializeStore (initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}