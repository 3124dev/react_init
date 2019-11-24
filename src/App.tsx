import React from 'react';
import AppRouter from './routes';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <AppRouter isLoggedIn={true}/>
    </Provider>
  );
}

export default App;
