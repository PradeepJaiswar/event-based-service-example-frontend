import fetch from 'isomorphic-fetch';

import { getApiBaseUrl } from 'shared/utils/env';

const apiBaseUrl = getApiBaseUrl();

function getUrl(url) {
  const pattern = /^((http|https):\/\/)/;
  return pattern.test(url) ? url : apiBaseUrl + url;
}

function parseJSON(response) {
  return response.json();
}

function parse() {
  return parseJSON;
}

export default function call(url, options = {}) {
  const newOptions = Object.assign(
    {
      method: 'GET',
    },
    options
  );

  const apiEndpoint = getUrl(url);

  return fetch(apiEndpoint, newOptions)
    .then(parse());
}
