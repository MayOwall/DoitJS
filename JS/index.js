
function popUp(doc, win, w, h) {
  const left = (screen.availWidth - w) / 2;
  const top = (screen.availHeight - h) / 2;
  const option = `left=${left}, top=${top}, width=${w}, height=${h}`;
  window.open(doc, win, option);
};
