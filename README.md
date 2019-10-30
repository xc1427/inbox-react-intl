## Tutorial
https://www.freecodecamp.org/news/internationalization-in-react-7264738274a0/

## How to showcase
- `npm install` the project
- `npm start` will trigger _babel-plugin-react-intl_ to generate build/messages
- `npm run build:langs` will execute script util/translator.js and generate build/locales/data.json, which is the collection of messages of all babel plugin artifact.
- to add support for other language, modify locales/data.json file.