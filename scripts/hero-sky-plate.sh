#!/bin/sh
# Drop the black OMARCHY word from the hold frame.
# 1. Imagine-edit jump-source (car in the air) → hero-plate.jpeg (no car).
# 2. This script layers that plate over the original end frame through a
#    feathered box covering the word.

set -eu
root="$(cd "$(dirname "$0")/.." && pwd)"
bg="$root/public/assets/images/bg/home"
end="$bg/hero-end-logo.jpeg"
plate="$bg/hero-plate.jpeg"
mask="/tmp/omarchy-word-mask.png"
out="$bg/hero-end.jpeg"

ffmpeg -y -f lavfi -i "color=black:s=1920x1056" -f lavfi \
  -i "color=white:s=1500x430" \
  -filter_complex "overlay=210:313,boxblur=28:1" -frames:v 1 -update 1 "$mask"

ffmpeg -y -i "$end" -i "$plate" -i "$mask" \
  -filter_complex "[1:v]scale=1920:1056[plate];[0:v][plate][2:v]maskedmerge" \
  -frames:v 1 -update 1 -q:v 2 "$out"

echo "wrote $out"
