import { render, screen } from '@testing-library/react';
import AllOrders from './Pages/AllOrders'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Routerpage from './Pages/Routerpage';
import VendorHome from './Pages/VendorHome';


test('title rendered correctly?', () => {
  render(<BrowserRouter><VendorHome/></BrowserRouter>);
  const linkElement = screen.getByTestId("page-description");
  expect(linkElement).toBeInTheDocument();
});

test('nav rendered correctly?', () => {
  render(<BrowserRouter><VendorHome/></BrowserRouter>);
  const linkElement = screen.getByTestId("nav");
  expect(linkElement).toBeInTheDocument();
});

test('data div rendered correctly?', () => {
  render(<BrowserRouter><VendorHome/></BrowserRouter>);
  const linkElement = screen.getByTestId("tools");
  expect(linkElement).toBeInTheDocument();
});
