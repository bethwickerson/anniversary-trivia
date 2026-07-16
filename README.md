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

The 100 photos from your Google Drive folder **Wickerson_Anniversary_Pics**
are already listed in **`photos.js`** and are spread evenly between the
questions. For each photo the game tries, automatically:

1. a **local copy** in the `photos/` folder (best: works fully offline), then
2. a **live Google Drive link** if the local copy isn't there (needs internet).

If a photo can't load either way, it's quietly skipped and the trivia carries on.

### Recommended for the party: download them so it runs offline

1. In Google Drive, open the **Wickerson_Anniversary_Pics** folder.
2. Select all photos and choose **Download** (Drive gives you a zip).
3. Unzip and drop the image files into the **`photos/`** folder next to
   `index.html`, keeping their original names.

That's it. No internet needed on the night.

### Or use the live links (no download)

In Drive, set the folder's sharing to **"Anyone with the link → Viewer"**, and
make sure the projector laptop has internet. The photos will stream from Drive.

### Trimming or reordering

100 photos is a lot (roughly two or three after every question). To use fewer,
just delete lines in `photos.js`. You can also reorder lines, or add a caption
between the quotes, e.g. `caption:"The wedding, 1966"`.

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
