Changes made (Updated April 12th):

App.js:
  * Imported the screens that I created (LoginScreen, SplashScreen, SignUpScreen, and WalkthoughScreen)
  * Created an AuthStack that contains the four screens I've been working on, with the inital route set to the LoginScreen
  * Changed the first tab in the tab naviagtor to Tasks, as we have changed this area to a to do list
  * Exporting a switch navigator that includes the AppStack and the AuthStack, with the inital route set to AuthStack
 
LoginScreen.js:
  * Created the screen to login with text input (email and password)
  * Buttons that navigate to WalkthroughScreen (Sign up) or ClassesScreen (Lets go)
  
SplashScreen.js:
  * Currently still working on how this part works, as of right now its an uncalled file

SignUpScreen.js:
  * Created a screen to sign up with text input (name, email, password, and confirm password)
  * Button that navigates to ClassesScreen (Lets go)

WalkthroughScreen.js:
  * Created a screen to scroll through instructions and basic functions of the app, taking images from assets folder
  * Button that navigates to SignUpScreen (Got it)
  
ProfileScreen.js:
  * Added a log out button that navigates to LoginScreen

ProfileSettings.js:
  * Added a save changes button that navigates back to the ProfileScreen

ScheduleScreen.js:
  * Includes a search box, and calander strip that sorts the tasks out by day
  * Holds all the tasks (TaskCard) and a button that navigates to NewTask

TaskCard.js:
  * Represents a single task in the to do list, including a completion button
  * Button that navigates to TaskDetail screen
  
TaskButton.js:
  * The functions for a completion button, color changes depending on class that task is under
  
TaskDetail.js:
  * Currently still working on this, but it will include all details of the task
  
NewTask.js:
  * Contains 4 textInput components and an add button that navigates to ScheduleScreen
  * Exit button at the top to cancel adding task, navigates back to ScheduleScreen
