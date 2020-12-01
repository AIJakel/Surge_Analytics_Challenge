# Disclaimers
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Description
The application consists of 2 components:​​​​​​​​​​​​​​​​
1. Sales orders entry component.​
2. Credit check component.​

Sales order entry widget​​​​​​​​​​​​​​​​:
Takes “product name”, “price”, “qty”. It shows all entered lines and calculates totals.​​​​​​​​​​​​​​​​ Displays errors for non-number values.

​​​​​​​​​​​Credit check widget​​​​​​​​​​​​​​​​:
The widget will be used to check the maximum order amount. Takes the maximum amount (credit limit). If the currently entered order total less than the credit limit, the “indicator box” is green, otherwise - the “indicator box” will be blinking red.​​​​​​​​​​​​​​​​
Credit limit is saved across sessions with a cookie.

# How to install locally
1. Downlaod the repository.
2. In the project directory run: `npm start`

