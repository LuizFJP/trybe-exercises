import { render } from '@testing-library/react';
import { createStore } from 'react';
import { Provider } from 'react-redux';
import clickReducer from './reducers'

const renderWithRedux = (
  component,
  { initialState, store = createStore(clickReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;
