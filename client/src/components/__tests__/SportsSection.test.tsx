import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SportsSection from "../SportsSection";

describe("SportsSection Component", () => {
  it("should render the section title", () => {
    render(<SportsSection />);
    expect(screen.getByText("Esportes Disponíveis")).toBeTruthy();
  });

  it("should render all sports names", () => {
    render(<SportsSection />);
    expect(screen.getByText("Basquete")).toBeTruthy();
    expect(screen.getByText("Futebol")).toBeTruthy();
    expect(screen.getByText("Vôlei")).toBeTruthy();
    expect(screen.getByText("Corrida")).toBeTruthy();
    expect(screen.getByText("Natação")).toBeTruthy();
    expect(screen.getByText("Tênis")).toBeTruthy();
  });



  it("should render explore buttons", () => {
    render(<SportsSection />);
    const buttons = screen.getAllByText("Explorar Treinos");
    expect(buttons.length).toBe(6);
  });

  it("should render sport descriptions", () => {
    render(<SportsSection />);
    expect(screen.getByText("Técnica, velocidade e precisão")).toBeTruthy();
    expect(screen.getByText("Passes, dribles e chutes")).toBeTruthy();
  });
});
