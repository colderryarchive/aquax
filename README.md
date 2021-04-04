# aquax
A npm package that you can say a wrapper of other APIs and including other useful functions that helps you especially with your discord bot codes.

<div align="center">
  <p>
    <a href="https://nodei.co/npm/aquax
/"><img src="https://nodei.co/npm/aquax.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>


## ✈ Import

### NodeJs
```javascript
const aquax = require("aquax");
```
### ES6
```javascript
import aquax from "aquax";
```



---

## 🍀 Anime

---
## Setup
```javascript
const aquax = require("aquax");
const anime = aquax.Anime;

client.on('message', async message => {

  if (message.content === "a!hug") {
    
    let hug = await anime.hug();

    message.channel.send(hug);
  }
})
```
# Documentation

- ## Hug
```javascript
let hug = await anime.hug();

message.channel.send(hug);
```
- ## Waifu
```javascript
let waifu = await anime.waifu();

message.channel.send(waifu);
```


---
## 🎲 Random
---

## Setup
```javascript
const aquax = require("aquax");
const random = aquax.Random;

client.on('message', async message => {


    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
    if (command === "8ball") {

        let answer = random.eightball();

        let question = args[0];
        if (!question) return message.channel.send("You have to give a question");

        message.channel.send(`Question: ${question}\nAnswer: ${answer}`);
    }
})

```
# Documentation

- ## 8ball
```javascript
let eightball = await random.eightball();

message.channel.send(`Question: ${question}\nAnswer: ${answer}`);
```

### More coming soon!
