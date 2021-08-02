import { render, screen, within } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import PropertyDashboard from './PropertyDashboard';
import data from './data.json';

const getListLength = (listName) => {
  const list = screen.getByRole('list', { name: listName });
  return within(list).queryAllByRole('listitem').length;
};

describe('PropertyDashboard', () => {
  test('renders PropertyDashboard component', () => {
    render(<PropertyDashboard data={data} />);
  });

  test('renders Results heading', () => {
    render(<PropertyDashboard data={data} />);
    const heading = screen.getByRole('heading', { name: /results/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders Saved Properties heading', () => {
    render(<PropertyDashboard data={data} />);
    const heading = screen.getByRole('heading', { name: /saved properties/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders correct number of cards in each list initially', () => {
    render(<PropertyDashboard data={data} />);
    const resultsCount = getListLength(/results/i);
    expect(resultsCount).toEqual(3);
    const savedCount = getListLength(/saved properties/i);
    expect(savedCount).toEqual(1);
  });

  test('adds card to saved list when add button is clicked', () => {
    render(<PropertyDashboard data={data} />);
    const button = screen.getAllByText(/add property/i)[0];
    userEvent.click(button);
    const savedCount = getListLength(/saved properties/i);
    expect(savedCount).toEqual(2);
  });

  test('removes card from saved list when remove button is clicked', () => {
    render(<PropertyDashboard data={data} />);
    const button = screen.getAllByText(/remove property/i)[0];
    userEvent.click(button);
    const savedCount = getListLength(/saved properties/i);
    expect(savedCount).toEqual(0);
  });

  test('does not add the same card twice', () => {
    render(<PropertyDashboard data={data} />);
    const button = screen.getAllByText(/add property/i)[0];
    userEvent.click(button);
    userEvent.click(button);
    const savedCount = getListLength(/saved properties/i);
    expect(savedCount).toEqual(2);
  });
});
