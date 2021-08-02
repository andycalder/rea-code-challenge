import { render, screen, fireEvent } from '@testing-library/react';
import PropertyCard from './PropertyCard';
import data from './data.json';

const testProperty = data.results[0];

describe('PropertyCard', () => {
  test('renders PropertyCard component', () => {
    render(<PropertyCard data={testProperty} />);
  });

  test('renders agency logo', () => {
    render(<PropertyCard data={testProperty} />);
    const logo = screen.getByAltText(/agency/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders property image', () => {
    render(<PropertyCard data={testProperty} />);
    const image = screen.getByAltText(/property/i);
    expect(image).toBeInTheDocument();
  });

  test('renders price', () => {
    render(<PropertyCard data={testProperty} />);
    const price = screen.getByText(/\$726,500/i);
    expect(price).toBeInTheDocument();
  });

  test('renders button on mouse over', () => {
    render(<PropertyCard data={testProperty} />);
    const card = screen.getByRole('listitem');
    fireEvent.mouseOver(card);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('removes button on mouse out', () => {
    render(<PropertyCard data={testProperty} />);
    const card = screen.getByRole('listitem');
    fireEvent.mouseOver(card);
    fireEvent.mouseOut(card);
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });

  test("renders button with 'add property' text when props.isSaved === false", () => {
    render(<PropertyCard data={testProperty} isSaved={false} />);
    const card = screen.getByRole('listitem');
    fireEvent.mouseOver(card);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/add property/i);
  });

  test("renders button with 'remove property' text when props.isSaved === true", () => {
    render(<PropertyCard data={testProperty} isSaved={true} />);
    const card = screen.getByRole('listitem');
    fireEvent.mouseOver(card);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/remove property/i);
  });
});
