export const fetchData = async (url, dataType) => {
  const response = await fetch(url);
  const resContentType = response.headers.get('content-type');

  if (!response.ok
    || (dataType === 'md' && !resContentType.includes('markdown'))
    || (dataType === 'json' && !resContentType.includes('json'))) {
    return Promise.reject(new Error('Fetching data failed!'));
  }

  if (dataType === 'md') {
    return response.text();
  }
  else if (dataType === 'json') {
    return response.json();
  }
  return Promise.reject(new Error(`Not support data type ${dataType}!`));
}
