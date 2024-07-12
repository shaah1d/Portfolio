import './App.css';
import Home from './Home';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Work from './Work';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Work />} />
      </Route>
    </Routes>
  );
}

export default App;
