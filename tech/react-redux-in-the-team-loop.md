---
date: 2021-03-04T23:41:06.796Z
title: "React/Redux: in the (team)Loop"
url: https://teamloop.manarm.co/
github: https://github.com/manarm/teamloop
---
I began building an app to excerise my skills in React / Redux. It started out, [as it so often does](https://todomvc.com/), as a todo app, and I've been iterating building layers on top of it. In its current state, it allows different users to asign todos to each other, as well as send small messages and yes/no questions.

I've found using [react-redux](https://react-redux.js.org/) to pleasantly allow waves of developing and refactoring. It is flexible enough to allow for hacks to quickly get a feature going, but robust enough in its support of modular design and separation of concerns that the end product is easy to reason about and work on different pieces in isolation.

Working at Google on a medium-sized team that shipped code every week made me a strong believer in [TDD](https://www.agilealliance.org/glossary/tdd/). In spite of that, I have not built testing infrastructure up with this project. There are 2 barriers: first, since I am rapidly prototyping and iterating, the codebase is changing quickly fom commit to commit. Since I'm not planning on shipping this code any time soon, I think testing would only slow that process to no great benefit. 

Second, I still need to learn how to effectively test front-end code. When building functional blocks or APIs, it's pretty clear to me how to start with a spec, write tests for it, and then build code until my tests pass. When building a front end, I hesitate to "freeze" my design for testing, although [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) does seem like a great way to bulletproof during a refactor. 

There is still a small extreme programmer in my head who is only enraged by my excuses. Perhaps once the feature set is more stable, I will make a project out of designing a test plan for the app. If you have strong opinions on testing, especially for front-end, do drop me a line as I would love to hear them.

Once I finish up a few more features, I am excited to get going on a GraphQL backend using [Apollo](https://www.apollographql.com/). While this started as a simple todo checklist, it's amazing what I discover if I just keep pushing it along... -mm