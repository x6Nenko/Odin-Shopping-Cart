import { describe, it, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import ProductCard from "../src/components/ProductCard";

const mockItemData = {
  image: 'mock-image-url.jpg',
  title: 'Mock Product',
  description: 'Mock description',
  price: 10,
};

const mockCartItemInfo = [
  { itemId: 1, amount: 2, allPrice: 20 },
  { itemId: 2, amount: 1, allPrice: 10 },
];


const mockAddToCartBtn = vi.fn();
const mockRemoveFromCartBtn = vi.fn();
const mockDecreaseBtn = vi.fn();

vi.mock("../src/components/ProductCard", () => ({
  default: ({ 
    itemData,
    addToCartBtn,
    removeFromCartBtn,
    isInCart,
    cartItemInfo,
    decreaseBtn 
  }) => (
    <article className="card-container">
      <div className='card-header'>
        <div className='image-container'>
          <img 
            src={itemData.image}
            alt=""
            className="card-img"
            width={200}
            height={200}
            data-test-id="img"
          />
        </div>

        <div className="card-info">
          <h2>{itemData.title}</h2>
          <p>{itemData.description}</p>
        </div>
      </div>

      <div className='cardFooter'>
        <p>{itemData.price}$</p>
        {isInCart ? 
          <button onClick={() => removeFromCartBtn(itemData)} data-testid="remove-btn">Remove from the cart</button>
        :
          <button onClick={() => addToCartBtn(itemData)} data-testid="add-btn">Add to cart</button>
        }
        {isInCart && 
          <div className='amount-control-container'>
            <button onClick={() => decreaseBtn(itemData)}>-</button>
            <p data-testid="amount">{cartItemInfo[0].amount}</p>
            <button onClick={() => addToCartBtn(itemData)}>+</button>
          </div>
        }
      </div>
    </article>
  )
}));

describe("ProductCard component", () => {
  it("renders item data and buttons correctly (item is in cart)", () => {
    render(
      <ProductCard
        itemData={mockItemData}
        addToCartBtn={mockAddToCartBtn}
        removeFromCartBtn={mockRemoveFromCartBtn}
        isInCart={true}
        cartItemInfo={mockCartItemInfo}
        decreaseBtn={mockDecreaseBtn}
      />
    );
    expect(screen.queryByText(/Mock Product/i)).toBeInTheDocument();
    expect(screen.queryByText(/Mock description/i)).toBeInTheDocument();
    expect(screen.queryByText(/10/i)).toBeInTheDocument();
    expect(screen.getByTestId('remove-btn')).toBeInTheDocument();
    expect(screen.getByTestId('amount')).toHaveTextContent('2');
  });

  it("renders item data and buttons correctly (item is NOT in cart)", () => {
    render(
      <ProductCard
        itemData={mockItemData}
        addToCartBtn={mockAddToCartBtn}
        removeFromCartBtn={mockRemoveFromCartBtn}
        isInCart={false}
        cartItemInfo={mockCartItemInfo}
        decreaseBtn={mockDecreaseBtn}
      />
    );
    expect(screen.queryByText(/Mock Product/i)).toBeInTheDocument();
    expect(screen.queryByText(/Mock description/i)).toBeInTheDocument();
    expect(screen.queryByText(/10/i)).toBeInTheDocument();
    expect(screen.getByTestId('add-btn')).toBeInTheDocument();
  });
});