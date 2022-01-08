"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "These Princesses are the romantic counterparts of the chillest collection around - Chill Frogs. With over 6000 different combinations no two princesses are the same. These princesses were minted free for Chill Frog holders; if you own a frog and wish to claim your free princess you can find out more over at https://chillfrogs.io/ and in our discord!";
const baseUri = "ipfs://QmQrDjVZCbwFhVBd6yBNqWMKyL9fDG3xkEYLJ4ecyLGjjv";

const layerConfigurations = [
  {
    growEditionSizeTo: 700,
    layersOrder: [
      { name: "Background" },
      { name: "Alien" },
      { name: "Alien/Shirt" },
      { name: "Alien/Face" },
      { name: "Alien/Hair" },
      { name: "Alien/Hat" },
    ],
  },
  {
    growEditionSizeTo: 1945,
    layersOrder: [
      { name: "Background" },
      { name: "Ape" },
      { name: "Ape/Shirt" },
      { name: "Ape/Face" },
      { name: "Ape/Hat" },
    ],
  },
  {
    growEditionSizeTo: 2845,
    layersOrder: [
      { name: "Background" },
      { name: "Devil/Wings" },
      { name: "Devil" },
      { name: "Devil/Shirt" },
      { name: "Devil/Face" },
      { name: "Devil/Hair" },
      { name: "Devil/Hat" },
      { name: "Devil/Horns" },
    ],
  },
  {
    growEditionSizeTo: 5345,
    layersOrder: [
      { name: "Background" },
      { name: "Human" },
      { name: "Human/Shirt" },
      { name: "Human/Face" },
      { name: "Human/Hair" },
      { name: "Human/Hat" },
      { name: "Human/Frozen Hands" },
    ],
  },
  {
    growEditionSizeTo: 5545,
    layersOrder: [
      { name: "Background" },
      { name: "Ice/Shirt" },
      { name: "Ice/Head" },
      { name: "Ice/Face" },
    ],
  },
  {
    growEditionSizeTo: 5995,
    layersOrder: [
      { name: "Background" },
      { name: "Zombie/Shirt" },
      { name: "Zombie/Face" },
      { name: "Zombie/Hair" },
      { name: "Zombie/Hat" },
    ],
  },
  {
    growEditionSizeTo: 5998,
    layersOrder: [
      { name: "UniquePrincess" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 600,
  height: 600,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
