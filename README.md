<!-- #                   ruby            js
# library           gems            packages
# pack manager      bundler         yarn(*npm)
# cmd to install    bundle install  yarn install
# dependency file   Gemfile         package.json
 -->

## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:caioertai/http-ajax-295.git http-ajax-lecture
cd http-ajax-lecture
rm -rf .git
yarn install
stt # Open this folder in Sublime Text
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint lib
webpack-dev-server
```
