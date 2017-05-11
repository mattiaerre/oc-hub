/* eslint-disable no-param-reassign */

module.exports = (head, $window) => { // eslint-disable-line arrow-body-style
  return (nameSpace, url, callback) => {
    if (typeof (url) === 'function') {
      callback = url;
      url = nameSpace;
      nameSpace = undefined;
    }

    if (typeof (nameSpace) === 'string') {
      nameSpace = [nameSpace];
    }

    const needsToBeLoaded = () => {
      let base = $window;

      if (typeof (nameSpace) === 'undefined') {
        return true;
      }

      for (let i = 0; i < nameSpace.length; i += 1) {
        base = base[nameSpace[i]];
        if (!base) {
          return true;
        }
      }

      return false;
    };

    const getObj = () => {
      let base = $window;

      if (typeof (nameSpace) === 'undefined') {
        return undefined;
      }

      for (let i = 0; i < nameSpace.length; i += 1) {
        base = base[nameSpace[i]];
        if (!base) {
          return undefined;
        }
      }

      return base;
    };

    if (needsToBeLoaded()) {
      head.load(url, () => {
        callback(getObj());
      });
    } else {
      callback(getObj());
    }
  };
};
