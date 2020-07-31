export function fetchFromAPI({
  securityURI = "https://",
  apiURI = "",
  defHeaders = {},
  defBody = {},
}) {
  return function (method, endpoint, { headers, body, params }) {
    let url = `${securityURI}${apiURI}/${endpoint}`;
    if (params) {
      url += addParams(params);
    }

    const fetchData = { method };
    fetchData.headers = { ...defHeaders, ...headers };
    if (body) {
      fetchData.headers = { ...defBody, ...body };
    }

    return fetch(url, fetchData)
      .then((response) => response.json())
      .then(logger)
      .catch((error) => console.error(error));
  };
}

// INTERNALS

function logger(response) {
  console.info("API fetch:", response.message, response.content);
  return response;
}

function addParams(params) {
  if (params.length > 0) {
    let paramsString = "?";
    params.forEach(({ name, value }) => {
      paramsString += `${name}=${value}&`;
    });
    return paramsString;
  } else {
    return "";
  }
}
