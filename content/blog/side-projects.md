---
title: "Building my first VSCode extension: QuickLinks"
date: "2025-11-01"
excerpt: "I hate how messy browser bookmarks can get."
featured: true
---

# **What does it do?**

QuickLinks is a VSCode extension that adds a bookmark launcher to the command palette.

It exists because I was having a hard time managing my browser bookmarks at work. I was working on a lot of different code bases, each having their own repos, jira boards, technical documentation, swagger docs, etc. 

I also felt a random urgency to start building side projects, maybe because I was scared of losing my job.

**The requirements:**
- Configure and launch bookmarks from VSCode.
- bookmarks scoped to either the workspace, or globally.
- Fuzzy search
- A keyboard shortcut

## Getting started

VSCode actually recommends using [Yo Code](https://yeoman.io/), a tool which provides all the boilerplate for you to start building immediately. I used it, and it's incredibly helpful.

### Req 1: The business logic

Creating business logic is really easy, at least it was for this project because of how simple it is. 

VSCode provides a really simple API to register commands into the command palette. It looks something like this:
```js
const command = vscode.comands.registerCommand(commandName: str, callbackFunction: function)
```

### Req 2: Scope

Scope was also very easy, built straight into VSCode and into my loving arms.

Each extension comes with it's own context (and it's persistent), straight out of the box when you scaffold the extension. It looks a little like this:
```ts
export function activate(context: vscode.ExtensionContext) {}
```

That context has two useful features, `context.globalState` and `context.workspaceState`. These mean exactly what you think they mean:
- Global state is accessible regardless of what workspace you're in.
- Workspace state is scoped only to that director
 





