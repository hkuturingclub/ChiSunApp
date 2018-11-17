/* eslint import/prefer-default-export: 0 */

// generateGUID generates a GUID. GUID is a large number which is guaranteed to be unique
export const generateGUID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
