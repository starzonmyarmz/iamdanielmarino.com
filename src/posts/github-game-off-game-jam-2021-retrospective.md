---
title: GitHub Game Off 2021 Retrospective
date: 2022-02-19
tags: post
---

Recently, I completed the [GitHub Game Off](https://itch.io/jam/game-off-2021). With over 500 entries, this is the largest game jam I’ve been a part of. I had some lofty goals for this game, and I just about met them all. I’m extremely happy with how the game came out!

Like prior games I’ve made, I don’t tend to join a game jam unless I have some specific idea/mechanic I’d like to explore. I’d been wanting to tackle a mobile game for some time now while exploring motion/accelerometer mechanics.


## Mechanics

The theme for this jam was “bug”. I don’t remember how I arrived at the concept and gameplay, but the gist is: a fly mysteriously gets sucked into a phone. By tilting your phone (utilizing the phone’s motion/accelerometer sensors), you move the fly to avoid colliding with objects on the phone’s screen. Tilting your phone at steeper angles increases the fly’s velocity and speed. While relatively basic, I found it challenging to get the mechanics just right, and reprogrammed this mechanic several times.

The game consists of seven auto-scrolling levels, progressing in difficulty as you complete them. Each one is scripted to be about a minute long. While the scrolling is scripted, there is quite a bit of randomness sprinkled into each level such as the placement and dimensions of objects.

![trapped promo screen](/images/posts/trapped_cover.png)

The game is hard to play. Really hard. My play testers got frustrated quickly—especially with the first round of testing. I did quite a lot of tweaking based on their feedback. I simplified the levels by adding larger gaps between objects and slowing the scrolling down. Even with the adjustments it’s still hard to play, but not so hard that it’s unenjoyable.

I decided I was okay with the level of difficulty. I wanted a game that made you feel good about making progress. I’ve played through the entire game probably five or six times now (aside from rigorous testing throughout), and I can get through from beginning to end in about 20—30 minutes.


## Graphics

If you’ve seen the game before reading this, you might think I’m joking by calling the visuals “graphics”. Believe it or not, the choice of simplicity was purposeful. I intentionally used a handful of basic shapes and solid colors.

Each level resembles a popular mobile app (can you figure out which ones), and all the design is stripped down to each app’s bare essence. By keeping the design so minimal, the graphics doesn’t feel overly _iPhone_ or _Android_, so players can relate regardless of what kind of phone they use. Here are a couple of sample screenshots:

![trapped levels](/images/posts/trapped_levels.png)

I did receive a lower ranking on the game’s graphics, and that’s fair. I can understand why people would want something more high-fidelity. I even questioned my judgement on the decision to go low-fi a few times, but in the end I think it really does enhanced the game’s vibe and playability.

While the game play graphics are primarily generated with code, there is a single sprite! It’s the _fly_ character during the cut scenes. I wanted to try out using [Aesprite](https://www.aseprite.org/), so decided to make the fly in the pixel-art style.


## Audio

I got a little carried away with audio, and put way more effort into it than I had to—especially for a game jam. If I’m being honest, I had the most fun when I was composing and producing audio than doing anything else for this game.

I didn’t really intend to go all in with the jazz-style of music, but after writing the initial theme I was locked in. I started out composing a simple melody for the title screen. A few days later I had an album’s worth of music! The music is inspired by pianists like Vince Guaraldi and Danillo Perez. I love how they combine simple, playful, and whimsical-sounding melodies—with a little dissonance thrown in for good measure.

<iframe style="border: 0; width: 100%; height: 406px;" src="https://bandcamp.com/EmbeddedPlayer/album=1082942060/size=large/bgcol=ffffff/linkcol=eb4d55/artwork=none/transparent=true/" seamless><a href="https://danielmarino.bandcamp.com/album/trapped-soundtrack">trapped soundtrack by Daniel Marino</a></iframe>

I’m a lot more proficient using [Ableton](https://www.ableton.com/en/live/) and my [Arturia MiniLab MKII](https://www.arturia.com/products/hybrid-synths/minilab-mkii/overview) since my [last game jam](/posts/gamedevjs-jam-2021-retrospective/) and found it much simpler this time to produce music. In keeping with the minimalistic artwork style, I kept the instrumentation minimal as well: piano and drums only.


## Environment and Tooling

Like my other games, the game is developed with HTML, CSS, and JS. I’m most comfortable with this tooling environment, and enjoy pushing myself to learn and do new things with it.

I’ve been experimenting with creating generative art using JavaScript and the [P5.js library](https://p5js.org/). I wasn’t sure how it would work as a game engine, but decided to try it out. In addition to P5, I also used a couple of additional libraries to help with [scene management](https://github.com/mveteanu/p5.SceneManager) and [collision detection](https://github.com/bmoren/p5.collide2D). Some highlights working with P5:

- The output renders to a `<canvas>` element at 60fps, which makes the game quality pretty decent, and performant.
- You can get started very quickly because [the loop](https://developer.mozilla.org/en-US/docs/Games/Anatomy#building_a_main_loop_in_javascript) is handled automatically. There are also a ton of useful built in methods for creating and manipulating graphics.
- It has built-in event listening for screen touching and device rotation, which was pretty helpful in my case.

Despite those highlights, I honestly don’t know if I got as much mileage out of P5 to justify using it.

- I ended up having to create my own Class with various methods for drawing and manipulate shapes. This is mostly because I wanted to be consistent in how shapes were generated, as well as being able to easily set up consistent timings for shape manipulation.
- I ran into problem using P5’s vector manipulation methods, and used plain ‘ole vanilla JS to calculate and manipulate shapes.


## Developing a Browser-based, Mobile Game is Hard

I kind of knew going into making a mobile game was going to come with its own set of challenges, but I wasn’t prepared for how difficult some of them would be to work out:

- iOS Safari, for better or worse, has a huge market share on mobile devices. Not only that, all browsers—whether it be Chrome or Firefox or whatever—on iOS get stuck using the same Webkit rendering engine as Safari. Unfortunately, iOS Safari seems to be a little behind in some features that are implemented, making it difficult to work around some challenges.
- iOS requires [acquiring the user’s permission to access device rotation events](https://github.com/starzonmyarmz/trapped/blob/main/src/game.js#L39-L50)—which not only hinders the user experience, but also adds some complicated code to handle this. It should be noted that P5 doesn't handle this on any level, and just assumes permission is granted from the start.
- Itch.io doesn’t handle hosting browser-based mobile games very well. It also doesn’t help that neither iOS or Android make it easy to run cross-origin code. For various reasons working around this limitation is quite painful. In the end I published a QR code with a link to the game on Itch.io and published the actual game on GitHub Pages.
- Developing and testing a browser-based mobile game locally is frustrating and kludgy. It’s slower than normal desktop-based development, and debugging was very hard. To access my localhost on my phone I used [ngrok](https://ngrok.com/)  to tunnel my localhost to a public server. I would then use the public URL in Safari on my iPhone. I could inspect the DOM and check the console for errors using Safari on my Mac.


## Goals and Results

I mentioned at the beginning of this post that I had some lofty goals. They were (in no particular order):

- **Complete a mobile game**. Pretty sure I succeeded here!
- **Build the game without any assistance**. I did actually have a little help from my buddy, Brad with some of the finishing touches. That said, I did the vast majority of the development on my own, and I feel really good about that!
- **Rank in the top 10% of games for the game jam**. Overall, my game ranked 77th out of 526 submissions, which is about the top 15%. I’ll take it—especially for my first attempt at a mobile game. Also, I ranked 10th for *Audio* and 18th for *Innovation* which I think is awesome! You can check out [my submission](https://itch.io/jam/game-off-2021/rate/1291063) for the score breakdown and player feedback.

While I didn’t meet all my goals, I came pretty darn close. More importantly, I had a lot of fun with this game jam. I learned a lot and expanded my knowledge on using P5 as well as other various coding techniques.

Besides [Brad](https://github.com/braddunbar), I had help from other folks, and I’d be remiss if I didn’t thank them: [Matthew](https://matthewlettini.me/) and [Danny](https://twitter.com/dannywen) for play testing, as well as my kids for play testing and suggesting good ideas when I was feeling stuck. Lastly, my wife: not only does she play my games, but is very supportive, lets me vent about crappy API support, and inspires me to put everything I got into my work.

Be sure to give [trapped](https://trapped.iamdanielmarino.com) a play or check out the [source code](https://github.com/starzonmyarmz/trapped)!
