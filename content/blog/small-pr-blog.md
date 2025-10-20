---
title: "Pull requests are too big these days"
date: "2025-10-20"
excerpt: "Large PRs kill productivity. You can't deploy something that's sitting in review, right?"
featured: true
---

# You should be breaking down your work

I often find myself stuck in coding paralysis when I'm tasked with implementing large, full-stack features. There's just so much that needs to be done, and you don't know where to start.

Anecdotally, I find breaking work down into smaller, isolated chunks help me work much faster, and happier (I'll explain this part later).

When working on any task, it's common to see that **1 ticket = everything in 1 pull request**. This means 700+ lines of changes, made across the entire stack of a service, in one PR, a package of UI changes + Backend changes + Infra changes. 

I find this type of change becoming more and more common, especially with AI coding tools like Claude Code and Codex.

---

## Reviews
One of the biggest blockers in shipping features in software engineering is reviews. It doesn't matter if you're reviewing, or waiting for your code to get reviewed.

The main perpetrator of long wait times is usually size. A lot of pull requests are just way too long, and there's just way too many features. 

Small PRs (< 20 lines) get approved almost instantly, while your larger, 1200+ line monstrosity sits there for 2 sprints while your senior pretends like it doesn't exist 

If it's smaller, simpler PRs get reviewed and approved faster, I should probably be making my PRs are simple and small as possible.

## Coding principles

Computer science students are hammered constantly about the many principles of how they should be writing their code. 

The one I want to talk about is **single responsibility**.

### Single Responsibility
"Let me just add this bug fix real quick", "I'll just refactor this over here too". 

Keeping it simple is about restricting scope. I said that complexity is what makes your Pull Requests get avoided. Simplicity is about lowering the intellectual toll someone needs to burden in order to understand what you've done.

If you find a bug, just make another pull request with a fix for it. If it's a small change, your team will fight each other to review it and get that green box.

---

## Example

Imagine you're asked to implement a feature, a ticket that says "Show a user's blog post history" (Welcome to the real world).

The ticket is full stack, and the requirements look something like:
1. Create an API that retrieves a user's blog history
2. Show that history on the frontend

This is full-stack work: a web API on the backend, a web component on the frontend, and the logic connecting the two.

### How would I do it? Breaking down the breaking down

Split the work into three separate items, each with a single responsibility and its own pull request.

**Item 1: Write an API that gets the user's blog history**
* Backend only
* Logic to retrieve blog history
* Unit tests (can't forget those)

**Item 2: Create a frontend component that shows a user's blog history**
* Frontend only ticket
* Probably stubbed API responses based on the backend schema
* UI tests

**Item 3: Connect frontend with backend**
* Make the frontend actually call the backend instead of using stubbed data

Here's how the flow goes:
* Complete item 1, have an engineer familiar with the backend review it
* Complete item 2, have an engineer familiar with the frontend review it
* Complete item 3, which connects the work done in items 1 and 2

Items 1 and 2 contain the core logic, however, they're separated such that you don't need deep knowledge of the entire system to understand how everything is pieced together. That's all in item 3, which is intentionally designed to be as small as possible.

---

## It also just feels better

Merging pull requests, moving tickets on Jira to **Done**, having green bubbles on GitHub, these are good feelings as a developer. It also makes it feel like you're having consistent impact (which you are).

Working on the same ticket for multiple days because of scope and feature creep does not feel good.