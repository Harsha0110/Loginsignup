# Login_ Signup Page 


(a) How to run the project.

   Ensure Prerequisites are Installed
    Before running the project, ensure the following are installed on your system:

   Node.js: Download and install from nodejs.org. This includes npm, the Node Package 
    Manager.
    A Code Editor: Use Visual Studio Code (VS Code) for easy project setup and 
    management.
     After setting up the project go to terminal type :- npm start

(b) The design choices made. 

  1. Separate components for LoginForm and SignUpForm.You can make changes to one form 
  without affecting the other.

  2. Used React state (useState) to toggle between the LoginForm and SignUpForm.

  3.Provides a simple and effective way to manage which component is displayed based 
   on user interaction.

4.Improves the user experience by keeping the interaction on the same page rather than navigating to a different route.


  6. CSS Animations Added subtle fade-in effects and button hover transitions.Enhances 
  the user experience without overwhelming the interface.Adds a modern touch to the 
  design, making the app feel more dynamic and engaging.

 7.Validation with Formik and Yup Used Formik for form handling and Yup for schema- 
 based validation.
  These libraries simplify handling user input and validation, reducing boilerplate 
   code.

 8. Used a simple alert to notify users of successful login.Provides immediate 
 feedback to users.Keeps the interaction functional without adding extra complexity.

(c) Any assumptions or limitations.
 1. There's no backend integration for authentication.
 2. : The form only temporarily stores the login state in localStorage (if rememberMe is checked). There's no session management or persistent user login across sessions.
3. no error feedback
