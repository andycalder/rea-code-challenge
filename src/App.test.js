import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import data from './data.json';

describe('App', () => {
  test('renders App component', () => {
    render(<App data={data} />);
  });

  test('renders correct number of cards in each column initially', () => {
    render(<App data={data} />);
    const resultsCount = screen.queryAllByText('add').length;
    const savedCount = screen.queryAllByText('remove').length;
    expect(resultsCount).toEqual(3);
    expect(savedCount).toEqual(1);
  });

  test('adds card to saved column when add button is clicked', () => {
    render(<App data={data} />);
    const buttonEl = screen.getAllByText('add')[0];
    userEvent.click(buttonEl);
    const savedCount = screen.queryAllByText('remove').length;
    expect(savedCount).toEqual(2);
  });

  test('removes card from saved column when remove button is clicked', () => {
    render(<App data={data} />);
    const buttonEl = screen.getAllByText('remove')[0];
    userEvent.click(buttonEl);
    const savedCount = screen.queryAllByText('remove').length;
    expect(savedCount).toEqual(0);
  });

  test('does not add the same card twice', () => {
    render(<App data={data} />);
    const buttonEl = screen.getAllByText('add')[0];
    userEvent.click(buttonEl);
    userEvent.click(buttonEl);
    const savedCount = screen.queryAllByText('remove').length;
    expect(savedCount).toEqual(2);
  });
});
