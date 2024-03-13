import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync("cache")) {
  fs.mkdirSync("cache");
}

for (let i = 2905; i > 2895; i--) {
  let cacheName = `cache/${i}.html`;
  let data;
  if (!fs.existsSync(`cache/${cacheName}`)) {
    await sleep(1000);
    let res = await axios.get(`https://xkcd.com/${i}/`);
    data = res.data;
    fs.writeFileSync(cacheName, data);
  } else {
    data = fs.readFileSync(cacheName);
  }
  const $ = cheerio.load(data);
  let img = $("div#comic>img");
  console.log(img.attr("src"));
  console.log(img.attr("title"));
  console.log(img.attr("alt"));
}
