---
title: "WordPress: Cooking With Sage"
date: "2021-02-25"
category: "tech"
url: http://mitchellm1.sgedu.site/
github: https://github.com/manarm/trust-wp-sage
---

While [Sage](https://roots.io/sage/) was not my [first Wordpress theme](https://roots.io/sage-should-not-be-your-first-wordpress-theme/), it was my second. Curious about the platform, I recently ported over a custom theme that I had built in vanilla WordPress.

WordPress was my first experience building a site on top of a proper CMS. At the library, I had recently been thinking about how to build websites that were accessible for editing by non-technical folks. I had hacked out my own rudimentary CMS for a [site](https://github.com/manarm/local-electronic-resources) where I used Express to dynamically built routes based on CSVs and PDF files in a network drive. Wordpress actually does something similar with [templates](https://wphierarchy.com/), plus a friendly backend that takes care of the database and routing for you. All you have to do is fill in the display logic for various kinds of "posts".

Sage describes itself as a "starter theme" for Wordpress, which I assumed meant it was a nice coat of paint. Actually, it's a whole house; they have completely redone the toolchain. The PHP templates of vanilla WP have been supercharged with [Laravel's blade](https://laravel.com/docs/5.5/blade), it ships with Webpack by default, and it encapsulates everything in [PHP namespaces](https://www.php.net/manual/en/language.namespaces.rationale.php). This allows all aspects of the page to be modularized -- templates, CSS, and control logic are separated out on a per-component basis. It was easy to reuse parts within a single site, and no doubt it would help share components between projects as well. 

At the end of the day, though, the core of WordPress feels outdated. Even with the added namespacing, the famous WordPress loop relies heavily on [global vars](https://codex.wordpress.org/Global_Variables) and there's no real way around that. And even though the pre-defined template hierarchy used for routing is well documented, once page navigation got even a little complex I wished I had full control.

Since making this project, I have been exploring the more contemporary [Jamstack](https://jamstack.org/why-jamstack/), using [Gatsby.js](https://www.gatsbyjs.com/) and a "headless" CMS like [netlifyCMS](https://www.netlifycms.org/). This feels like the way the web is going for lots of reasons, and building websites with both old and new technologies has made clear to me why. More on that soon. - mm  