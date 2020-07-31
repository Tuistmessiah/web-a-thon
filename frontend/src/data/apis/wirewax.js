import { fetchFromAPI } from "./api-fetcher";

const apiWirewaxConfig = {
  securityURI: "http://",
  apiURI: "localhost:5000",
  defBody: {},
  defHeaders: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const fetchWirewaxAPI = fetchFromAPI(apiWirewaxConfig);

// IMPLEMENTATION

export function getPage({
  page,
  rowsPerPage,
  orientation,
  orderedName,
  location,
}) {
  let params = [
    {
      name: "page",
      value: page,
    },
    {
      name: "rowsPerPage",
      value: rowsPerPage,
    },
    {
      name: "orientation",
      value: orientation,
    },
    {
      name: "orderedName",
      value: orderedName,
    },
    {
      name: "location",
      value: location.length === 0 ? undefined : location,
    },
  ].filter((param) => param.value !== undefined);
  return fetchWirewaxAPI("get", `gm/by-page`, { params });
}
