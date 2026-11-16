---
title: Patina
blurb: A polysynth plugin and Mac app, written in Rust. It’s built around the MiniLab keyboard on my desk, with pages that mirror its knobs and a skeuomorphic look inspired by the OP-1.
icon: ../../assets/images/projects/icons/patina.svg
category: audio
year: 2026
platforms: VST3, CLAP, Mac
url: https://github.com/starzonmyarmz/patina/releases/latest
links:
  - { label: Download, url: "https://github.com/starzonmyarmz/patina/releases/latest" }
  - { label: Source on GitHub, url: "https://github.com/starzonmyarmz/patina" }
image: ../../assets/images/projects/patina.jpg
imageAlt: Patina’s editor, with an oscilloscope, preset name and two rows of knobs in a light, OP-1-style look
---

Patina started as a synth built for one person on one Mac: me, in REAPER, with an Arturia MiniLab on the desk. Each page of the editor (Osc, Shape, Filter, Mod, FX, Macro and Arp) maps to the MiniLab’s two rows of eight knobs, so I can play and tweak without reaching for the mouse.

Under the hood there are 16 voices with up to 8 unison each, filters, envelopes, LFOs and a modulation matrix, plus a full effects chain: distortion, bitcrush, chorus, delay, reverb, EQ, compression and a limiter. LFOs, the delay and the built-in arpeggiator can all sync to the host’s tempo.

It ships with a browser of factory presets, each with eight macros named for what they actually do. Editing a factory preset never overwrites it; saving creates your own.

Patina also runs as a standalone Mac app, and it’s where the build and release setup behind my other plugins came from.
