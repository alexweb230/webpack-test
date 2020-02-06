
import * as $ from 'jquery';
import Post from '@models/Post';
import json from './assets/test';
import './css/main';
import imgTest from '@/assets/illustrator';

const post = new Post('test webpack', imgTest);

$('pre').html(post.toStr());

console.log(post.toStr(imgTest));
console.log(json);
