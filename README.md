# my-scheduler-3pAPI
This is a simple calendar application that allows users to keeping tracks of their tasks daily and hourly. 

## Website Links/URL
Deployed: https://binnie51.github.io/my-scheduler-3pAPI/

## How does this function?
As soon as users launch the app, they will be greeted by the current date and time at the top of the page. The timeblocks represents a regular business hours of 9AM to 5PM. Each timeblock will change color based on the current live time: grey represents the past, coral red represents the present, and pastel green respresents the future.
Users able to type in entries when they clicked on the timeblocks and customized their daily itenerary however they are pleased.  

## Demo
![short demo](./video%20demo/Work%20Day%20Scheduler.webm)



## Your Task
Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist