---
layout: post.njk
parent: /blog
tags: blogposts
title: Deploying Eleventy on GitHub Pages
summary: A very simple way to deploy Eleventy on GitHub Pages that actually works.
---

# Deploying Eleventy on GitHub Pages
After fighting with GitHub Actions and workflows for quite a while, I finally figured out how to deploy Eleventy on GitHub Pages.
I'm not an expert on GitHub Actions (in fact, I know practically nothing about it) so I'm sure there's a much better way to do this, but this works.
All the sources I could find on the web were contradictory, didn't work at all, or assumed any knowledge of GitHub Actions, so here's something that works, 
and is itself an Eleventy site deployed on GitHub Pages using this method.
I will update this page if I ever change how I do this, so it *should* always work.

## Eleventy Build Workflow
This is the workflow that builds using Eleventy whenever changes are pushed to the `main` branch.
It outputs the build to the `gh-pages` branch, where GitHub Pages is deploying from.

```yaml
name: Build Eleventy

on:
  push:
    branches:
      - main
      
  workflow_dispatch:

jobs:
  build-deploy:
    name: Eleventy Build
    runs-on: ubuntu-latest
    steps:
      - name: Git Checkout
        uses: actions/checkout@v2
      - name: Build
        uses: TartanLlama/actions-eleventy@v1.3
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          # My Eleventy directory, default is "./_site"
          publish_dir: ./build 
          github_token: ${{ secrets.GITHUB_TOKEN }}
```

## GitHub Pages Settings
The Pages source is set to "Deploy from a branch" with the branch set to `gh-pages`. My custom domain is set here as well.

## CNAME File
This is what kept screwing me up. When you set a custom domain in Pages, it create a `CNAME` file in the root of the chosen branch. 
The Eleventy build would overrwrite this file, reverting it back to the `*.github.io` domain. 
To fix this, I created the CNAME in the root of the Eleventy project and added it as a `PassthroughCopy` in `.eleventy.js`

```js
module.exports = function (config) {
  // ...
  config.addPassthroughCopy({ "CNAME": "CNAME" });
  // ...
}
```

This includes the `CNAME` in the Eleventy build which is the root of `gh-pages`, where GitHub pages is looking for it. 

## The Future
I definitely want to learn more about GitHub Actions because they seem super powerful, and when I do I will improve this workflow. Hopefully I can condense it into one workflow instead of two, because currently you have to wait for runners three times (Eleventy build, GitHub Pages build (which does nothing :/), and GitHub Pages deploy).
