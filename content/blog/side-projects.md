---
title: "Building my first VSCode extension: QuickLinks"
date: "2025-11-01"
excerpt: "I hate keeping my bookmarks organised."
featured: true
---

# **What does it do?**

QuickLinks is a VSCode extension that adds a bookmark launcher to the command palette.

I made it to manage all the browser bookmarks I had on my work laptop. I have worked on a few code bases now, that's a lot of github links, jira boards, swagger docs and confluence pages.

Also felt a random urgency to start building side projects, maybe because I'm scared of losing my job.

---

**The requirements:**
- Configure and launch bookmarks from VSCode.
- bookmarks scoped to either the workspace, or globally.
- Fuzzy search
- A keyboard shortcut

---

## Getting started

VSCode recommends using [Yo Code](https://yeoman.io/), who am I to disagree. They say it does all the scaffolding and boilerplate for you. I used it, it does.

### Req 1: The business logic

Implementing the business logic is really easy, the requirements aren't that complicated. 

VSCode provides a really simple API to register commands into the command palette. It looks something like this:

```js
const command = vscode.comands.registerCommand(
    commandName: string,  
    callbackFunction: function
)
```

### Req 2: Scope

This is very simple (very nice!), built straight into VSCode and into my loving arms. There's no messing around.

Each extension in VSCode comes with it's own context (and it's persistent, holy moly), straight out of the box when you use yo-code (not sponsored, it really is on the [VSCode docs](https://code.visualstudio.com/api/get-started/your-first-extension)). It looks a little like this:
```ts
export function activate(context: vscode.ExtensionContext) {}
```

That context has two useful features, `context.globalState` and `context.workspaceState`. These mean exactly what you think they mean:
- Global state is accessible regardless of what workspace you're in.
- Workspace states are scoped only to that directory.
 
I use **global state** for links that I'll need for any project. Think google.com, chatgpt, etc.

The **workspace state** is for bookmarks that I'll only need when I'm actively working that project, and don't want it carrying over elsewhere. Jira boards, Github repositorties, important confluence docs are usually scoped to a workspace. Most of my quick links are scoped to the workspace.


