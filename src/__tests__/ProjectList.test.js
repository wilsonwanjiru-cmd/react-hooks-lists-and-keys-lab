import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

const projects = [
  // your project data
];

test("gives each <ProjectItem> a key based on the project id", () => {
  render(<ProjectList projects={projects} />);

  projects.forEach((project) => {
    expect(screen.getByText(project.name)).toBeInTheDocument();
  });
});

test("renders a <ProjectItem> for each project passed in as a prop", () => {
  render(<ProjectList projects={projects} />);

  projects.forEach((project) => {
    expect(screen.getByText(project.name)).toBeInTheDocument();
    expect(screen.getByText(project.about)).toBeInTheDocument();
    project.technologies.forEach((technology) => {
      expect(screen.getByText(technology)).toBeInTheDocument();
    });
  });
});

