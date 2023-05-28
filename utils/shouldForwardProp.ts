const shouldForwardProp = (prop: string, parameters: string[]) => {
  return !parameters.includes(prop);
};
export default shouldForwardProp;
