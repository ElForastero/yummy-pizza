import React, { lazy, Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { client } from 'src/api/client';
import Home from 'src/pages/Home';
import './App.css';

const Basket = lazy(() => import('src/pages/Basket'));

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
