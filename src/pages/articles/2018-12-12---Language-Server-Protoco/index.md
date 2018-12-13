---
title: "[WIP] Make your own Language Server!"
date: "2018-12-12T16:51:00.000Z"
layout: post
draft: false
path: "/posts/make-your-own-lsp-server/"
category: "Programming"
tags:
  - "LSP"
  - "Programming Languages"
description: "Learn what the Langauge Server Protocol is and how you can too make your own LSP Server and use it with Visual Studio Code."
---

## Traditional vs Modern Compilers
Many of us write code using an **IDE (Integrated Development Environment)** such as Eclipse or IntelliJ IDEA. These IDEs are equipped with some awesome functionalities such as tools for mass refactoring, finding unused blocks of code, code completions, detecting duplication and so much more. The rest of us use a **text editor** such as Visual Studio Code, Atom, Sublime, vim, emacs etc. Most of us use both depending on which language we are programming in.

Traditional compilers had only one task - take in a valid program and execute it. Moern compilers however are very different. Not only do they need to execute a valid program, they also need to handle incomplete or invalid syntax and provide tools to IDEs and powerful editors to highlight mistakes or suggest improvements/corrections etc. This is why Eclipse created its own Java compiler which could provide a set of tools which complimented their IDE. The already existing Sun Microsystems Java compiler did not provide such functionalities The developers of IntelliJ IDEA also reimplemented major parts of the Java compiler.

So, say that you decide to make your own IDE or text editor and you need good tool support for multiple languages. Is the only way available to reimplement parts of every language's compiler you support? What a sad life that must be! Language Server Protocol comes to the rescue here.

## Language Server Protocol - the savior!
The concept of a LSP is simple - alongside the text editor, we run a server locally which can be queried by the editor for language support. The protocol that the editor and the server interact using is called the **Language Server Protocol**.

![Basic LSP Introduction](./lsp-intro.png)

So how is this better? Well, LSP provides a standard protocol to interact with language servers. Which means that any new text editor only needs to support LSP and it automatically will be able to use all the already existing language servers out there. If you were to make a new language and wished that all editors out there would provide tool support for it, all you have to do is to implement a LSP-compliant language server for your language and voilà, all text editors which support LSP will now be able to provide language suport for your new language!

## A Simple LSP Request







## References
- [List of Language Servers](https://langserver.org/)
- [VSCode Example Language Server](https://code.visualstudio.com/docs/extensions/example-language-server)
- [Microsoft - Official Language Server Protocol](https://microsoft.github.io/language-server-protocol/)
- [Eclipse Foundation - Language Server Protocol](https://www.youtube.com/watch?v=2GqpdfIAhz8)
