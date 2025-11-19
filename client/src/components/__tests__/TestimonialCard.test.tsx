import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TestimonialCard from "../TestimonialCard";

describe("TestimonialCard Component", () => {
  const defaultProps = {
    name: "Alicia Rodriguez",
    role: "Student",
    content: "Investing in courses at this e-learning platform gave a great change in my career.",
    rating: 5,
  };

  it("should render testimonial content", () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText(/Investing in courses/)).toBeTruthy();
  });

  it("should render author name", () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText("Alicia Rodriguez")).toBeTruthy();
  });

  it("should render author role", () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText("Student")).toBeTruthy();
  });

  it("should render star rating", () => {
    const { container } = render(<TestimonialCard {...defaultProps} rating={5} />);
    const stars = container.querySelectorAll("svg");
    expect(stars.length).toBeGreaterThan(0);
  });

  it("should render with default 5 star rating", () => {
    const { container } = render(
      <TestimonialCard
        name="John"
        role="Teacher"
        content="Great course"
      />
    );
    const stars = container.querySelectorAll("svg");
    expect(stars.length).toBeGreaterThan(0);
  });
});
