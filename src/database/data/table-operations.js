function sort_by_entity(data, entityName, order) {
  const orderNumber = order === "asc" ? 1 : -1;
  return data.sort((a, b) => (a[entityName] - b[entityName]) * orderNumber);
}

function filter_by_location(data, location) {
  return data.filter((element) => {
    const locationArray = element.content.location;
    for (let locationValue of locationArray) {
      if (locationValue.toLowerCase().includes(location.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
}

function filter_by_page(data, number, size) {
  return data.slice(number * size, number * size + size);
}

module.exports = {
  sort_by_entity,
  filter_by_location,
  filter_by_page,
};
