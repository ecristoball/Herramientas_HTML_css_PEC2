// posthtml.config.js
module.exports = {
  plugins: {
    'posthtml-include': {
      root: __dirname // Establece la raíz para encontrar los archivos a incluir
    }
  }
};
