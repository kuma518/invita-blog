# git

Created by [the guy](https://github.com/torvalds) who made Linux. The program `git`, is an advanced tool that's used for [version control](https://en.wikipedia.org/wiki/Version_control) in software development. It's the worlds _de facto_ standard, and many modern platforms like GitHub build on it.

<youtube id="hwP7WQkmECE" />

## Installation

Git is available [almost everywhere](https://git-scm.com/downloads).

Simply use your **package manager**, like `apt` on Debian. For Windows users I recommend to download the **installation wizard**. You can leave all the defaults checked and just spam "next".

- `sudo apt-get install -y git` on Debian
- [install wizard](https://git-scm.com/download/win) on Windows

Verify that your installation was successfull by running `git --version` in bash on unix, or powershell on windows, respectively.

## Configuration

Because `git` works offline, being a _distributed_ version control system, it needs to be configured everytime anew. The installation should have created a `.gitconfig` file on your system.

- `$HOME/.gitconfig` on unix
- `%USERPROFILE%\.gitconfig` on windows

As an example, below is what my gitconfig looks like. I use my GitHub [profile](https://github.com/junaga) **username** and **email address**, so my commits will be recognized on GitHub. Also merge conflicts and other events will be opened in my configured editor.

```ini
# C:\Users\junaga\.gitconfig

[user]
    name = junaga
    email = hermann-stanew@invita.gmbh

# or use vscode: `code --wait`
[core]
    editor = notepad
```

:::tip pro tip
Alternatively, you can set the `EDITOR` environment variable to `code --wait`, some tools (including git) read this variable to determine your editor.
:::

## Workflow

Just stick to the good old [Feature Branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Make sure to do **small commits** with atomic changes. Write descriptive, accessible, short, sweet and simple messages in present tense plain english. For example: `Add delete button` not `added new delete button`.

Honestly I cannot teach you git, it's extremly complicated. If your a noob I recommend to just stick to a graphical tool. [VS Code](http://vscode.github.com/) and it's [vanilla trickery](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) without extensions is what I personally use too.
