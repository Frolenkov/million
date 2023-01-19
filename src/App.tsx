import { Routes, Route } from 'react-router-dom';
import './style/defaultColors.css';
import './style/globals.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import GamePage from './components/pages/GamePage/GamePage';
import WelcomePage from './components/pages/WelcomePage/WelcomePage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="" element={<WelcomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Provider>
  );
}

export default App;
