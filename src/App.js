import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/Header';
import BlogPage from './pages/BlogPage';
import ChatPage from './pages/ChatPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
