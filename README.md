# Whatsapp-like web-client

Submitters:

Yuval Uner, ID: 322558842, Github: OddPanda.\
Nadav Elgrabli, ID: 316082791, Github: ZycleXx.

To run the project, use "npm start".

### `dependencies`
1. React
2. React-Bootstrap
3. React-router / React-router-dom

# Main Components

## Mandatory components

### `Log-in form`
The home screen of the app when a user is not logged in.
![img.png](src/Resources/log-in-screen.png)

Verifies the validity of the username on log-in and directs them to the main chat app,
or allows them to go to the sign-up form or the forgot password form.

Also lets the user know if they have an error when trying to log in, allows switching between
logging in via username or password, enabling or disabling 
the "remember me" feature, and toggling "show password".

### `Sign-up form`
The form for a new user to sign up.
![img.png](src/Resources/sign-up-screen.png)

Allows for inputting all of the vital information, as well as some non-vital information.\
Performs basic checks while the user inputs their information.

### `Main app`
The main part of the project. Allows for conversations between users.
![img.png](src/Resources/main-app.png)

The main app supports sending text, video, image and audio between users.\
It also allows for a user to change their profile picture, description and nickname, as well as 
add contacts to their contacts list, all via the buttons' toolbar to the right of their nickname.

The right side of the screen (the conversation itself) will appear once a contact is chosen.

## Additional, non-mandatory components

### `Email verification form`
![img.png](src/Resources/email-verification-screen.png)

Currently, all the front end parts of this screen are complete.\
However, we are not sending out the email, as sending an email via the browser
is nonsensical.\
Instead, to bypass this feature, input 111111 (or have fun trying to guess the code).

### `Forgot password form`

A three part process, starting from verifying some of the user's info:
![img.png](src/Resources/intial-forgot-password-form.png)

Followed by verifying the user's email using the email verification form, then allowing the user to reset
their password:
![img.png](src/Resources/reset-password-screen.png)

After resetting password, the user will be redirected to the log-in screen and have an indication
that they have successfully reset their password.

### `Error checking`

![img.png](src/Resources/error-checking.png)

Almost all fields have some manner of error checking to them, alerting 
the user to any error right away.

### `Search contacts`

Allows for searching through contacts, and updates the displayed contacts while typing. 

![img.png](src/Resources/all-contacts.png)

![img.png](src/Resources/filtered-contacts.png)

## Known issues

### `Form related`

1. Going back from verifying email after registration to the log-in screen causes the 
"Password changed successfully" text to mistakenly appear.\
As this is a fairly uncommon and unlikely scenario which requires the user to use controls outside of those we designed for navigation
, we did not try to fix it within our time constraints.

### `Chat related`

On trying to converse with the hard coded contacts (those hard coded in the RegisteredUsers.js file,
the same ones added on sign-up for demonstration purposes), the following can occur:
1. They will not display the sent messages on their end.
2. If trying to converse with them after logging out once, errors will be caused.

These issues are caused by the way the arrays containing the hard coded users are loaded.\
However, everything done between 2 "real", that is, users actually created via the sign-up process
works with no issues.\
Therefore, we chose not to try and fix this as all the hard-coded users will be gone once a server is up.