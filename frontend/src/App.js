import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main className='py-3'>
                <Container>
                  <HomeScreen />
                </Container>
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path='/product/:id'
          element={
            <>
              <Header />
              <main className='py-3'>
                <Container>
                  <ProductScreen />
                </Container>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
