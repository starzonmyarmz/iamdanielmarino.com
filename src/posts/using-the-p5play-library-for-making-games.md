---
title: Using the p5play JavaScript Game Engine
date: 2024-01-15
tags: post
---

I was messing around with [p5play](https://p5play.org/) last week to experiment with a game idea, and was pleasantly surprised by how easy it is to use. It was designed to be intuitive for beginners, such as students. In under a half hour I had created some common basic mechanics! Check it out:

<p class="codepen" data-height="500" data-default-tab="js,result" data-slug-hash="WNmRzOK" data-user="starzonmyarmz" style="height: 500px; display: flex; align-items: center; justify-content: center; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/starzonmyarmz/pen/WNmRzOK">
  p5play</a> by Daniel Marino (<a href="https://codepen.io/starzonmyarmz">@starzonmyarmz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### What I Like

- It builds on top of [P5.js](https://p5js.org/). This means that I can leverage all the built-in features I'm already familiar with in P5. It even expands upon some built-in features in P5—like creating a new [Canvas](https://p5play.org/learn/canvas.html).
- It uses the same [Box2D physics simulator](https://piqnt.com/planck.js) that some popular games use. Some physics engines are a little floaty, while others are too constrained. This simulator has some really comfortable defaults out of the box.
- The documentation is easy to follow along, and there's a [Discord server](https://discord.gg/3UTbqUgmPF) where I can (and have) ask questions. I typically have gotten a response from the library maintainer, himself, within a couple of hours.

### What I Dislike

- Not everything is documented, and that's not necessarily a bad thing. However, there are some really handy properties and even methods available that I happened to come across by accident just from purusing the source code and outputting various p5play global methods to `console.log()`.
- The licensing is a [little weird](https://github.com/quinton-ashley/p5play-web/blob/main/LICENSING.md). In short: its free to use for open source projects, but for professional use you need to pay for a license. I'm not going to argue whether you should have to pay for a license or not, but its definately something to be aware of.

I'll definitely be keeping [p5play](https://p5play.org/) in my toolkit the next time I want to prototype some game mechanics or participate in a game jam!
