---
title: Gamedev.js Jam 2021 Retrospective
date: 2021-04-30
tags: post
---

Recently, I participated in the [Gamedev.js Jam 2021](https://gamedevjs.com/jam/2021/): a 13-day competition to build a game that can run on the Web in a browser without extra plugins. This year’s theme for the competition was “mirror”, which could interpreted however participants chose. I had an itch I wanted to scratch, and the timing was right, so I decided to join.

You’d think JavaScript would be necessary to make an HTML5 game, but the [Internet has shown us](https://codepen.io/collection/AKkZro?cursor=ZD0wJm89MCZwPTEmdj00) _it is_ possible to make simple games without JavaScript. I wanted to see just how far I could take this limitation—especially in an environment where it is competing against other games.

## Game Concepts
[Hiero](https://starzonmyarmz.itch.io/hiero) is the third game I’ve made (the first by myself), and by now I should have some sort of process to making a game, right? Well… I don’t really. So far, the process has been different for every game.

![Hiero Title Screen](/img/hiero-title.jpg)

In my experience, working on various aspects of a game (artwork, sound, etc…) greatly influences the other aspects of the game, so I find myself ping ponging around. Over the course of 13 days, I ended up implementing three core concepts into Hiero.

1. **Complete 15 puzzles within a short timeframe.** Not really much to say about this other than the earlier puzzles start out pretty easy. This teaches the player how the game is played. Over time the puzzles ramp up in difficulty. To keep things fast-paced, the game is short.
2. **To complete a puzzle you have to find the mismatched shape.** Each puzzle contains three to seven shapes. When hovering over a shape, a “mirrored” version of the shape is shown underneath. The catch is, in each puzzle one of the mirrored shapes doesn’t match. In some cases it’s a completely different shape, while in others it’s a very similar shape with a slight modification. This not only satisfied the “mirror” theme requirements, but also seemed to be a different and slightly-more challenging take on the classic which-one-doesn’t-belong concept.
3. **You can only make three mistakes.** This was a last minute addition to Hiero. Without it, the game can be cheesed by spamming clicks on the shapes until solving a puzzle. This adds an extra challenge of forcing the player to be judicious with their selections.

![Hiero Game Play](/img/hiero-gameplay.jpg)

## Mechanics
As mentioned earlier, I didn’t want to use any JavaScript. My game is primarily built around two CSS mechanics: checkboxes with insane selector magic to update the game’s state, and an in-game timer created with an animation delay. The resulting code is in no-way elegant! It’s quite messy, convoluted, and slightly laggy. The CSS weighs in at roughly 60K!


### Checkboxes

Most interactions are triggered with an HTML checkbox. Take this example:

```html
<input type=“checkbox” id=“foo”>
<label for=“foo”>Interactive element</label>
<div>Hidden element triggered by checkbox state</div>
```

We [visually hide](https://github.com/starzonmyarmz/gamedevjs-jam-2021/blob/main/sass/_base.scss#L30-L35) the `<input>` element using CSS, but we can still interact with it by clicking on a corresponding `<label>`. This works so long as the `for` attribute matches the `<input>`s `id` attribute. The input returns a checked/unchecked state, and if we keep these elements as siblings (as opposed to parents/children) we can use this state to trigger other elements using CSS:

```css
div {
	display: none;
}

#foo:checked ~ div {
	display: block;
}
```

Now this is a highly simplified example. I’m combining this checkbox functionality with CSS animations to time certain events such as scenes being loaded or triggering sound effects. Very little HTML is nested, and most elements are siblings to one another. One of the challenges was implementing the layout/design while keeping the HTML mostly flat. If I had nested elements a certain way, they wouldn't have been selectable with CSS.

### Time Limit

When the player starts the game, it kicks off the [losing scene animation](https://github.com/starzonmyarmz/gamedevjs-jam-2021/blob/main/sass/_lose.scss#L36-L37) with a 78-second delay. The only way to pause/stop the animation is to [match the CSS selector](https://github.com/starzonmyarmz/gamedevjs-jam-2021/blob/main/sass/_transitions.scss#L40-L55) that determines if you beat the 15th puzzle, which simultaneously triggers the winning animation. Controlling animations this way is achieved using the `animation-play-state` CSS property.

### Triggering Sound

Setting an `<embed>` element to `display: none` will prevent it’s content from loading until it’s  `display` property is reverted. So by setting an `<embed>` source to a sound file, I was able to use this to load sound on demand. However, once the content is loaded, it’s here to stay. You can’t hide/unhide it to make it play again, stop it from playing, or even loop it. This trick also does not work with `<audio>`, `<video>`, or `<iframe>` elements.

I was able to use the same checkbox mechanics above, and in some cases, an element’s  `:hover` state to change an `<embed>`s `display` property. These constraints made it challenging to work with sound, but I am very happy with how it came out.

## Artwork

I knew I was going to need a decent amount of artwork for matching shapes—on top of the other game-supporting graphics. By chance, I discovered that there are a ton of Hieroglyphs available as unicode characters. This spearheaded the visual direction, and adds to the game’s ominous atmosphere.

As I sketched out ideas for the interface, the more I liked the idea of using my personal art style which combines hand-drawn illustrations and digital painting. As I started putting all the pieces together it started feeling a bit like a cartoon. This inspired my use of [Kalam](https://fonts.google.com/specimen/Kalam#standard-styles) for the title screen. I wanted to use something a little more legible for the interface text, and landed on [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) which is inspired by geometric sans serif designs from the 1920s. To really help seal the deal on the old-school cartoon vibe, I added the film-grain overlaying textures, using CSS animation to [shift the texture around](https://github.com/starzonmyarmz/gamedevjs-jam-2021/blob/main/sass/_base.scss#L128-L135).

In my opinion, this game would have worked just as well without the mirror graphic. It certainly would have simplified development not having to incorporate it! However, it really helps to drive the jam’s theme, so why not. It also gave me an excuse to mess around with CSS 3d transforms and perspective which isn’t something I get to do too often.

The last thing I’d like to talk about in regards to the artwork is the “tunnel vision” gradient that occurs as you near the end of the time limit. This was an idea my daughter had while play testing for me. It really helps simultaneously create tension, panic, and focus. This was implemented at the last minute using a CSS `radial-gradient` and [animating it’s appearance](https://github.com/starzonmyarmz/gamedevjs-jam-2021/blob/main/sass/_base.scss#L139-L172).

![Tunnel Vision Gradient](/img/hiero-gradient.jpg)

## Sound Design

In the past, I've used JavaScript-powered, chiptune-styled sound. But that wouldn't really match the art style or ambiance. Also, I wanted to try something new!

The limitations for triggering sound created some challenging conditions for creating sound. I couldn’t always control when the player would trigger a scene transition. Syncing chord progressions, rhythm, and melodies together was practically impossible. My approach was to keep the sound atmospheric in a way where sounds could be independently layered.

The result was a bass layer of a single chord being held while randomly fluctuating effects on it. Next, a percussive track is layered on top when the player instantiates the game play. 30 seconds in the percussive track starts having echo effects slowly applied to help build intensity and uneasiness. Finally, a game over sound is layered in.

## Tools

I’ve become a big fan of [Eleventy](https://www.11ty.dev/) since using it for my blog, and ended up using it to generate the game. It makes life so much easier than having to hand code every puzzle. With Eleventy, I have a [JSON file](https://github.com/starzonmyarmz/gamedevjs-jam-2021/blob/main/src/_data/puzzles.json) with all the puzzles, an [Nunjucks](https://mozilla.github.io/nunjucks/) [puzzle template](https://github.com/starzonmyarmz/gamedevjs-jam-2021/blob/main/src/index.njk#L25-L40), and Eleventy just spits out the final HTML. One could argue that I’m using JavaScript by creating my game using Eleventy and Nunjucks, but I’m really just using those tools to optimize my workflow. The final output is HTML and CSS.

I used [Sass](https://sass-lang.com/) for authoring CSS. I don’t always use Sass because I find the overhead isn’t always worth the benefits. However, in this case I really took advantage of Sass loops and logic statements which made it a lot faster/easier to generate a lot of the selector magic I shared earlier.

I use any paper and pencil I can find to illustrate, and then ink those with [Microns](https://www.dickblick.com/products/sakura-pigma-micron-pen/). Scan them in with my phone, and send them to my computer where I use [Pixelmator](https://www.pixelmator.com/pro/) to paint and optimize images.

To create all the sounds, I used a [MiniLab MKII](https://www.arturia.com/products/hybrid-synths/minilab-mkii/overview) midi controller by Arturia with [Ableton Live](https://www.ableton.com/en/live/), as well as [Audacity](https://www.audacityteam.org/) to refine the sounds a bit. Creating sound for this game was a completely different experience for me compared to [ONOFF](https://js13kgames.com/entries/onoff), and I absolutely loved it! First of all, using a midi controller and Ableton are brand new tools for me. I spent two or three days doing nothing but messing around with sound and learning how to use Ableton. I really do see myself taking advantage of these tools in  future projects!

The source is [hosted on Github](https://github.com/starzonmyarmz/gamedevjs-jam-2021), and I’m using a GH workflow that was shared with me by one of the other developers in the jam which generates a ZIP file of the game and assets, and uploads it to [Itch.io](https://itch.io/jam/gamedevjs-2021/entries) where the game jam and games are hosted.


## Nice to Haves
There are two primary things I really wish I could have put in the game, and would have had I not restricted myself from using JavaScript: a restart button on the end scenes, and the ability to randomize puzzles. The later would have added a lot more replay value. At the same time, it doesn’t bug me too much because I like the fact that everyone can beat the game after playing it a handful of times from memorizing the puzzle.

I suppose another minor _nice to have_ would have been a counter letting you know how many strikes you have. That would have been easy enough to implement, but didn’t because I didn’t think it was too hard to keep track of strikes, nor did it add a lot of value by showing you those strikes.


## Also…
What I haven’t mentioned yet is my son also joined the game jam! He’s been learning [Unity](https://unity.com/) and [Blender](https://www.blender.org/), but has struggled to complete a full game. I suggested he work with me to get some experience.

After I shared my game idea, he decided to [go it alone](https://twitter.com/starzonmyarmz/status/1381928874272030722?s=20)! We had a lot of fun pinging ideas of of each other, sharing each others pain and frustrations, and play testing! I’m very happy with how his game, [Mirror Madness](https://glassedgmr.itch.io/mirror-madness) came out, and am very proud of him.


## Wrap Up

Heiro was ranked 11th out of 88 submitted games. I was hoping for top 10, but I'm not going to complain—especially since the game only uses HTML and CSS mechanics! You can also check out the [full score breakdown](https://itch.io/jam/gamedevjs-2021/rate/1007795), if you feel so inclined. I’m extremely happy with how [Hiero](https://starzonmyarmz.itch.io/hiero) came out—especially given the personal challenge of not using JavaScript! Thanks for everyone who played, and scored my game.

I’d like to thank my daughters for play testing and being brutally honest when I asked for feedback. They gave me great ideas and pushed me to make Hiero as good as it is. My son, for coming along for the ride for me. And my wife, for putting up with the shenanigans of her middle-aged husband, and for challenging me to always do my best.

I don’t know when I’ll make my next game, but the ideas are already brewing!
