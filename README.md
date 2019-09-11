# **Red Ventures Test**

## **How to run** 

To install and run simple execute

```bash
 yarn --production=false
yarn start

#or 
 
npm install
npm start
```

this app is also avaliable at [redventures.romulomessias.dev/](https://redventures.romulomessias.dev/)

## **What I used**

### React

I use react in my current job (and the last one too), so choose react was natural for me. I feel comfortable building web app with this lib.

### Mobx

I needed a solution for global state in this app. It's common to use Redux with React, but I believe redux increase the application complexity in a considerable way. Mobx solves global state problem in a simpler way.

### Typescript

With typescript I have better code suggestion and autocomplete. It's easier to know what a function return as result (if any) and the type system help me find bugs before shipping the app for production.

### SASS

Nothing special here, another tool I use um my current job. Here i tried to use [RSCSS](https://willianjusten.com.br/falando-sobre-rscss/) to organize my stylesheet.

## **Folder Scructure**

```bash
project
└─── src
    └─── assets
    └─── components
    └─── hooks
    └─── models
    └─── pages
    └─── static
    └─── stores
    └─── styles
```

- src 

    Root folder of all my source code, in this folder there is the entry point of the app as well.

- assets

    Here there is the template html used to hosting the react app. Here there is also the icones used in app manifest and the favico.

- components

    All the ui pieces that compose a page is here, I like to organize all components by domain. Domain free componentes I tend to put in **common** folder. Other costume I have is to keep together compoments and styles. So for every component there is also a file with its styles.
- hooks

    Folder with logic that I can reuse.

- models

    Definition for objects I use in this project. Usually, this definitions are API responses.

- pages

    All pages that the aplication have. Here a page is basically a container fot a components of a domain I considered.

- static

    All static images I used.

- stores

    Here is all logic for state managment I used in this app. All related to Mobx.

- styles

    Common styles, mixins and sass variables.

## **What I could have done better**

### Better css organization

Revising what I did a notice that I could have done a better job organizing my css. Coud have made a mixin for common thigs for example. 

### Better mobile layout

I first built the app thinking in desktop view and after that a adapted for mobile. Because that I believe some decision I took in components didn't help me achieve a better layout in mobile.

### Animations

I just did some realy simple animations in wheel selection. 

### Test (unity test at least)

I couldn't write some test but i would like to use jest for that,with [enzime](https://github.com/airbnb/enzyme) or [puppeteer](https://github.com/GoogleChrome/puppeteer) for testing ui components. 