import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CourseCard from "../CourseCard";

describe("CourseCard Component", () => {
  const defaultProps = {
    title: "Web Design & Development",
    price: "$560.00",
    lessons: 23,
    students: 900,
    instructor: "M Morgan",
    badge: "NEW",
  };

  it("should render course title", () => {
    render(<CourseCard {...defaultProps} />);
    expect(screen.getByText("Web Design & Development")).toBeTruthy();
  });

  it("should render course price", () => {
    render(<CourseCard {...defaultProps} />);
    expect(screen.getByText("$560.00")).toBeTruthy();
  });

  it("should render lessons and students count", () => {
    render(<CourseCard {...defaultProps} />);
    expect(screen.getByText(/23 Lessons/)).toBeTruthy();
    expect(screen.getByText(/900 Students/)).toBeTruthy();
  });

  it("should render instructor name", () => {
    render(<CourseCard {...defaultProps} />);
    expect(screen.getByText("M Morgan")).toBeTruthy();
  });

  it("should render badge when provided", () => {
    render(<CourseCard {...defaultProps} />);
    expect(screen.getByText("NEW")).toBeTruthy();
  });

  it("should render Manage button", () => {
    render(<CourseCard {...defaultProps} />);
    expect(screen.getByText("Manage")).toBeTruthy();
  });
});
