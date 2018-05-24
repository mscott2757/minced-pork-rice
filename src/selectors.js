
export function getCategory({ categories }, id) {
  return { id, ...categories[id] }
}

export function getProject({ projects }, id) {
  return projects[id];
}

export function getCategories({ categories }) {
  return Object.keys(categories).map((id) => {
    return { id, ...categories[id] }
  });
}
