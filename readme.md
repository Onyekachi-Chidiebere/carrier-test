# How to run the app;

Make sure you have react native environment properly setup in your system;

open your desired directory in a terminal and run 
git clone https://github.com/Onyekachi-Chidiebere/carrier-test.git;

cd into carrir-test;

## Installation

run ```yarn```  to install all the packages;

## Server setup
navigate to /src/config/util.js and update the API_URL with the IP assigned to your computer by your network;

## start up the server

use ```npm run dev to start the server```;

# Building the application;

ensure you have a device connected to your laptop and in the same network or you have a virtual device started in your laptop;

run ```npx react-native start to start the metro server```;

## For ios

cd into is and run pod install

then run ```npx react-native run-ios```;

## For android 
run ```npx react-native run-android ```


# Usage
Click on the filter button to filter by a category;

click on an active filter to return to default;

use the search field the search through the list with all fields