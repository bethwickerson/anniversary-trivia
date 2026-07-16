/* ============================================================
   Family photos for the anniversary trivia game.
   ------------------------------------------------------------
   These photos are shown between the trivia questions.

   Each entry is:  { src: "photos/filename.jpg", caption: "…" }
     - src     : path to the image (put the files in the photos/ folder
                 that sits next to index.html)
     - caption : optional line shown under the photo. Leave as ""
                 for no caption.

   The game automatically spreads however many photos you list
   evenly across all the questions, so you can add as many or as
   few as you like. Order in this list = order they appear.

   HOW TO ADD YOUR OWN PHOTOS
   --------------------------
   1. Drop the image files into the  photos/  folder.
   2. Add one line per photo below, e.g.
        { src:"photos/wedding-1966.jpg", caption:"June 1966" },
   3. Save and reload index.html.
   ============================================================ */

window.PHOTOS = [
  // Example (delete these once your real photos are added):
  // { src:"photos/wedding-day.jpg",  caption:"The wedding, 1966" },
  // { src:"photos/family-cottage.jpg", caption:"Summers at the cottage" },
  // { src:"photos/anniversary-50.jpg", caption:"50 years strong" },
];
