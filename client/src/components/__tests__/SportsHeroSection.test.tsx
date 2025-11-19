import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SportsHeroSection from "../SportsHeroSection";

describe("SportsHeroSection Component", () => {
  it("should render the main heading", () => {
    render(<SportsHeroSection />);
    expect(screen.getByText("Seu Guia Pessoal de Esportes")).toBeTruthy();
  });

  it("should render the subtitle text", () => {
    render(<SportsHeroSection />);
    expect(screen.getByText(/Treine como um profissional/)).toBeTruthy();
  });

  it("should render AI badge", () => {
    render(<SportsHeroSection />);
    expect(screen.getByText("Impulsionado por IA")).toBeTruthy();
  });



  it("should render CTA buttons", () => {
    render(<SportsHeroSection />);
    expect(screen.getByText("Começar Gratuitamente")).toBeTruthy();
    expect(screen.getByText("Assistir Demo")).toBeTruthy();
  });

  it("should render hero image", () => {
    const { container } = render(<SportsHeroSection />);
    const image = container.querySelector("img");
    expect(image).toBeTruthy();
    expect(image?.getAttribute("src")).toBe("/hero-sports.jpg");
  });
});
