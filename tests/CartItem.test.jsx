import { describe, it, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import CartItem from '../src/components/CartItem';

const mockCartItemInfo = { itemId: 1, title: 'Necklace', amount: 2, singlePrice: 10, allPrice: 20, image: 'link' };

const mockAddToCartBtn = vi.fn();
const mockRemoveFromCartBtn = vi.fn();
const mockDecreaseBtn = vi.fn();

describe("Cart Item", () => {
  it("renders correct cart item", () => {
    render(<CartItem item={mockCartItemInfo} increaseBtn={mockAddToCartBtn} removeFromCartBtn={mockRemoveFromCartBtn} decreaseBtn={mockDecreaseBtn} />);
    expect(screen.queryByText(/Necklace/i)).toBeInTheDocument();
  });
});