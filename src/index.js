import Post from './Post';
import json from './assets/test';
import './css/main.css';
import imgTest from './assets/illustrator.png';

const post = new Post('test webpack', imgTest);

console.log(post.toStr(imgTest));
console.log(json);
