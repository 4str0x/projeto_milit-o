import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("should render the logo and brand name", () => {
    render(<Header />);
    expect(screen.getByText("SportIA")).toBeTruthy();
  });

  it("should render navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Como funciona")).toBeTruthy();
    expect(screen.getByText("Treinamento")).toBeTruthy();
    expect(screen.getByText("Esportes")).toBeTruthy();
    expect(screen.getByText("Contato")).toBeTruthy();
  });

  it("should render Começar Agora button", () => {
    render(<Header />);
    expect(screen.getByText("Começar Agora")).toBeTruthy();
  });

  it("should have sticky positioning", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header?.className).toContain("sticky");
  });
});
