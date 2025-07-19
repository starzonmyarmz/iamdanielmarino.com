---
title: Vibe Coding and the Existential Dread of Progress
date: 2025-07-19
tags: post
---

Does anyone else hate the term _vibe coding_?

I’ve been pretty resistant to incorporating AI directly into my development workflow. I use it all the time to clean up emails, Slack messages, and blog posts (including this one). It’s helped me plan vacations, write my cover letter for [Planning Center](https://www.planningcenter.com/), and even gain insights from journaling. But coding? That felt like crossing a line.

At first, I confined AI to repetitive tasks—[formatting long word lists into arrays](https://iamdanielmarino.com/posts/daily-inspirational-word/), deciphering cryptic console errors, or exploring how to integrate Vite into a Rails codebase still using Sprockets. All helpful, but I steered clear of anything that touched “real” engineering.

Still, AI isn’t going anywhere. And as much as I hate admitting how much I rely on it, it genuinely makes my life easier. So I gave _vibe coding_ a shot. Spoiler: I’m sold—with a few caveats.


## Vibe Coding an Alfred Workflow

I’d played with basic [Alfred workflows](https://www.alfredapp.com/) before, using the built-in UI or tools like [Alfy](https://www.npmjs.com/package/alfy). But I had an idea for something more complex—and neither the time nor the motivation to learn how to build it from scratch.


### The Problem

At Planning Center, our design system has 300+ tokens (and counting). To grab one, I’d open our Storybook instance, scroll to the search bar, type in a few characters, click to copy, then return to my editor to paste it. Repeat that a few dozen times a day, and the friction starts to add up.


### The Solution

An [Alfred workflow](https://github.com/starzonmyarmz/pco-tapestry-tokens-alfred) that lets me search tokens via fuzzy matching, press Enter to copy, and paste directly—eliminating multiple steps and speeding up my flow.


## Using Claude Code

I’ve tried ChatGPT and GitHub Copilot. They both work well (though I find Copilot’s integration with VS Code a bit invasive). I’m not ready to pay out of pocket, so I started using Claude Code through Planning Center’s access.

Setup took less than 10 minutes. [Anthropic’s documentation](https://docs.anthropic.com/en/docs/claude-code/overview) is clear, and their tips on effective usage are actually helpful.


## Building the Workflow with Claude Code

I kicked things off with a prompt:

> I want an Alfred extension where I can enter “tt” followed by characters, and tokens from ~~URL redacted~~ will be shown using fuzzy search.

Claude generated a Python script… that didn’t work. It produced a workflow Alfred couldn’t import. So I responded with:

> The Alfred extension fails to import.

Claude replied something like, _“You’re right, let me fix that,”_ and, impressively, it did.

After about three hours of iterative prompts and debugging, I had a [fully functional Alfred workflow](https://github.com/starzonmyarmz/pco-tapestry-tokens-alfred) that:

- Stores design tokens as a JSON database
- Caches data locally
- Refreshes if unused for over an hour
- Fuzzy-finds tokens on input
- Displays color swatches for color-based tokens

I also used Claude to:

- Generate 100+ color swatches (since Alfred can’t use data URIs)
- Write a Bash script that builds the workflow with semantic versioning

I don’t know much Python, but I know enough to skim the output and feel confident in the structure. And because this was a small, siloed project, I wasn’t concerned about maintainability or codebase conventions.


## The Cost

Aside from the monthly AI access fee, the entire three-hour build process cost around $10 in usage tokens. That’s ~$3.33/hour—far below the value of my time. And now, every use of the workflow saves me 10+ seconds. That adds up quickly.

If I’d tried to build this from scratch, it easily could’ve taken 10+ hours and been half as effective. That’s not even accounting for generating the color swatch images.

I did spend about an hour trying to get Claude to scrape the tokens directly from the design system site, but that turned out to be unreliable. Still, the final solution works and required zero extra effort from the rest of my team.


## The Pros and Cons of AI in the Workflow

### Pros

- **Efficiency Boost**: Great at handling menial but necessary tasks—JSON formatting, token lookups, error decoding, etc.
- **Rapid Prototyping**: I built a working Alfred workflow in a single evening. Even if it were only a prototype, it would’ve been valuable.
- **Creative Leverage**: Designers and PMs can use AI to sketch out ideas and flows, helping engineers jump into development faster.

### Cons

- **Skill Stagnation**: Over-reliance on AI could erode problem-solving ability or deeper understanding of frameworks and languages.
- **Job Displacement**: AI is replacing some roles. At Planning Center, leadership has been clear AI won’t replace people—only support them. But the broader industry picture is less certain.
- **Environmental Cost**: Running large AI models consumes a lot of energy.
- **Price Tag**: Even if it saves time, AI access and usage can get expensive—especially if you’re footing the bill.


## So Why Do I Still Feel Icky?

It took me a while to name the feeling, but I got there: **I’m grieving the loss of what it means to be an engineer.**

I’ve spent over 20 years solving problems, building UIs, and turning ideas into code. I’ve always taken pride in being able to take a design and bring it to life. But now, what it means to be an engineer is changing—and that’s uncomfortable.

I don’t want to become just a prompt wrangler. But I also don’t want to be the person who gets left behind because they refused to adapt. The logic is clear: why pay one engineer for 10 hours of work when another can produce the same result in two with AI?


## Finding the Sweet Spot

I think the answer lies somewhere in the middle.

Engineers should still understand their craft—be able to reason through problems, write maintainable code, and build features from scratch when needed. But AI should be a tool we use intentionally to reduce toil and accelerate progress.

We don’t call it cheating when someone uses code completion. Why should this be any different?
