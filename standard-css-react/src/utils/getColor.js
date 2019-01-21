/* globals window */
export const getColor = variable => window
  .getComputedStyle(window.document.body)
  .getPropertyValue(variable);
