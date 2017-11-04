French part for school
===================

Dans le cadre d’un projet scolaire il nous a été demandé de réaliser une application mobile hybride utilisant le framwork Cordova Ionic3 & Angular 4

L’application permet d’envoyer un lien de téléchargement direct sur une API que nous avons développé l’application nous permet de voir la liste des téléchargements, envoyer un lien de téléchargement et de choisir le repertoire, configurer l’accès à l’API et supprimer un téléchargement fini.

Participation aux cours: Oui.

Le projet a été réalisé par Luc Perusse & Florian Touch

----------

RemoteDownloader!
===================


Hi, RemoteDownloader is a Mobile Hybride school project.
This app can't be run by itself, so you will need [PyDownloadREST](https://github.com/Luckystrike561/PyDownloadREST)

![enter image description here](https://media.giphy.com/media/3ov9jNypI723f8CY3C/giphy.gif)
----------

Demo
-------------

https://youtu.be/hOHifuz71lE

Install
-------------

 1. Intall cordova
 2. Install ionic3&Angular4
 3. Clone the repo [here](https://github.com/Luckystrike561/RemoteDownloader.git)

Build
-----

Two possibilities:

    ionic cordova build
> then chose between **android** and **ios**


or

    ionic cordova build android
    or
    ionic cordova build ios

Run!
----

**Browser:**

    ionic serve -l

 **Android:**


    ionic cordova run android

**IOS:**

    ionic cordova run ios

Features
--------

 - Add a direct link and choose the directory path
 - Configure the URL API in settings
 - View the downloads list
 - Refresh the downloads list
 - Remove a completed download
 - Receive push notifications when a download is completed
