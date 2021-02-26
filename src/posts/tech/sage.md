---
title: "WordPress Theming With Sage"
date: "2021-02-25"
category: "tech"
url: http://mitchellm1.sgedu.site/
github: https://github.com/manarm/trust-wp-sage
---

While [Sage](https://roots.io/sage/) was not my [first Wordpress theme](https://roots.io/sage-should-not-be-your-first-wordpress-theme/), it was my second. I ported a custom theme that I initially built using vanilla WordPress over to Sage.

WordPress was my first experience building a site ontop of a proper CMS. I had hacked out my own rudementary CMS in a [website I built for the library](https://github.com/manarm/local-electronic-resources): using Express, I dymanically built pages based on what was present in the filesystem. I was pleased to find out Wordpress takes a similar approach (at least I did a decent job while reinvinting the wheel) -- it serves templates based on what files are present using [predefined hierarchy](https://wphierarchy.com/). WordPress handles the database and routing for you, and you fill in the display logic for various kinds of "posts".

Sage describes itself as a "starter theme" for Wordpress, which I assumed meant it was a pre-made aesethetic. Actually, the theme is blank; instead, they have completely reimagined the toolchain. The PHP templates of vanilla WP have been supercharged with [Laravel's blade](https://laravel.com/docs/5.5/blade), it ships with Webpack by default, and it encapsulates everything in [PHP namespaces](https://www.php.net/manual/en/language.namespaces.rationale.php). This allows all aspects of the page to be modularized -- templates, CSS, and control logic are separated out on a per-component basis. All these features made it much easier to design and build a page in a cleaner, modular way. It was easy to reuse parts within a single site, and no doubt it would greatly speed reuse between projects as well. 

At the end of the day, though, the core of WordPress feels outdated. Even with the added namespacing, the famous WordPress loop relies heavily on [global vars](https://codex.wordpress.org/Global_Variables) and there's no real way around that. And even though the pre-defined template hierarchy used for routing is well documented, once page navigation got even a little complex I wished I had full control.

Since making this project, I have been exploring the more contemporary [Jamstack](https://jamstack.org/why-jamstack/), using [Gatsby.js](https://www.gatsbyjs.com/) and a "headless" CMS like [netlifyCMS](https://www.netlifycms.org/). This feels like the way the web is going for lots of reasons, and building websites with both old and new technologies has made clear to me why. More on that soon. - mm  