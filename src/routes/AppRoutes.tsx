import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Tickets from '../pages/Tickets';
import CartPage from '../pages/CartPage';
import Trainers from '../pages/Trainers';
import NotFound from '../pages/NotFound';
import TrainerDetail from '../pages/TrainerDetail';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainers/:regionName" element={<TrainerDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
