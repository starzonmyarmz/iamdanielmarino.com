---
title: Voxel editors kind of suck, so I’m vibe coding one
date: 2026-05-14
tags: post
---

## How I got here

I’ve been working on a new CSS-only game idea, and finally settled on voxel-like artwork. But building voxels in HTML/CSS isn’t that fun. I was vibe coding a web-based editor to go along with it, but it started getting sluggish and complicated to use. I more or less abandoned it in favor of using a real voxel editor to create the artwork — I figured I’d export the work and use AI to convert it to HTML/CSS.

## The voxel editor landscape is rough

I tried a handful of voxel editors: MagicaVoxel, Goxel, and Voxelator.

The first thing I learned is that it’s apparently required for a voxel editor to have “oxel” the name.

The second thing I learned is that voxel editors kind of suck. The UI is either too complex or too unintuitive to learn. [Goxel](https://goxel.xyz/) was the closest to _easy-to-use_, but it died while exporting my file. Not great.

Also, I’m on a Mac. None of those titles feel native — they all feel like Windows apps in a wrapper. That’s a deal-breaker for me. I’m used to polished software like [Figma](https://figma.com), [Affinity](https://www.affinity.studio/), [Sketch](https://www.sketch.com/), [Zed](https://zed.dev/), and [Retcon](https://retcon.app/). I want software that feels native, looks good, and is smooth. I really struggle to use anything that’s less.

## Enter Roxel

So I’m taking a detour from the game. I’m now vibe coding a voxel editor called **Roxel**, and [I’m doing it in the open](https://github.com/starzonmyarmz/roxel).

![Roxel](/images/posts/roxel.jpg)

Rust is fast, and you can build good-looking native apps with it for Mac and Windows ([Zed](https://zed.dev/) is a great example). The stack ended up being Rust + [Bevy](https://bevy.org/) + [egui](https://www.egui.rs/) — or so Claude tells me.

## On vibe coding something you can’t write

Here’s the honest part: I can’t write Rust. But I can _review_ Rust — and it turns out that’s enough.

I’ve got Claude Code running in a terminal in the background most of the day. I’ve been in the game long enough to know what quality software looks and feels like. I know what makes a good codebase: lean, simple, tested, CI, the usual. I’ve used enough design software to know what an efficient workflow feels like — the tools, the layout, the UI, the UX.

That taste is the thing I’m actually bringing to the project. The Rust is just the medium.

## Where it’s headed

It’s been a few days of vibing, but I’m impressed enough with how it’s coming along that I really feel like this app has wheels. Claude and I worked on building out a logo, identity, and branding together. I think it could be a solid contender for the indie or hobby designer.

But I’m not putting pressure on myself. I’m building it for me, so I can make a single game. Maybe it’ll turn into a viable app. Maybe I’ll find a niche. Maybe I’ll find the one or two things other voxel editors don’t have.

Either way — I’ve got a working voxel editor on my Mac that I didn’t have a week ago. That’s already a win.
