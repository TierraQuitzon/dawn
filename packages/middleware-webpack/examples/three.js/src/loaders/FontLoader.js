import { Font } from '../extras/core/Font.js';
import { FileLoader } from './FileLoader.js';
import { Loader } from './Loader.js';

class FontLoader extends Loader {
  constructor(manager) {
    super(manager);
  }

  load(url, onLoad, onProgress, onError) {
    const scope = this;

    const loader = new FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(scope.withCredentials);
    loader.load(
      url,
      text => {
        let json;

        try {
          json = JSON.parse(text);
        } catch (e) {
          console.warn('THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.');
          json = JSON.parse(text.substring(65, text.length - 2));
        }

        const font = scope.parse(json);

        if (onLoad) onLoad(font);
      },
      onProgress,
      onError,
    );
  }

  parse(json) {
    return new Font(json);
  }
}

export { FontLoader };
