export const elipsis = (name) => {
  if (name?.length > 10) {
    return name.substring(0, 35) + '...';
  } else {
    return name;
  }
};
