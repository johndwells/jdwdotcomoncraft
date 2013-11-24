# JohnDWells.com on Craft CMS

----

Porting the [ExpressionEngine](http://ellislab.com/expressionengine) install of [JohnDWells.com](http://johndwells.com) over to [Craft](http://buildwithcraft.com) (starting with v1.3). It's a learning exercise to get to know Craft a little better.

### Perspective

It's worth noting that I've been familiar with Craft since it was in beta as "Blocks". So prior to taking on this porting exercise, in all I've probably spent 20-30 hours either reading Yii/Twig/Craft documentation, 4-8 hours jumping in and out of the Craft control panel, and probably 2-4 hours tinkering with template code.

### Result

In the equivalent of approx **1 business day** I managed to replicate 99% of the site (admittedly, it's a rather straightforward build to begin with). That includes CMS setup, and template translation from EE to Craft. Content has not been imported except for minimal entries for testing.

Some things are delightfully simple to do with Craft  - things like pagination and next/previous links are *so simple*, when compared to EE.  And despite barely knowing the framework or syntax, the learning curve as remained gradual and more importantly *constant*.

Another pleasant experience was moving to Twig's template inheritance, which actually is precisely what the "partials method" is intended to imitate. So in fact I already had a _layout.html template, and all of my controller templates were set to extend that template. So for those EE devs familiar with partials/Stash, grasping the concept behind Twig inheritance is a breeze.

### Next Steps

This is still all only running locally, so the next step is to finish migrating content, and publish the Craft version of the site.  But first, I'd like to have a go at some plugin development that will further streamline the CP experience to match how I like to write content. Stay tuned.

### To Do

- set up htaccess redirection to catch blog/rss to blog/feed.rss
- minimee / automin