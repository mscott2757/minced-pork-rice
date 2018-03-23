
export function getCategory({ categories }, id) {
  return categories[id];
}

export function getProject(category, id) {
  return category[id];
}
