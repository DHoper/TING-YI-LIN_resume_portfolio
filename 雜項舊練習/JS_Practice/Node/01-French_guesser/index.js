import {franc, francAll} from 'franc';
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const langs = require('langs');

const text = process.argv[2];//輸入法系語言
const iso = franc(text);
console.log(iso);
console.log(langs.where("3", iso));



