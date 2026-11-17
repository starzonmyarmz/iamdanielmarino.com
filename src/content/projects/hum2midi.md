---
title: hum2midi
blurb: Your voice memos are full of songs. This gets them out. A command-line tool that turns hummed or sung recordings into MIDI you can drop into any DAW.
icon: ../../assets/images/projects/icons/hum2midi.svg
category: audio
platforms: Mac, Windows, Linux
url: https://starzonmyarmz.itch.io/hum2midi
links:
  - { label: Get it on itch.io, url: "https://starzonmyarmz.itch.io/hum2midi" }
  - { label: Source on GitHub, url: "https://github.com/starzonmyarmz/hum2midi" }
image: ../../assets/images/projects/hum2midi.png
imageAlt: hum2midi in a terminal, turning a voice memo into a piano roll of notes
---

Hum a melody into your phone, then point hum2midi at the recording. It follows the pitch of your voice, splits it into notes and writes a MIDI file next to the original. It works on any monophonic recording, so a whistled line or a single-note guitar part works too.

Install it with Homebrew:

```sh
brew install starzonmyarmz/tap/hum2midi
```

Then run it on as many files as you like:

```sh
hum2midi ~/Downloads/*.m4a
```

Options let you set a fixed tempo, fold stray octave jumps back into place, and quantize the notes to the grid. It needs `ffmpeg` installed.
