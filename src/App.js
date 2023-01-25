import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import ChatPage from './pages/ChatPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
