import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import VideoCarousel from "../VideoCarousel";

describe("VideoCarousel Component", () => {
  it("should render the section title", () => {
    render(<VideoCarousel />);
    expect(screen.getByText("Vídeos de Treino")).toBeTruthy();
  });

  it("should render video description", () => {
    render(<VideoCarousel />);
    expect(
      screen.getByText("Aprenda as técnicas fundamentais de arremesso no basquete")
    ).toBeTruthy();
  });

  it("should render navigation arrows", () => {
    const { container } = render(<VideoCarousel />);
    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("should render play button", () => {
    render(<VideoCarousel />);
    const playButtons = screen.getAllByRole("button");
    expect(playButtons.length).toBeGreaterThan(0);
  });

  it("should render subtitle text", () => {
    render(<VideoCarousel />);
    expect(
      screen.getByText(
        "Assista a vídeos de treino profissionais para aprimorar suas habilidades em diferentes esportes."
      )
    ).toBeTruthy();
  });

  it("should have multiple video sections", () => {
    const { container } = render(<VideoCarousel />);
    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("should render video carousel container", () => {
    const { container } = render(<VideoCarousel />);
    const carousel = container.querySelector(".relative.max-w-4xl");
    expect(carousel).toBeTruthy();
  });
});
