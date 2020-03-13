const convertArrayToObject = (array, key, value) => {
  return array.reduce((acc, cur) => ({ ...acc, [cur[key]]: cur[value] }), {})
}

export { convertArrayToObject }
