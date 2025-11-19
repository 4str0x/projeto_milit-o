import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQItem from "../FAQItem";

describe("FAQItem Component", () => {
  const defaultProps = {
    question: "Como faço para me inscrever?",
    answer: "Você pode se inscrever clicando no botão Enroll Now.",
  };

  it("should render the question", () => {
    render(<FAQItem {...defaultProps} />);
    expect(screen.getByText("Como faço para me inscrever?")).toBeTruthy();
  });

  it("should render the answer when open", () => {
    render(<FAQItem {...defaultProps} isOpen={true} />);
    expect(screen.getByText("Você pode se inscrever clicando no botão Enroll Now.")).toBeTruthy();
  });

  it("should not render the answer when closed", () => {
    render(<FAQItem {...defaultProps} isOpen={false} />);
    expect(screen.queryByText("Você pode se inscrever clicando no botão Enroll Now.")).toBeNull();
  });

  it("should have chevron icon", () => {
    const { container } = render(<FAQItem {...defaultProps} />);
    const chevron = container.querySelector("svg");
    expect(chevron).toBeTruthy();
  });

  it("should call onToggle callback when clicked", async () => {
    const user = userEvent.setup();
    let toggleCalled = false;
    const onToggle = () => {
      toggleCalled = true;
    };

    render(<FAQItem {...defaultProps} isOpen={false} onToggle={onToggle} />);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(toggleCalled).toBe(true);
  });
});
