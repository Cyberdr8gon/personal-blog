---
date: 2017-08-01
title: How to pimp out your terminal
description: A simple guide to making your terminal a whole lot more pleasant.
draft: false
---

As a side note, this whole post is really meant for people new to \*nix systems. If you are more experienced with the terminal, I recommend just scrolling to the bottom for the links to the projects you might not have seen before.


I spend a whole lot of time in my terminal. Definitely more than my fellow CS Student compatriots. And for good reason, terminals are far more efficient than GUI's at everything except for design work (and occasionally IDEs can make accessing tools easier than a terminal). There is a lot of cool ways to control your computer through cron and bash scripting, but this guide will focus on just making your terminal look more visually appealing and be a bit more functional.

<!--more-->

It should be known I will be using the GNOME terminal just because it is convenient, however, most of this should be portable to all modern terminal emulators (looking at you xterm). 

# Zsh

First, if you haven't already, install zsh. It is similar to bash, but with a bit more extensible scripting language. While you might say, why do I care about a slightly better scripting language, I say, you don't have to. zsh is fully sh compliant and you should have no problems using it as your default shell almost exactly how you would use bash. The benefits of zsh are in its awesome auto-completion of everything you type, the ability to run programs based on regex and a bunch of other options.

Your package manager should have zsh. 

On Ubuntu, you would run
{% highlight bash %}
$ sudo apt install zsh
{% endhighlight }

On Mac OS, you should use homebrew to install zsh. I am sure they have a package for it.

On all non-Ubuntu Linux systems, you can find it on your package manager. [This page has more indepth instructions for each other system.][https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH]

Then, after installing zsh, check its version with
{% highlight bash %}
$ zsh --version
{% endhighlight }

That version SHOULD be 4.3.9 or more recent. If it isn't, not all of this will work for you. 


If everything goes well, you can change zsh to your default shell by running
{% highlight bash %}
$ chsh -s $(which zsh)
{% endhighlight }

If this doesn't work, check [this google search out][https://www.google.com/search?q=zsh+default+without+chsh]

Now logout and log back in. If all goes well, the following command should respond with something similar to "/bin/zsh"
{% highlight bash %}
$ echo $SHELL
{% endhighlight }


If all has gone well, awesome! You now have a better shell then you did before. It has many more features than bash, but I am not a expert in configuring my zsh to look crazy amazing.

# oh-my-zsh

But [these guys][https://github.com/robbyrussell/oh-my-zsh] are, and we are going to use Oh-My-Zsh to make the noticable change in how our terminal looks. But more importantly, our terminal will be a better interface and easier to reason about.


Run this to install oh-my-zsh
{% highlight bash %}
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
{% endhighlight }


It should walk you through installation with various options. If you already use your machine for programming, the autodetect options work well and will add autocomplete to many of your current tools command line args. 

The most important part is, of course, selecting a theme. After completing the set up, go [here][https://github.com/robbyrussell/oh-my-zsh/wiki/themes] and choose one you like. I personally use bira, but all of them work. I would recommend using one that has info of git repos built in, it is so useful!!

Once you have chosen one, go to your .zshrc file in your home directory ("cd ~ && vim .zshrc") and change the theme line with the name of the theme you want. Then, close all your terminals and open a new one and you should see your new theme!

# Terminal Colorscheme Profiles

Now, this one is my personal opinion.

I would recommend setting up 3 or 4 profiles of different colorschemes for your terminal emulator that are all fairly different. Atleast 2 light themes and 2 dark themes. Why? Because if you work on your laptop and go anywhere, sometimes you will have glare, sometimes your eyes will be tired, etc. There will always be a comfortable colorscheme that is quick to change to. 

I have 6 profiles for my terminal:
 - Firefox Dev
 - [Gotham][https://github.com/whatyouhide/vim-gotham]
 - [Gruvbox Light][https://github.com/morhetz/gruvbox]
 - [Gruvbox Dark][https://github.com/morhetz/gruvbox]
 - [Lucius Light][https://github.com/jonathanfilip/lucius]
 - [Lucius Dark][https://github.com/jonathanfilip/lucius]

Unfourtunately, the colorscheme I used for the Firefox Dev theme aren't around anymore, so I will provide theme here! It is by far my favorite and works well with tmux and vim in terminal

## Firefox Dev Colorscheme

Text: #7C8FA4

Background: #0E1011

Bold: #A7ACB2

Cursor Color: #708284

Cursor Background: #708284

Color #0: #002831

Color #1: #E63853

Color #2: #5EB83C

Color #3: #A57706

Color #4: #359DDF

Color #5: #D75CFF

Color #6: #4B73A2

Color #7: #DCDCDC

Color #8: #001E27

Color #9: #E1003F

Color #10: #1D9000

Color #11: #CD9409

Color #12: #006FC0

Color #13: #D7AFD7

Color #14: #005794

Color #15: #E2E2E2


# Tmux

[Tmux][http://man.openbsd.org/OpenBSD-current/man1/tmux.1], by itself, has made me so much more productive. I used to have one terminal window for vim, another one for running builds or web servers, another one for system admin tasks and playing music, etc. And that is a ton of windows. I even moved to [i3 window manager][https://i3wm.org/] for awhile because of the difficulty of keeping track of so many terminals (by the way, I love i3 and I will probably go back someday, I just don't know how well it works with multiple monitors). I can't really walk you through such a huge and personal topic as customizing tmux for your needs. I can point you to what I learned from though. [This book][http://a.co/j0rSFsk] is an amazing, indepth resource to tmux and I can't ever thank the author enough for how much it helped in setting up my tmux. 

I personally keep my battery life, date/time, session information (i.e. terminal that is open, which pane I am looking at, which instance of tmux I am connected to) and the names of the running terminals in a bar across the bottom. I also bind Caps lock to Ctrl and the tmux leader key to be Ctrl+a. Doing this makes it very easy on my hands/wrists to manage my session while still getting all the positivities of a tiling terminal multiplexer.


# Icons In Terminal

This is a recent addition to my terminal, allowing you to use tools that show non-ascii characters without patching your font (a tedious and error prone process). This project is constantly changing so I will just direct you to their github page for install instructions: [icons-in-terminal][https://github.com/sebastiencs/icons-in-terminal].

When you finish this, follow the instructions to build [this project][https://github.com/sebastiencs/ls-icons]. It has a lot of requirements so be sure to use your package manager to download everything listed in README-prereq.

When you finish all of the build and install steps, I found that my system still defaulted to /bin/ls rather than my new one, so I copied /opt/coreutils/bin/ls to /bin/ls with:
{% highlight bash %}
$ cp /opt/coreutils/bin/ls /bin
{% endhighlight }

You will likely have to run that with root permissions (i.e. sudo) as that is a protected folder. 

If you run ls now, it should have pretty icons!

If you broke ls, you can
{% highlight bash %}
$ sudo apt install --reinstall coreutils
{% endhighlight }

and it will reinstall the normal ls :D

I hope your terminal looks awesome, but you also discover some of the productivity gains that come from all of these additions. Overall, I think it has greatly improved my terminal experience and some of them have made me much more productive. Plus, you look awesome when people look how productive and cool your terminal is XD





