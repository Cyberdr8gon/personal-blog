---
layout: post
date: 2017-06-10
title: Survey Form - Free Code Camp
description: Form hooked up to google sheets as a backend
categories: project 
---

[Check it out!](http://bateman.io/survey-form-fcc/)

Another project for [Free Code Camp](http://beta.freecodecamp.com/en/map).

For this project, I wanted to use Google Sheets as a simple backend for the data one extracts out of a form. 

<!--more-->

Some of this implementation was actually quite intresting. I would like to credit myself for this idea but it wasn't mine. I was heavily inspired by the work in [this github repo.](https://github.com/dwyl/html-form-send-email-via-google-script-without-server) 



It ended up being pretty slick. All I had to supply to the form was a simple url provided by google. Then I hooked it up to a simple page to show everyone who takes the survey all the results!




Not everything was so peachy though, the github repo I mentioned earlier has a lot of broken code that doesn't do what it claims to. None the less, it offers a quick intro to deploying a google app script as a web app.

Anyone who wants to follow in my footsteps and utilize Google Sheets in the manner should know that the best way to open the correct document is to extract its ID out of the URL you view it through normally. This will allow you to consistantly open it without error, something the tutorial doesn't mention. 


My Google App Script: 

~~~javascript
function doPost(e) {

  try {
    Logger.log(e);
    record_data(e);
  
  }
  catch(error) {
    Logger.log(error);
  
  }
  
  return HtmlService.createHtmlOutput('<h1>Thank you for your submission!</h1> <br/> Check out the results <a href="https://docs.google.com/spreadsheets/d/1wPDAmBY1Eg6JjPCcilMiS3AuyX7WyDA38l6pvciIolM/edit?usp=sharing">here!</a>');

}

function record_data(e) {
  Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it
  try {
    var doc     = SpreadsheetApp.openById("1wPDAmBY1Eg6JjPCcilMiS3AuyX7WyDA38l6pvciIolM")
    var sheet   = doc.getSheetByName('responses'); // select the responses sheet
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow()+1; // get next row
    var row     = [ new Date()  ]; // first element in the row should always be a timestamp
    // loop through the header columns
    for (var i = 1; i < headers.length; i++) { // start at 1 to avoid Timestamp column
      if(headers[i].length > 0) {
        row.push(e.parameter[headers[i]]); // add data to row
      
      }
     }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
  
  }
  catch(error) {
    Logger.log(e);
  
  }
  finally {
    return;
  
  }


}

~~~

Check out the [github repo!](https://github.com/Cyberdr8gon/survey-form-fcc)
