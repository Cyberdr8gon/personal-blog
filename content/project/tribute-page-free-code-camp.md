---
layout: post
date: 2017-06-04
title: Tribute Page - Free Code Camp
description: Threw together a tribute page for the awesome CS50 online course
categories: project 
---

[Check it out!](http://bateman.io/tribute-page-fcc/)

For [Free Code Camp](http://beta.freecodecamp.com/en/map) (really an awesome program), I decided to go back and redo all the projects with the beta version. I am truely a fan of the site and almost have earned my normal Front-End Certificate. However, I decided just to do all the projects in the beta version.
This is the first of those projects.

<!--more-->

For anyone inrested in the dirty details:

The general design was meant to feel like you were looking through a slideshow/powerpoint. I think the pastels work nicely together and the whole experience feels very non-aggressive. 


All of the fancy responsive stuff is done via jQuery and querying the window.screen attribute. I have looked aroung and I can't find anything that doesn't support it. 

I also used some CSS3 for quicker fixes in the CSS:

~~~css
@media (max-width: 480px) {
  .section {
    margin: 0;
    flex-direction: column;
    font-size: 100%;
  
  }

}

~~~


I had a little trouble with the fonts at first because bower doesn't handle fonts well and every package does it differently, luckily, I was able to use google fonts for one of them and a packaged font on the github CDN for the other. I would have prefered for both of them to be on the CDN, but bower poorly manages those dependencies. In the future, I would rather just use NPM/Yarn and use a linking dev-dependency.

My one regret that I wish I could have made better was the moving, scrolling arrows, They are made of two rotate corners that are translated downwards and fade from view ad infinitum. I was peeking around on codepen for awhile before I made a solution that I felt comfortale using. It ended up very good, but the tapping to move down is inconsistent at best on mobile and could be improved by maintaining the link space even when the arrow is not visible.

Still they look pretty cool, here is the dependant SCSS:

~~~css
.scroll-down {
  position: absolute;
  left: 50%;
  bottom: 5vh;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0;
  width: 13px;
  height: 13px;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  z-index: 9;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 2s ease-in-out infinite;
  -moz-animation: fade_move_down 2s ease-in-out infinite;
  animation: fade_move_down 2s ease-in-out infinite;

}

@-webkit-keyframes fade_move_down {
  0% {
-webkit-transform:translate(0, -10px) rotate(45deg);
opacity: 0;

  }
  50% {
opacity: 1;

  }
  100% {
-webkit-transform:translate(0, 10px) rotate(45deg);
opacity: 0;

  }

}
@-moz-keyframes fade_move_down {
  0% {
-moz-transform:translate(0, -10px) rotate(45deg);
opacity: 0;

  }
  50% {
opacity: 1;

  }
  100% {
-moz-transform:translate(0, 10px) rotate(45deg);
opacity: 0;

  }

}
@keyframes fade_move_down {
  0% {
transform:translate(0, -10px) rotate(45deg);
opacity: 0;

  }
  50% {
opacity: 1;

  }
  100% {
transform:translate(0, 10px) rotate(45deg);
opacity: 0;

  }

}

~~~ 

I cannot be more greatful for all the awesome examples on CodePen that made that possible, I learned alot about CSS and how to animate with it.

The other thing that could have been done better was forcing scrolling between sections to make the whole experience more clean.
