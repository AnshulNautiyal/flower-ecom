export const LoaderStateSelector = (state) => {
  const { loaderState: { showOrHideLoader = false } = {} } = state;
  return showOrHideLoader;
};
