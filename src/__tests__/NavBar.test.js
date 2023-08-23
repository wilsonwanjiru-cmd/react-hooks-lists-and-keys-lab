import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"; // Import render function
import NavBar from "../components/NavBar";

test("renders three <a> elements", () => {
  const { container } = render(<NavBar links={['Home', 'About', 'Projects']} />); // Use the render function here
  expect(container.querySelectorAll("a")).toHaveLength(3);
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar links={['Home', 'About', 'Projects']} />); // Use the render function here
  expect(screen.queryByText(/home/i)).toBeInTheDocument();
  expect(screen.queryByText(/about/i)).toBeInTheDocument();
  expect(screen.queryByText(/projects/i)).toBeInTheDocument();
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar links={['Home', 'About', 'Projects']} />); // Use the render function here
  expect(screen.queryByText(/home/i).href).toContain("#home");
  expect(screen.queryByText(/about/i).href).toContain("#about");
  expect(screen.queryByText(/projects/i).href).toContain("#projects");
});

