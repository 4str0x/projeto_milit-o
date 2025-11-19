import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component", () => {
  it("should render SportIA logo and name", () => {
    render(<Footer />);
    expect(screen.getByText("SportIA")).toBeTruthy();
  });

  it("should render company description", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Sua plataforma completa de esportes com IA/)
    ).toBeTruthy();
  });

  it("should render Esportes section", () => {
    render(<Footer />);
    expect(screen.getByText("Esportes")).toBeTruthy();
    expect(screen.getByText("Basquete")).toBeTruthy();
    expect(screen.getByText("Futebol")).toBeTruthy();
  });

  it("should render Plataforma section", () => {
    render(<Footer />);
    expect(screen.getByText("Plataforma")).toBeTruthy();
    expect(screen.getByText("Como Funciona")).toBeTruthy();
    expect(screen.getByText("Treinos")).toBeTruthy();
  });

  it("should render Contato section", () => {
    render(<Footer />);
    expect(screen.getByText("Contato")).toBeTruthy();
    expect(screen.getByText("erick.souza.efg@gmail.com")).toBeTruthy();
  });

  it("should render copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/2025 SportIA/)).toBeTruthy();
  });

  it("should render social media links", () => {
    const { container } = render(<Footer />);
    const socialLinks = container.querySelectorAll('a[aria-label]');
    expect(socialLinks.length).toBeGreaterThanOrEqual(4);
  });

  it("should have footer element", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeTruthy();
  });
});
