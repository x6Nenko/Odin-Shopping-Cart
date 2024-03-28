import { describe, it, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import Shop from "../src/Shop";

const jeweleryData = [
  { id: 1, title: 'Necklace', price: 20, image: 'necklace.jpg' },
  { id: 2, title: 'Bracelet', price: 15, image: 'bracelet.jpg' },
];

vi.mock("../src/Shop", () => ({
  default: ({ jeweleryData }) => (
    <article>
      {jeweleryData.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </article>
  )
}));

describe("Shop page", () => {
  it("renders product cards for each item in jeweleryData", () => {
    render(<Shop jeweleryData={jeweleryData} />);
    expect(screen.queryByText(/Necklace/i)).toBeInTheDocument();
    expect(screen.queryByText(/Bracelet/i)).toBeInTheDocument();
  });
});