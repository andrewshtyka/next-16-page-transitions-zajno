# Next.js 16 Page Transition #1 (View Transition API)

**Two pages are visible at the same time.**

Live website: https://pt-1-shtyka.vercel.app/ \
Inspired by: https://zajno.com/

---

### ✅ Done:

1. Click on \<Link /> leads to the new page.
2. Click on browser "Back" and "Forward" buttons runs animation properly.
3. Scroll is blocked when navigation started. Unlocks after animation of transition is finished. Tested with 3g connection, works fine.
4. Two and more rapid sequential clicks on "Back" / "Forward" buttons in browser don't brake animation.

### ⚠️ Be cautious:

**View Transition API has a built in 4 sec timeout.** \
With slow connection, when you click on link and page is loading longer than 4 sec, NO animation will be played. \
Therefore, requires page loading optimization.

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
