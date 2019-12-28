# Iblis Gatsby Starter

_**Starter for Gatsby with Material-UI, Typescript, Internationalisation and Audit Lighthouse 100%!**_

![Lighthouse](./screenshots/iblis-gatsby-starter.png)

## Demos

- [EN Demo](https://vdelacou.github.io/iblis-gatsby-starter/)
- [FR Demo](https://vdelacou.github.io/iblis-gatsby-starter/fr/)
- [404 Demo](https://vdelacou.github.io/iblis-gatsby-starter/whatever)

## Why

As I need to start new static website quite often, I create a starter with all my basic configuration

After some search, I didn't find any starter or theme which has the following requirements :

- Written in pure Typescript
- Use last version of [Material-UI](https://material-ui.com/)
- Easy to change the look with Material-UI Theme
- Have Translation keys in json files and different static page for each language with redirect according to browser language
- Generate SEO different for each page and each language
- Resize the pictures on build to reduce the bundle size
- Generate sitemap and robots.txt
- Be compliant as WPA, generate the manifest.json and works offline

## Dev

Download the example or clone the repo
Install the library and the dependencies to your React project

```sh
npm install
npm run develop
```

## Build

This will create all the robots.txt , sitemap, ect ...

```sh
npm install
npm run build
```

## How to build for the github demo

```sh
npm install
rm -rvf public/* docs/* .cache/*
gatsby build --prefix-paths /iblis-gatsby-starter
mv public/* docs/
```

## Contribute

1.  [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2.  Make the necessary changes and ensure that the tests are passing
3.  Send a pull request

## Todo

- There is always room to improve

## Known issues

- None for the moment :)

## Thanks

- [Gatsby](https://www.gatsbyjs.org) for make so easy to deploy static site and finally get rid of wordpress
- [Material-UI](https://material-ui.com/) for the fantastic work

## License

Please, refer to LICENSE file
