import { render, screen } from '@testing-library/react';
import PendingOrders from './Pages/PendingOrders'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Routerpage from './Pages/Routerpage';


test('title rendered correctly?', () => {
  render(<BrowserRouter><PendingOrders/></BrowserRouter>);
  const linkElement = screen.getByTestId("page-title");
  expect(linkElement).toBeInTheDocument();
});

test('nav rendered correctly?', () => {
  render(<BrowserRouter><PendingOrders/></BrowserRouter>);
  const linkElement = screen.getByTestId("nav");
  expect(linkElement).toBeInTheDocument();
});

test('data div rendered correctly?', () => {
  render(<BrowserRouter><PendingOrders/></BrowserRouter>);
  const linkElement = screen.getByTestId("data div");
  expect(linkElement).toBeInTheDocument();
});
