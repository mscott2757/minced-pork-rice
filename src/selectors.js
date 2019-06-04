
export function getCategory({ categories, projects }, projectId) {
  const category = categories.find(({ projects }) => projects.includes(projectId));
  return {
    ...category,
    projects: category.projects.map((project) => {
      return projects.find(({ id }) => id === project);
    })
  }
}

export function getProject({ categories, projects }, id, categoryId) {
  const category = categories.find(cat => cat.id === categoryId);
  let index = category.projects.indexOf(id);
  let prevProject = null;
  if (index - 1 >= 0) {
    let id = category.projects[index - 1];
    prevProject = projects.find(project => project.id === id);
  }
  let nextProject = null;
  if (index + 1 < category.projects.length) {
    let id = category.projects[index + 1];
    nextProject = projects.find(project => project.id === id);
  }
  return {
    ...projects.find(({ id: projectId }) => projectId === id),
    prevProject,
    nextProject
  }
}

export const getTopProjects = ({ home: { topProjects }, projects }) =>
  topProjects.map(id => projects.find(({ id: projectId }) => projectId === id));

export function getCategories({ categories }) {
  return Object.keys(categories).map((id) => {
    return { id, ...categories[id] }
  });
}

export function getNavCategories({ categories }) {
  return Object.keys(categories).map((id) => {
    return { id, title: categories[id].title }
  });
}
