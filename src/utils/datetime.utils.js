export const getShortDate = (date) => new Date(date).toLocaleDateString('en-US', {
  day: 'numeric', month: 'long', year: 'numeric'
});

export const getLongDatetime = (date) => new Date(date).toLocaleDateString('en-US', {
  day: 'numeric', month: 'long', year: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric'
});
