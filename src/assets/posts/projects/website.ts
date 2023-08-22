
export const content = {
  title: "Personal Website",
  mdContent: `
# About this site

This site is built using <a href="https://react.dev/" target="_blank">React</a> and <a href="https://docs.github.com/pages" target="_blank">Github Pages</a>. The tool used was NVim. You can take a look at the code at this 
<a href="https://github.com/Yooncw0223/yooncw0223.github.io/tree/main" target="_blank">link</a>.

The goal of this site was to make a personal portfolio + note site using as little resource as possible.

Some of my constraints were:
  - Money 🪙 
  - Time to create + upload a post ⚡
  - Need for customizability 🛠️

🪙: The money constraint meant that renting out a VM using AWS (Amazon), GCP (Google), or OCI (Oracle) was not feasible. While these services do have some sort of free tiers, these are generally for limited time (a few months to a year generally). I found these to be infeasible as of now when I'm just a student. While I am limited to building a static site, I found Github Pages to be a decent choice.

⚡: Moreover, this website will mostly consist of creating a post and uploading to the site. For efficiency, the writing/uploading process must be quick (i.e., it doesn't make sense to write notes for an hour and spend 2 hours to upload it to the site). For this problem, I decided to use markdown to format my post and react-markdown library to generate corresponding HTML components.

🛠️: Additionally, I wanted this site to be very customizable. I wanted to avoid static site builders such as Jekyll or Hugo as they somewhat limit the possibilities from building the site ground-up (Having experienced this in 6.170/6.1040 last Fall). Hence I chose React.

After the building process (and even now), I learned the following things:
  - Reviewing React and newly introduced features
    - I was introduced to React in January 2021. Since then, React fully transitioned to functional components and introduced many brand new features such as hooks and contexts.
  - Reviewing Typescript features
    - For example, typescript/javascript's dynamic import (import(...path)) only supports hardcoded strings. During runtime, even when a string variable is passed in, the import simply throws an error (which was a weird language feature to understand).
  - Need to review type specification in typescript
    - While it is not necessary, I found many instances where I was not able to use typescript's full type specification feature, which in turn made my code less future-proof. I plan on reviewing generics feature in typescript and other type syntax in TS.
 


`,
};
