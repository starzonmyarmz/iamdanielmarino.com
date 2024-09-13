---
title: JS13K 2018 Retrospective
date: 2018-10-15
tags: post
---


In one of my weekly developer emails, I saw a link for [JS13KGames](https://2018.js13kgames.com/). I've always wanted to create a video game. I asked my JavaScript-whiz buddy, [Brad](https://github.com/braddunbar), if he was interested in building a game with me. Without hesitation, he said “Yes!”

### Concept

A couple of years ago I came up with the basic concept/mechanic of toggling layers on and off to create various platforming challenges. I had even sketched out several level designs, and cobbled together a super basic prototype using [Phaser.io](http://phaser.io/). I was pretty happy with this simple mechanic. On top of that our character movement would consist of basic platforming: moving left/right and jumping.

There are [other ideas](https://github.com/starzonmyarmz/js13k-2018/projects/1) we had early on such as moving platforms/spikes, enemies, variances in gravity, as well as an in-game timer, but we ended up punting on those due to time and size constraints. Aside from adding complexity to our code, I think having the constraints challenged us to explore more with level design - as well as simplifying game play.

### Art Style, Design, and UX

Originally, I envisioned the game having a pixel art style, but with the 13K and 30 day limits, I decided to simplify. Designing a minimum of 20 levels would take up quite a bit of time. Exploring pixel sprite and background designs would have prevented me from being able to create enough levels to make the game worth playing. I decided to stick with two colors.

I wanted to avoid using text to educate game mechanics. I took inspiration from countless video games (but specifically Super Mario World, Super Metroid, Megaman X), and started out by creating the first three levels that would introduce game mechanics one at a time. I then kept exploring various level designs until I had about six or seven solid levels.

![original idea about education](/images/posts/js13k2018-education.png "Original idea for educating game controls to player")

While Brad was developing the mechanics, I solicited the help of my son to help me design the character. It went through some variations, but the final character was pretty similar to what we started with. In my mind I could see his legs moving and his head bobbing. He originally had rounded corners, but that ended up making the `svg` output more complicated, so in the end we ditched them.

![character ideas](/images/posts/js13k2018-characters.png "Other character ideas")

I liked the idea of the _toggle_ concept being carried through all the various screens, and not just the levels. So I designed the title, end, and controller screens with this in mind.

![typeface](/images/posts/js13k2018-font.png "[Custom typeface](https://github.com/starzonmyarmz/js13k-2018/blob/gh-pages/refs/onoff.otf) designed for ONOFF")

### Music and Sound Effects

I procrastinated with sound for two weeks or so. At first I got hung up on the options available for creating music and sound effects, until I came across [TinyMusic](https://github.com/kevincennis/TinyMusic). I really liked the simplicity of it, that I was able to focus on music, not getting hung up on the plethora of styles and effects.

The [original track](http://jsfiddle.net/0k6tLnfd/8/) I wrote was more driving, but lacked personality. I hemmed and hawed for a week, then one morning I just started humming a really silly tune, and it felt just right for the game. The second part of that song (with the walking bass line) came a week later. I was experimenting to see if I could get chords [fade in and out](https://github.com/starzonmyarmz/js13k-2018/blob/gh-pages/src/sound.js#L327-L351). Once I got that working the bass line just worked itself out, and I had the second half to my song.

For sound effects, I had found some effects I really liked on [OpenGameArt](https://opengameart.org/) - however the file sizes were huge. No amount of resampling got them even close to 13K. So I ended up trying to _recreate_ those sounds using TinyMusic.

### Development

We didn’t think it was necessary to use `canvas`, and opted use `svg`. This allowed us to easily scale graphics, use CSS to flip the colors when the layers were toggled, as well as easily develop graphics. In a lot of cases, I hard coded graphics such as the [death animation](https://github.com/starzonmyarmz/js13k-2018/blob/gh-pages/index.html#L135-L159) or the death counter, and then Brad would step in and wire it up with JavaScript.

I ran every graphic I created through [SVGOMG](https://jakearchibald.github.io/svgomg/) which helped keep our SVG super lightweight. In some cases, I found it more performant to use plain old `rect`s or take advantage of SVG `pattern`s for the [numbers used](https://github.com/starzonmyarmz/js13k-2018/blob/gh-pages/index.html#L107-L118) in the death and level counter, as well as the [spikes](https://github.com/starzonmyarmz/js13k-2018/blob/gh-pages/index.html#L80-L93).

I left the decision to Brad whether we should roll our own game mechanics or use an existing library. We both felt it would be more fun to write our own. This also gave us a lot more control over the file sizes and code quality. Using ES6 made the vast majority of the code easier to write, and we didn’t end up having to polyfill anything.

For level design, Brad had created the ability to bootstrap levels quickly just by passing in an array of coordinates for the character, goal, and platforms (including the layer they should exist on). After getting a little burnt out on level design, I messed around with creating some dynamically generated levels.

We developed right up to the very end. Within the last 12 hours before the deadline we rolled out Gamepad support, the ability to share and play custom levels, and wrote another song to play when the game is completed.

### Tooling and 13k

Our tooling was minimal. We would run our JS, CSS, and HTML through minifiers - that’s it. We decided to build everything as minimal as possible from the beginning, so we didn’t really have to go back and rework anything to hit the 13k limit.

After building the game we were still far under 13k, so Brad decided to roll out a custom level editor! That actually turned out to be a huge help because it made it a lot faster to test out ideas, and generate level code that we could just paste into our game. We though it was so cool we decided to include it as a bonus with a day left before the deadline!

### Playtesting

Aside from having our kids play the game frequently (and they did!) we invited a few friends to play with about a week left in the competition. They felt that the game mechanics felt good, and were fairly easy to figure out. Looking back I wish we had people play it sooner - only because we were scrambling around with a few days left to finish building the game. If we had received more drastic feedback, we would have been in a really tight spot.

### Wrap Up

Brad and I had a blast working on the js13k this year! I’m really grateful to Brad and all his help, our friends who took the time to playtest and give us feedback, and especially our families who gave endless support, and endured hours and hours of that music loop!

If you haven’t yet, make sure you check out our game [ONOFF](https://js13kgames.com/entries/onoff)!
