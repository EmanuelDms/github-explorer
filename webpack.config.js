// webpack roda dentro do node.js, sendo necessário usar require
const path = require("path");

module.exports = {
  // * arquivo inicial da aplicação
  // ? __dirname: diretório onde se encontra o arquivo atual
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    // ? Por padrão webpack interpreta arquivos .js, mas não .jsx
    extensions: [".js", ".jsx"],
  },
  // * configurações de como a aplicação vai se comportar ao importar cada um dos tipos de arquivos
  module: {
    rules: [
      {
        // ? Recebe expressão regular. Nesse caso, para dizer se o arquivo é .js ou não
        // ? /\: barra invertida serve para fazer um escape de caractere
        test: /\.jsx$/,
        // * exlui todos os arquivos da pasta node_modules, pois todos ele devem ser prontos para o browser ler
        // * quem deve fazer o build dos arquivos presentes na node_modules deve ser as próprias bibliotecas
        exclude: /node_modules/,
        // * integração entre babel e webpack
        use: "babel-loader",
      },
    ],
  },
};
