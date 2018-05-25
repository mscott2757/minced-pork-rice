
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

export function getProject({ projects }, id) {
  return projects[id];
}

export function getCategories({ categories }) {
  return Object.keys(categories).map((id) => {
    return { id, ...categories[id] }
  });
}
