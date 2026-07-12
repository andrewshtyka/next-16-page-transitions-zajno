# Next.js 16 Page Transition #1 (View Transition API)

**Two pages are visible at the same time.**

Live website: https://pt-1-shtyka.vercel.app/ \
Inspired by: https://zajno.com/

**Personal opinion:**
- OK for simple fade in / fade out page transitions
- not the best solution for complex transitions
- hard to configure, hard to fix edge-cases (Safari, of course)

---

### ✅ Done:

1. Click on \<Link /> leads to the new page.
2. Click on browser "Back" and "Forward" buttons runs animation properly.
3. Two and more rapid sequential clicks on "Back" and "Forward" buttons in browser don't brake animation.
4. Scroll is blocked when navigation started. Unlocks after animation of transition is finished.
5. When you scrolled down, and clicked on "Back" - next page always appears from top position.

### ⚠️ Be cautious:

**1. View Transition API has a built in 4 sec timeout.** \
With slow connection, when you click on link and page is loading longer than 4 sec, NO animation will be played. \
Therefore, requires page loading optimization.

**2. Sometimes transition animation brakes (Safari)** \
Sometimes click on link to another page makes the page black, and then transitions begins. Happens randomly. \
Locally this behavior doesn't happen, only in production.

---

### Install

```bash
npm i
```

<br/>

### Run local server

```bash
npm run dev
```
