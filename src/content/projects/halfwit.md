---
title: Halfwit
blurb: A fake bass player for two-piece bands. It builds a bass part from your guitar, one octave down, and sends it out its own output so it can go to its own amp while the guitar carries on untouched.
icon: ../../assets/images/projects/icons/halfwit.svg
category: audio
platforms: VST3, CLAP
url: https://github.com/starzonmyarmz/halfwit/releases/latest
links:
  - { label: Download, url: "https://github.com/starzonmyarmz/halfwit/releases/latest" }
  - { label: Source on GitHub, url: "https://github.com/starzonmyarmz/halfwit" }
image: ../../assets/images/projects/halfwit.jpg
imageAlt: Halfwit, a mustard-yellow stompbox with level, drive, tone and blend knobs, a feel toggle, an output selector, a gate panel and a footswitch
---

Halfwit is a digital take on the old flip-flop octave-divider pedals, not a pitch shifter. Single notes and riffs track tightly; chords turn to mush, and that’s part of the sound.

It listens for each note’s pitch and flips a square wave at half that frequency, carefully enough that string noise and the low strings’ strong harmonics don’t throw it off. A gate keeps the bass quiet between notes, and Dynamics makes it follow how hard you play.

- **Drive**, **Tone** and **Level** shape the bass.
- **Feel** switches between a raw square wave and a smoother, rounder one.
- **Blend** and the **Output** selector decide what goes where. By default the guitar leaves the main output and the bass leaves a separate Bass output.
