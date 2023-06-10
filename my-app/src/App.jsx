import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/main/Home';
import Login from './components/main/Login';
import ShoppingCart from './components/main/ShoppingCart';
import ProductDetails from './components/main/ProductDetails';
import { GlobalStyle } from './GlobalStyle';
import { AppProvider } from './components/main/AppContext';

function App() {

  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/*" element={<ProductDetails/>}/>
            <Route path="/shopping-cart/" element={<ShoppingCart />} />
          </Routes>
        </HashRouter>
      </AppProvider>
    </>
  );
}

export default App;
