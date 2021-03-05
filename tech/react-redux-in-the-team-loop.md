---
date: 2021-03-04T23:41:06.796Z
title: "React/Redux: in the (team)Loop"
url: https://teamloop.manarm.co/
github: https://github.com/manarm/teamloop
---
I am building an app to excerise my skills in React / Redux. It started out, [as it so often does](https://todomvc.com/), as a todo app, and I've been adding features to it. In its current state, it allows different users to assign todos to each other, as well as send small messages and yes/no questions.

[react-redux](https://react-redux.js.org/) has made the cycle of developing a new feature and then refactoring to clean up my mess a pleasant one.  It is flexible enough to allow hacks to get a feature going, but robust enough that the end product is easy to reason about and is built of parts that can be worked on independently.

Working on a medium-sized team at Google that shipped code every week made me a strong believer in [TDD](https://www.agilealliance.org/glossary/tdd/). In spite of that, I have not built testing for this project. There are 2 ~~excuses~~ reasons for this: first, since I am rapidly prototyping and iterating, the codebase is changing quickly fom commit to commit. Since I'm not planning on shipping this code any time soon, I think testing would only slow that process, without a great benefit. 

Second, I still need to learn how to effectively test front-end code. When building functional blocks or APIs, it's pretty clear to me how to start with a spec, write tests for it, and then build code until my tests pass. When building a front end, I hesitate to "freeze" my design by codifiying it in a unit test, although [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) does seem like a great way to bulletproof during a refactor. 

There is still a small, angry, agile programmer in my head who is only enraged by my excuses. Perhaps once the feature set is more stable, I will make a project out of designing a test plan for this app. If you have strong opinions on testing, especially for the front-end, do drop me a line as I would love to hear them.

Once I finish up a few more features, I am excited to get going on a GraphQL backend using [Apollo](https://www.apollographql.com/). While this started as a simple todo checklist, it's amazing what I discover if I just keep pushing it along... -mm