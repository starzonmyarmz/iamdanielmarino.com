---
title: Daily Inspirational Word
date: 2024-05-28
tags: post
---

Over the past couple of years I’ve gotten into journaling. Recently I’ve been
using a method where you’re given a single inspirational word as a prompt, and
go from there. Unfortunately, the process of finding, saving, and accessing
inspirational words was a bit of a chore:

1. Google a list of “366 inspirational words”.
2. Get taken to a blog bloated with ads and useless content all in an effort to
   generate SEO cred.
3. Copy/paste the words into Notion.
4. Fix how the words get formatted becasue Notion is weird, and I have OCD about
   formatting text.

While this gets the job done, I felt like there was room to make this a more
pleasant experience. All I really wanted was a small website that serves a
single inspirational word on a daily basis without cruft or ads. This would
allow me to get the content I want without having to scroll through a long list.
I also don't want to manage or store the list of words. Once I've curated a list
of words, I want to be done with it.

## Creating a microsite

I love a good microsite, and so I decided to create one that takes all the chore
out of obtaining a
[daily inspirational word](https://starzonmyarmz.github.io/daily-inspirational-word/).

![Daily Inspirational Word screenshot](/img/daily_inspirational_word.jpeg)

The website is built with all vanilla tech, and doesn’t use any frameworks! It’s
nice and lean, and it’s footprint is only 6.5kb.

### Inspirational words

While I’m not a huge fan of AI, I did leverage ChatGPT on obtaining 366
inspirational words. The benefit to ChatGPT was being able to get it to return
the words as an array—cutting down on the tedium of having to convert the words
I already had into an array. The words are stored in it’s own JSON file, and I
use an async/await function to pull in the words, and then process the data upon
return.

## Worth the effort

I find these little projects fun and exciting because the scope is super tight,
and makes for a great opportunity to learn new things. It’s definitely an
overengineered solution to my problem, but it is a much more pleasant
experience. And perhaps it will serve other people as well.
