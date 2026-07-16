# Peter & Marilyn Wickerson · 60th Anniversary Trivia

A full-screen, landscape trivia game built for the Wickerson 60th wedding
anniversary party. It plays automatically on a big screen, pausing after each
question so guests can think, then revealing the answer. Family photos are
sprinkled in between the questions.

## How to run it at the party

1. Copy this whole folder onto the laptop that drives the projector.
2. Double-click **`index.html`** and it opens in any web browser (Chrome, Edge,
   Safari, Firefox). No internet needed.
3. Click **Start the Trivia**, then press **`F`** for full screen.
4. Sit back and it runs on its own. Guests can shout out or write down answers,
   then check themselves when the answer appears.

> Tip: set the projector/laptop to landscape and turn off the screen saver /
> sleep so it doesn't dim during the game.

## Controls

| Key | Action |
| --- | --- |
| `Space` | Pause / resume |
| `→` | Skip ahead |
| `←` | Go back |
| `A` | Reveal the answer now (skip the think timer) |
| `F` | Toggle full screen |
| `R` | Restart from the beginning |

You can also **click / tap** anywhere to jump to the next slide.

## The questions

40 easy, fun questions across three themes, tuned for a Canadian audience:

- **The Swinging Sixties**: general 1960s facts with Canadian touches
- **Take Me Out to the Ball Game**: baseball basics and highlights
- **A Little Ancient Greece**: a few gentle ancient-history questions

To edit or add questions, open `index.html` and look for the `QUESTIONS`
list near the top of the `<script>` section.

## Adding your family photos

Photos appear between the questions. See **`photos.js`** for full
instructions. In short:

1. Put your image files in the **`photos/`** folder.
2. List them in `photos.js`, one line each:
   ```js
   { src:"photos/wedding-1966.jpg", caption:"June 1966" },
   ```
3. Save and reload `index.html`. The game spreads however many photos you
   add evenly across the game, so 5 photos or 60 both work.

## Adjusting the timing

Open `index.html` and edit the `CONFIG` block at the top of the script:

```js
const CONFIG = {
  thinkSeconds:  20,  // seconds to think about each question
  answerSeconds:  9,  // seconds the answer stays up
  photoSeconds:   8,  // seconds each photo stays up
  titleAutostart: 0,  // 0 = wait for the Start button; e.g. 5 = auto-start
};
```
