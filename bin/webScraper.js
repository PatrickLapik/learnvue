import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if(!fs.existsSync('cache')){
    fs.mkdirSync('cache');
}

let baseUrl = "https://www.gocomics.com/";
let link = "garfield/2024/03/18"


for(let i = 1; i<10; i++){
    let cacheName = link.split("/").join("-");
    let cacheFile = `cache/${cacheName}.html`;
    let data;
    if(!fs.existsSync(cacheFile)){
        await sleep(1000);
        let res = await axios.get(baseUrl + link);
        data = res.data;
        fs.writeFileSync(cacheFile, data);
    } else {
        data = fs.readFileSync(cacheFile);
    }
    const $ = cheerio.load(data);
    let img = $('a.js-item-comic-link>picture>img');
    console.log(img.attr('src'));
    let previousComic = $('a.js-previous-comic');
    link = previousComic.attr('href');
}