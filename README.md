# Dancing Shamrock

<div style="text-align:center"><img src="./public/img/icons/android-chrome-192x192.png" /></div>

A Progressive Web Application to easily browse through Irish Set Dances

Hosted version accessible here: [https://dancing-shamrock.web.app](https://dancing-shamrock.web.app)

![CI](https://github.com/FabriceMk/dancing-shamrock/workflows/CI/badge.svg)

## Purpose of the application

When you start learning Irish Set Dancing, you notice that one of the troubles is to remember all the figures and their order for each set dance.

Most of the websites related to Irish Set dance are tailored for desktops but it's usually during the dance session that you need to refresh your memory and those websites are difficult to read on a phone.

I was thinking about developing an Android application for myself for that purpose but thought it was a shame to be platform restricted for a quite simple application. So I decided to build a PWA.

The first version was written with Angular 4 but has been rewritten since then.

## Technical aspects

* Built with [Vue.js](https://vuejs.org/) and [Vuetify](https://vuetifyjs.com/en/)
* Written in [Typescript](https://www.typescriptlang.org/) with [Visual Studio Code](https://code.visualstudio.com/)
* Registers a Service Worker for data caching and the offline mode and supports Web Manifest to be properly recognized as a PWA

## Todo

* Proper coverage with Unit tests in [Jest](https://jestjs.io/)
* Implement some E2E tests with [Cypress](https://www.cypress.io/)
* Add Glossary of the different dance moves
* Add Irish Set Dancing basics
* Add video references

## Infrastructure

* Hosted on [Google Firebase](https://firebase.google.com/)
* Deployed with [Github Actions](https://github.com/features/actions)
