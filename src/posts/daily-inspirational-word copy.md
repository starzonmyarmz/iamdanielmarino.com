---
title: I Still Haven’t Made the Game
date: 2026-05-30
tags: post
---

Two weeks ago I wrote about [vibe coding a voxel editor](/posts/voxel-editors-kind-of-suck-so-im-vibe-coding-one/) because the existing ones kind of sucked. Roxel is now at v0.6.3.

## What’s in it now

The core editing experience is solid. Full color palette system, command palette, view-angle presets, a custom color picker with color-space support, flyby camera mode. The UI went through a canvas-first redesign with floating chrome, and a first-launch tour. It even auto-checks for updates.

It’s starting to feel like something I’d actually pay for.

## What’s ahead

The one thing blocking me from actively sharing it is macOS code signing. I’m waiting on an Apple Developer account to get that sorted.

Longer term, I want to build a plugin architecture. One of the primary goals for Roxel is to keep it simple — and a plugin system would let people bring their own features without bloating the core app for everyone who doesn’t need them. That’s probably not a 1.0 feature, but it’s where I want to take it.

## The detour became the thing

I started Roxel so I could make a CSS game. I still want to make that game. But somewhere along the way Roxel stopped being the detour.

That’s fine. Maybe it turns into something. Maybe it stays a hobby app I use myself. Either way — it’s [open source on GitHub](https://github.com/starzonmyarmz/roxel) and free on [itch.io](https://starzonmyarmz.itch.io/roxel) for Mac and Windows, and I’ve shipped more working software in the last two weeks than I expected — in a language I can’t write. Still a win.
