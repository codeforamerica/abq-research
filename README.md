ABQ Research Report
=======

"Forked" from Code for America [2014 Annual Report](https://github.com/codeforamerica/annual)

This version pulls all data out of a Google Sheet and builds it into HTML.

Check out the report at this link: [codeforamerica.github.io/abq-research/](http://codeforamerica.github.io/abq-research/)
Check out the Google Sheet that serves it [at this link](https://docs.google.com/a/codeforamerica.org/spreadsheets/d/1ATAq4IxDoMZfUjSW8BOQCAGXRiACbO-E3OmpLOHLWAY/edit#gid=179182240).

# What it's built on

This is currently built using the following technologies:
* **Jekyll** - To generate the site, put some data into partials, and serve it up on Github Pages
* **Backbone** - Pulls the data out of our Google Sheet and turns it into HTML (currently does this in the browser)
* **Google Sheets** - Acts as our backend, holds all of our content

# Deploy it locally

**Dependencies:**
* >= Ruby 1.9.3
* Jekyll 2.5.3

```
git clone https://github.com/codeforamerica/abq-research.git
cd abq-research
gem install jekyll
jekyll serve --watch
```

Then open your web browser of choice and head over to the url printed that's printed out.

# In the future

* blah blah
