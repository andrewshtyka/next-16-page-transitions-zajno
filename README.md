# Next.js 16 Page Transition #1

**Two pages are visible at the same time.**

Live website: https://pt-1-shtyka.vercel.app/ \
Inspired by: https://zajno.com/

---

### ✅ Done:
1. Click on \<Link /> leads to the new page.
2. Click on browser "Back" and "Forward" buttons runs animation properly.

### ⚠️ Not solved problems:
1. Two and more sequential clicks on "Back" brake layout (visible artifacts).
-> Block **buttons** until new page is loaded + offset time (about 2 sec).

2. During navigation user can scroll.
-> Block **scroll** until new page is loaded + offset time (about 2 sec).

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