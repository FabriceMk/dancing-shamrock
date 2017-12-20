# dancing-clover
A Progressive Web Application to easily browse through Irish Set Dances.

Disclaimer: Currently Work In Progress

[![Build Status](https://travis-ci.org/FabriceMk/dancing-clover.svg?branch=master)](https://travis-ci.org/FabriceMk/dancing-clover) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/c15cfac37b0144869c8844885871e5e9)](https://www.codacy.com/app/FabriceMk/dancing-clover?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=FabriceMk/dancing-clover&amp;utm_campaign=Badge_Grade)

## Purpose of the application
When you start learning Irish Set Dancing, you notice that one of the troubles is to remember all the figures and their order for each set dance.

Most of the websites related to Irish Set dance are tailored for desktops but usually, it's during the dance session that you need to refresh your memory and those websites are difficult to read on a phone.

I was wondering about developing an Android application for myself for that purpose but thought it was a shame to be platform restricted for a not that complex application. Progressive Web Applications are trendy right now so I wanted to give it a try.

Even though PWA are behaving like mobile websites on iOS, because I own an Android phone I will have the full offline capabilities I need (sometimes sessions are in basement with no reception) and my app will be able to sit in my App Drawer like a regular app. 

In the end, my friends who own an Android phone and me will have an app-like experience but my friends on iPhone will still be able to consult the app online. And because the "Progressive" is taking all its meaning here, when Safari implements Web Workers, they will also get those offline capabilities. So I will get basically an iOS version of my app for free.

## Technical aspects
* Built with Angular and Angular Material
* Uses `sw-precache` for resource caching with a service worker
* Web Manifest to enable proper installation of the app in Android
* Score of 100 in [Lighthouse](https://developers.google.com/web/tools/lighthouse/) on the PWA part

## Todo
* Improve initial loading time (right now only 62 on Lighthouse on the Performance part)
* Proper coverage with Unit tests
* Implement some E2E tests with Protractor

## Infrastructure
* Hosted on [https://firebase.google.com](Firebase)
* Deployed with [https://travis-ci.org](Travis-CI)
