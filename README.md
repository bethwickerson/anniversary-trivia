# Peter & Marilyn Wickerson · 60th Anniversary Trivia

A full-screen, landscape trivia game built for the Wickerson 60th wedding
anniversary party. On the start screen you choose how it plays, then it shows
each question and reveals the answer.

## Two ways to play (pick one on the start screen)

- **Play automatically**: it runs on a timer, with a pause to think on each
  question, then the answer, all on its own. Good for hands-off.
- **I'll tap to advance**: nothing moves until you tap. You control the pacing,
  so tap for the answer, tap for the next question. Great from your phone.

## How to run it at the party

1. Copy this whole folder onto the device that drives the big screen.
2. Double-click **`index.html`** and it opens in any web browser (Chrome, Edge,
   Safari, Firefox). No internet needed.
3. Pick **Play automatically** or **I'll tap to advance**, then press **`F`**
   for full screen.

> Tip: turn off the screen saver / sleep so the display doesn't dim mid-game.

### Running it from your phone

The game works on a phone browser too. To put it on the big screen while you
control it from your hand, mirror your phone to the TV/projector (AirPlay to an
Apple TV, a Chromecast, or a Lightning/USB-C-to-HDMI adapter), open the game on
your phone, choose **I'll tap to advance**, and tap through at your own pace.

## Controls

On-screen buttons appear at the bottom while playing: **←** back, **⏸** pause
(automatic mode only), **→** next. You can also **tap anywhere** on the screen
to advance. If you have a keyboard:

| Key | Action |
| --- | --- |
| `Space` | Pause / resume (automatic mode) |
| `→` | Next |
| `←` | Back |
| `A` | Reveal the answer now |
| `F` | Toggle full screen |
| `R` | Restart from the beginning |

## The questions

20 easy, fun questions all about **1966**, the year Peter and Marilyn married,
tuned for a Canadian audience: world events, Canada, TV and film, music, a
science discovery, an invention, a bit of painting, and a couple of 1966
baseball facts, all mixed together.

To edit, reword or add questions, open `index.html` and look for the
`QUESTIONS` list near the top of the `<script>` section.

## Adjusting the automatic timing

These control the **Play automatically** mode only (in tap-to-advance mode you
set the pace yourself). Open `index.html` and edit the `CONFIG` block at the
top of the script:

```js
const CONFIG = {
  thinkSeconds:  20,  // seconds to think about each question
  answerSeconds:  9,  // seconds the answer stays up
  titleAutostart: 0,  // 0 = wait for the start screen; e.g. 5 = auto-start
};
```
