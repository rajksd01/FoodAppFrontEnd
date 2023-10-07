import { sum } from "../src/components/add";
import "@testing-library/jest-dom ";

test("Checking if the sum of two numbers are same or not", () => {
  const result = sum(4, 5);

  expect(result).toBe(9);
});

import Support from "../src/components/Support";

test("Test whether the support page loads or not", () => {
  render(<Support />);
  const heading = screen.getByText("support");

  expect(heading).toBeInTheDocument();
});
