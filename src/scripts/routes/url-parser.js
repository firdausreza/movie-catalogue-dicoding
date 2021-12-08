const UrlParser = {
  parseActiveUrlWithCombiner() {
    let url = window.location.hash.slice(1).toLowerCase();
    if (window.location.pathname === "/") {
      const splittedUrl = this._urlSplitter(url, false);
      return this._urlCombiner(splittedUrl);
    } else {
      url = window.location.pathname.slice(3, 1).toLowerCase() + url;
      console.log(url, 'original url');
      const splittedUrl = this._urlSplitter(url, true);
      console.log(splittedUrl, 'Splitted url with pathname');
      console.log(this._urlCombiner(splittedUrl), 'Combined url');
      return this._urlCombiner(splittedUrl);
    }
  },

  parseActiveUrlWithoutCombiner() {
    let url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url, false);
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