---
author: junaga
---

# git and GitHub

Remember: Everything is a file. A Computer Program - Software, is a bunch of files. It consists mostly of Source Code (`code/` or `src/`) written in a programing language. It is written down in [modules](https://en.wikipedia.org/wiki/Modular_programming#Terminology) specific to that language. These files (`.py`, `.js`) make up the biggest part of any software.

## The problem - too much stuff

When you have less then 10 files in your directory everything should be just fine. If you wanna make some changes, just copy/`cp` the directory to a new one called `my-project-v2/` and get going. If you encounter any problems, you still got your backup of `my-project/`. For working with just a couple of files this approach is sufficent. However, real programs are usually made with a lot of different files, not just some modules.

- config files
- manifest files for packaging - installation and distribution
- assets (img, video), or binary files
- documentation for developers/users

Everything grows, at some point you end up with 20 copies of your software. What if you wanna work with somebody else collaboratively, how often do you have to mail code to each other? It gets worse. What if your software is being distributed? Version 1 is being released on CDs in a store. While you work on v2 a bug appears in v1.

It's obvious how quickly all of this becomes unmanageable. Which of course is a problem. For every computer problem there is a solution, or at least there should be.

## Welcome to version control

A program to help you control the versions of your files/software. A [version control](https://en.wikipedia.org/wiki/Version_control) system, allows you to keep track of your changes through saves, commonly called "commits" in git.

![simple git branches](./images/branches-simple.png)

On top of the changed, created or deleted files, every save has a timestamp and an author (In git even a message). This allows us to easily travel through the history of saves, meaning we can rollback to any previous version. Saves in version control systems usually point to previous saves. Reducing the total number of bytes, because every save stores only the changes made, since the last one.

## What is git

[Git](https://en.wikipedia.org/wiki/Git) it allows you to revert your directory back to a previous version with a single command. Not only that, `git` being a "Distributed Version Control System" allows for _distributed_ collaboration. Which means multiple parties can perform version control on the files **at the same time** independently of each other and even without an internet connection. This works because everyone has a copy of not just the software, but the entire history. Everyone adds to their own history and later they get "merged".

## What is GitHub

## TODO

Visually work with git in vscode
https://vscode.github.com/

Various workflows possible with git
https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows

Internally, git clone first calls git init to create a new repository.

The canonical format is to summarize the entire commit on the first line in less than 50 characters, leave a blank line, then a detailed explanation of what’s been changed.

[Version control](https://en.wikipedia.org/wiki/Version_control), always has been ([1970](https://en.wikipedia.org/wiki/Comparison_of_version-control_software#History_and_adoption)), and today still is ([2020](https://www.alexa.com/siteinfo/github.com#section_traffic)), an **essential part** of software development.

There are few things in software development more common then git, one example would be the Keyboard itself.

`git` is a _distributed_ Version Control System. This means it works without a client/server base. Every copy of the software, on every participants computer, is a fully fledged git repository with complete history. This includes commits, branches, tags etc. This is why `git` needs to be configured every time anew. The simplest way to do that is by editing the user scope, [config file](https://gist.github.com/pksunkara/988716).

https://www.alexa.com/siteinfo/github.com

https://www.youtube.com/watch?v=w3jLJU7DT5E

http://whatthecommit.com/
