---
title: Why I Still Prefer to Prototype Using Code
date: 2024-04-16
---

There are several design apps available at a product designers disposal, and I’ve used several of them over the years. I think these days, most everyone is using Figma, but whatever app you’re using—most of them typically have some sort of prototyping feature. Typically they have required very little coding to get a prototype up and running.

Despite the advances in the ability to prototype using design tools, I still prefer to use HTML, CSS, and JavaScript.

## Greater Flexibility

I find myself needing much more flexibility than what prototyping in Figma offers. I think it’s cool that they’re regularly adding features to make prototyping more flexible, but it’s becoming so complicated and time consuming to figure out. A lot of the new features that Figma has been adding—like variables—is essentially coding! It doesn’t really simplify or speed things up for me. At some point there’s usually a moment where I think this would have been faster if I had just built this prototype in code.

When animating designs in a prototyping tool, there’s only so much control over how the transitions work or what they look like. With CSS and JavaScript, I have complete control over how a design animates or transitions.

## Safer Portability

When I think of portability, there’s a couple of things that come to mind: being able to easily share a prototype with someone else, and being able to access a prototype regardless of the design tool I’m using.

When I’m sharing a prototype with someone I like knowing that I can send them a URL that won’t break—at least theoretically. I get that Figma has URLs to prototypes, but I don’t own or have control over that URL. What if Figma changes the URL scheme someday? Would that happen? Probably not, but I also don’t have to worry about it if I own/control the URL.

Right now I use Figma. I used to use Sketch, and never thought I would stop using it. I don’t pretend to believe that some new design tool will come and replace Figma some day. If I decide to up and leave Figma, I’d prefer not to have to leave all my prototypes behind.

## Learning and Experimentation

Prototyping with HTML, CSS, and JavaScript is a great way to test out new features or frameworks. Through prototyping I’ve learned how to use Flexbox/Grid, [Eleventy](https://www.11ty.dev/), [Sinatra](https://sinatrarb.com/), [P5.js](https://p5js.org/), [Preact](https://preactjs.com/), and a plethora of various little CSS properties or JavaScript methods and micro libraries. Its also a good way to stay on top of whats new and trendy, and try out not-quite-ready-for-primetime features.

## A More Realistic Experience

When I use a prototype made in code verses Figma, the coded version feels more real: the way you interact with it, being able to actually type in a text input, being able to use and experiment with more complex interactions. I also typically tend to discover other interactions that go beyond the happy path, and can account for those before engineers discover them while building out the actual feature. States like validation and error, what happens when there’s no data to show, and other uncommon scenarios.

## Design Apps Still Have Their Place

I think design apps have come a very long way over time, and it is very convenient to be able to prototype in the same app you’re doing your designing in—especially if you’re not comfortable with coding. And there are times when I will use Figma prototyping. If I have a simple interaction that doesn’t require a lot of user input or too many frames, then prototyping in Figma is relatively quick and painless. But once I go beyond a handful of interactions, it typically pays off in the long run to just use code.
