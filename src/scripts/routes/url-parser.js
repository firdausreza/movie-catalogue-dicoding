const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this._urlSplitter(url);
    return this._urlCombiner(splittedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    let url = window.location.hash.slice(1).toLowerCase();
    if (window.location.pathname === "/") {
      return this._urlSplitter(url, false);
    } else {
      url = window.location.pathname + url;
      console.log(url, 'with pathname');
      return this._urlSplitter(url, true)
    }
  },

  _urlSplitter(url, isPathnameEnabled) {
    if (!isPathnameEnabled) {
      const urlsSplits = url.split('/');
      return {
        resource: urlsSplits[1] || null,
        id: urlsSplits[2] || null,
        verb: urlsSplits[3] || null,
      };
    } else {
      const urlsSplits = url.split('/');
      return {
        pathname: urlsSplits[1] || null,
        resource: urlsSplits[2] || null,
        id: urlsSplits[3] || null,
        verb: urlsSplits[4] || null,
      };
    }
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id ? '/:id' : '')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  }
}

export default UrlParser;