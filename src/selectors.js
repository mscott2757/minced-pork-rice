
export function getCategory({ categories, projects }, id) {
  let category = categories[id];
  return {
    id,
    ...category,
    projects: category.projects.map((project) => {
      return { id: project, ...projects[project] }
    })
  }
}

export function getProject({ categories, projects }, id, categoryId) {
  let category = categories[categoryId];
  let index = category.projects.indexOf(id);

  let prevProject = null;
  if (index - 1 >= 0) {
    let id = category.projects[index - 1];
    prevProject = { id, ...projects[id] };
  }

  let nextProject = null;
  if (index + 1 < category.projects.length) {
    let id = category.projects[index + 1];
    nextProject = { id, ...projects[id] };
  }

  return {
    ...projects[id],
    prevProject,
    nextProject
  }
}

export function getCategories({ categories }) {
  return Object.keys(categories).map((id) => {
    return { id, ...categories[id] }
  });
}
