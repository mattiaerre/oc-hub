const makeModel = (json) => {
  const model = Object.assign({}, json);
  model.url = model.url.replace('http://', '//').replace('https://', '//');
  if (json.media_type === 'video') {
    model.style = 'background-color: pink;';
  } else {
    model.style = `background-image: url(${model.url});`;
  }
  return model;
};

module.exports = makeModel;
