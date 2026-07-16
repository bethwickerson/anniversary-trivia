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

## Your family photos

The game shows **one family photo after each question** (40 questions, so up
to 40 photos). Photos are loaded from local files in the **`photos/`** folder,
so everything runs offline with nothing streaming from the web.

### Adding the photos

1. In Google Drive, open the **Wickerson_Anniversary_Pics** folder and
   **Download** the photos you want (Drive gives you a zip).
2. Unzip and drop the image files into the **`photos/`** folder next to
   `index.html`, keeping their original names.
3. Open **`photos.js`**. It already lists all 100 filenames from the folder.
   Delete down to the ~40 you want, in the order you'd like them to appear.
   Photo 1 shows after question 1, photo 2 after question 2, and so on.

That's it. No internet needed on the night.

### Trimming, reordering and captions

- **Fewer photos:** delete lines in `photos.js`. Only the first 40 are shown
  (one per question); anything beyond that is ignored.
- **Reorder:** move lines up or down.
- **Captions:** add text between the quotes, e.g.
  `{ file:"IMG_6446.jpeg", caption:"The wedding, 1966" },`
- A photo listed in `photos.js` but not found in the `photos/` folder is
  simply skipped, so a typo or missing file won't break the game.

## Adjusting the timing

Open `index.html` and edit the `CONFIG` block at the top of the script:

```js
const CONFIG = {
  thinkSeconds:  20,  // seconds to think about each question
  answerSeconds:  9,  // seconds the answer stays up
  photoSeconds:   6,  // seconds each photo stays up
  titleAutostart: 0,  // 0 = wait for the Start button; e.g. 5 = auto-start
};
```
