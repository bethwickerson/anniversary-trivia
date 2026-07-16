# Peter & Marilyn Wickerson · 60th Anniversary Trivia

A full-screen, landscape trivia game built for the Wickerson 60th wedding
anniversary party. On the start screen you choose how it plays, then it shows
each question, reveals the answer, and shows a family photo, one after every
question.

## Two ways to play (pick one on the start screen)

- **Play automatically**: it runs on a timer, with a pause to think on each
  question, then the answer, then a photo, all on its own. Good for hands-off.
- **I'll tap to advance**: nothing moves until you tap. You control the
  pacing, so tap for the answer, tap for the photo, tap for the next question.
  Great for running it from your phone.

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

## Adjusting the automatic timing

These control the **Play automatically** mode only (in tap-to-advance mode you
set the pace yourself). Open `index.html` and edit the `CONFIG` block at the
top of the script:

```js
const CONFIG = {
  thinkSeconds:  20,  // seconds to think about each question
  answerSeconds:  9,  // seconds the answer stays up
  photoSeconds:   8,  // seconds each photo stays up
  titleAutostart: 0,  // 0 = wait for the start screen; e.g. 5 = auto-start
};
```
