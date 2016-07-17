## Latin Cards

Copyright (c) 2014-2016 David Betz

see [http://latincards.azurewebsites.net/](http://latincards.azurewebsites.net/)

# Notes

Simple Latin cards viewer written in pure AngularJS. Not all categories have data, but I'll add more as I have time (verbs are low priority for me because of the following paragraph).

I'm not convinced this is the best way to learn the verbs. The patterns are simple enough to warrant a cleaner approach than simply looking at cards. I've found my Latin encoding method is more helpful. Find it over at [https://ectypal.net/latin/grammar/verbs](https://ectypal.net/latin/grammar/verbs).

# Usage

Put somewhere a web browser likes to get files from (e.g. not file://) and run.

You can use node to get it running locally:

    npm install http-server -g

    git clone https://github.com/davidbetz/latincards
    cd /latincards
    http-server