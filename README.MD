## Take Home Test
Your assignment is to implement the **Medal Count App**, defined below, as if you were submitting it for Code Review for Production.

After submission of the test, if we feel it’s beneficial to your assessment, we’ll provide a Code Review where you will either be asked to make changes or respond with changes you would make based on the feedback.

This test is meant to help us assess your ability to deliver __Production Ready__ code against a brief. We are especially interested to see how you choose to structure your code, your tooling choices, along with
your ability to deliver against the brief. Concrete implementations are always our preference; however, we understand that you may not have the time to implement everything as you would prefer. __We ask
that at minimum you deliver a working solution__. Anything you’re unable to implement, due to time constraints, we’d recommend you detail in writing. For anything you don’t deliver, as much as possible,
explain the output you’d be looking to achieve along with your estimate of the time necessary to deliver.

## Medal Count Mini App
The mini app is meant to display medal results during the Olympic games. The app shows up to 10 countries that have won the most medals of a given kind in the Olympics games.

### Requirements
1. Please time box your development time to 3hrs or less. If you spend extra time planning before development, that’s ok.
2. It can accept one parameter from the url:
- **sort**
determines the type of medals to sort by. It can have one of the following values:
'total', 'gold', 'silver' and 'bronze'.
3. If no **sort** parameter is passed the default sort should be gold.
4. Sort Ranking
- When ranking by __total__ medals, ties are broken by most gold.
- When ranking by __gold__, ties are broken by most silver.
- When ranking by __silver__, ties are broken by most gold.
- When ranking by __bronze__, ties are broken by most gold.
5. Users can click the column headers to re-sort the countries by gold, silver, bronze, or total medals won.
6. The medals data should not be re-fetched from the server when sort changes.
7. The flags should be rendered using the **flags.png** file provided.
- Flag icons are in alphabetical order according to their country code
8. The list of countries and their medals use the attached **medals.json** file.
- This should be loaded dynamically using an Ajax call (simulate a call to a live API endpoint).
- Give an appropriate error message if there was an error retrieving the JSON data (if in real production scenario the API is down).
9. Please follow the design shown in the __Examples__ section below.
10. Your implementation must be in Typescript & React, and ideally uses Next.js
11. Work must be tracked using Git and shared via a Git platform such as GitHub, GitLab, etc. with public access
12. If you choose to use a starter project or framework such as those listed under "[Creating A React App](https://react.dev/learn/creating-a-react-app)" please put the bootstrap changes in their own commit(s) and place the rest of the code you implement in one or more separate commits.
- The goal here is we are clearly able to see the code and files you produced vs what was automatically generated.
14. We’re especially interested in how you architect the application and structure the code to achieve loose coupling and separation of concerns

### Examples

#### Sort By Gold
Note the tiebreak between Netherlands and Germany is handled by total silver.

#### Sort By Total
Note the tiebreak between France and Sweden is handled by the total gold.

#### Sort By Silver
Note the tiebreak between USA, Netherlands and Sweden is handled by the total gold.

#### Sort By Bronze
Note the tiebreak between Russia and Netherlands is handled by total gold.
