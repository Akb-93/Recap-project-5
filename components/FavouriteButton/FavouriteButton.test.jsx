import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FavoriteButton from './FavouriteButton';

describe('FavoriteButton Component', () => {
  const mockElement = { slug: 'test-slug' };
  const mockOnToggleFavorite = jest.fn();

  it('renders the "Add to Favorites" text initially when not favorited', () => {
    render(<FavoriteButton element={mockElement} onToggleFavorite={mockOnToggleFavorite} isFavorite={false} />);
    expect(screen.getByText('☆ Add to Favorites')).toBeInTheDocument();
  });

  it('renders the "★ Favorite" text initially when favorited', () => {
    render(<FavoriteButton element={mockElement} onToggleFavorite={mockOnToggleFavorite} isFavorite={true} />);
    expect(screen.getByText('★ Favorite')).toBeInTheDocument();
  });

  it('calls the onToggleFavorite prop with the element when clicked', async () => {
    render(<FavoriteButton element={mockElement} onToggleFavorite={mockOnToggleFavorite} isFavorite={false} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
    expect(mockOnToggleFavorite).toHaveBeenCalledWith(mockElement);
  });

  it('toggles the text when clicked (from not favorited to favorited)', async () => {
    render(<FavoriteButton element={mockElement} onToggleFavorite={mockOnToggleFavorite} isFavorite={false} />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('★ Favorite')).toBeInTheDocument();
  });

  it('toggles the text when clicked (from favorited to not favorited)', async () => {
    render(<FavoriteButton element={mockElement} onToggleFavorite={mockOnToggleFavorite} isFavorite={true} />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('☆ Add to Favorites')).toBeInTheDocument();
  });

  it('updates the color style based on the isFavorite prop', () => {
    const { rerender } = render(<FavoriteButton element={mockElement} onToggleFavorite={mockOnToggleFavorite} isFavorite={false} />);
    expect(screen.getByRole('button')).toHaveStyle({ color: 'gray' });

    rerender(<FavoriteButton element={mockElement} onToggleFavorite={mockOnToggleFavorite} isFavorite={true} />);
    expect(screen.getByRole('button')).toHaveStyle({ color: 'red' });
  });
});