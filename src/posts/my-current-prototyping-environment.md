---
title: My current prototyping environment
date: 2024-04-18
---

The other day I shared [why I prefer coding prototypes](/posts/why-i-still-prefer-prototyping-using-code/) rather than using design apps to create them. My prototyping environment has evolved over the years. I love to hear how others build prototypes, so I thought I’d share where I’m at now. Maybe you’ll find it useful.

## A single repository

I currently have a [single GitHub repo](https://github.com/starzonmyarmz/prototypes) housing all of my prototypes. I do this primarily so I don’t have to remember where any given prototype lives. They all live in the same place! Another benefit is if I pull in a library or some CSS component, I can reuse it in other prototypes without having to go out and grab it from the source again.

## My old setup

In the past I used [Sinatra](https://sinatrarb.com/) hosted on Heroku. Having Ruby and a basic server (Such as [Webrick](https://github.com/ruby/webrick)) in the backend was pretty nice:

- I could code up some fairly complex prototypes out with realistic url schemes.
- Gems! If I needed fake data, I could use the [Faker gem](https://github.com/faker-ruby/faker).
- If I wanted a table with a 100 rows, I could easily generate that with a super simple loop.

But it got clunky. Spinning up a new prototype wasn’t very efficient. Setting up the urls took time. Deploying to Heroku wasn’t always straight forward. Heroku also got rid of their free plan, and I didn’t want to go looking for a new service. Maybe I’m making excuses.

## A dumb server

Now I just use HTML, CSS (vanilla), and Javascript with no special backend. I don’t have Node.js running, and I don’t use a package manager like NPM or Yarn. To start a server I navigate to the prototype directory in iTerm, and run [Statikk](https://github.com/paulirish/statikk). Easy peasy. This setup requires no upkeep, so I can focus on actually prototyping!

I have a basic file structure for keeping prototypes separate. I typically use [Preact](https://preactjs.com/) for scaffolding. To `import`  Preact or other NPM packages I use [esm.sh](https://esm.sh/). When I push changes to the GitHub repo it’s deployed to GitHub pages. I can then share a public URL to folks that need to review the prototype.

## One glaring problem

There’s only one issue I’ve run into using this setup, and its not even related to the setup! The [Porchlight design system](https://porchlight.design/) (which we use at [Harvest](https://www.getharvest.com/)) doesn’t have it’s styles or components available to consume publicly via CDN. Womp womp.

I can get around the CSS issue. I end up having to copy the compiled CSS from the design system and paste it into a new file in my prototype environment. And I’m kind of out of luck with the JavaScript: I have to code these up from scratch. Although, I suppose I could copy the compiled components, and paste them into my prototype environment.

The easiest fix is probably to introduce a package manager, but I’d rather not. We have talked about making the design system’s CSS and components available via CDN–it’s just a matter of getting around to it.

## Prototype!

So that’s my current prototyping setup. Maybe it will help inspire you to setup your own prototyping environment. Whether you use code or a design app–you should prototype!
