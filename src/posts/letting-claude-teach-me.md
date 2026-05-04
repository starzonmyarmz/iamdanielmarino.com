---
title: Letting Claude Teach Me
date: 2026-05-04
tags: post
---

Now that I use AI regularly to help write code and complete tasks, I find myself in a position where I’m not learning as much as I used to. That feels a bit crummy.

Fairly often, Claude writes code I don’t fully understand. For example: I know enough TypeScript to _be dangerous_, but I’m definitely not an expert. Recently I had Claude take some typing I thought was overcomplicated and drastically simplify it. The new version was clearly better — I just couldn’t tell you _why_. So I asked Claude to explain it in simple terms. Sure enough, it did.

I guess that’s a silver lining to using AI: it can at least explain why it did what it did. A coworker mentioned he has Claude write one-off explanations with examples whenever this happens, and I liked that idea. So I built a [skill](https://github.com/starzonmyarmz/dotfiles/tree/main/claude/.claude/skills/til) around it. The skill looks at my uncommitted code, breaks it down, and writes a short blog article for me to read. I’m a fan of [Josh Comeau’s blog](https://www.joshwcomeau.com/) and the way he uses interactive examples to teach a concept, so I made that part of the skill too — Claude generates interactive examples alongside the explanation, then packages everything up in a small Vite environment.

The first iteration was expensive to run. At least 3 minutes, and roughly 10K tokens. I’m fine burning tokens, but I’m also thrifty 😬. The second iteration kept the Vite environment and styles already wired up, so Claude only had to write the article and the examples. That brought it down to about a minute and 7K tokens. Better — though I’d still like to get the token usage lower.

The blog format is great, but it’s a lot of work (for Claude) to generate all of this just to delete it when I’m done reading. It’d be nice to have these articles persist somewhere I could revisit later, or share with other people. That brought me to my current iteration.

It’s an [Astro project](https://github.com/starzonmyarmz/til) that lives on GitHub. The skill works roughly the same way — review uncommitted code, generate a post complete with interactive examples — but now it publishes to a [TIL subdomain](https://til.iamdanielmarino.com/) where I can read the articles at my leisure or pass them along.

It’s all vibe coded, and that feels appropriate. I’m up front about it on the site itself: _Things Claude changed that I didn’t understand — explained… by Claude._ I’ll probably keep tinkering to bring the token usage down further, but it was a fun project to put together, and I’m happy to let Claude teach me what it’s doing.
