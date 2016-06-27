---
title: hacking hexo
date: 2016-06-18 21:56:02
comments: true
categories:
- Web Design
- Development
tags: 
- Web Design
- Development
excerpt: "a few of the ugly hacks i've added to this hexo blog..."
---
## a few work-arounds i've added to this site

i've had to add a bit of ugliness to the code on this site to get it where i want it. they're definitely not pretty and i'm not happy with them. but as of yet, i have no other way to accomplish what i need. 

### limit the number of posts on my homepage
in hexo, limiting the number of posts is easily accomplished by setting the per_page variable to the number you want in your __config.yaml file. i've set this to 10 which is perfect for my main archive page. however, i don't want 10 posts on my homepage; i only want 5. i googled around for a while without finding a proper solution. adding a little javascript in my jade template, i got the last 5  by simply counting them:

```
  var x = 0
  each post in page.posts.toArray()
    if x == 5
      break
    else
     li=post.title
```
that's easy enough. 

