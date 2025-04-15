import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './container/navbar';
import { route } from './routers';
import Footer from './container/footer';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './companents/ScrollToTop'; // 👈 ScrollToTop import qilingan

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* 👈 Buni shu yerga qo'ydik */}
        <Navbar />
        <main>
          <Routes>
            {route.map((item, index) => {
              return <Route key={index} index path={item.path} element={item.element} />;
            })}
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
