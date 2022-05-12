# The Setup

Grow Progress just made an important data acquisition from a company called
Super Fun Data Vendors (SFDV). We received our first data set from this company
are wanting to begin previewing the data.

An application is included with these files to show data from
our new provider in a table, however, the application still needs some work
done! Help us complete out the rest of this application by completing the
challenges defined in the rest of this README.md

For the purposes of this test, if you write any JavaScript code, please write it
in `assets/app.js`. If you write any CSS, please write code in
`assets/app.css`. If you use any other files not included, please be sure
to import them in `index.html`. Any 3rd party libraries or tools are fair game
to be imported.

# Getting Started

## The Node Server

This repo comes with a basic node express server. The code for the server was
written with node v14.15.3 and requires node to test. This test does not ask any
node specific questions. The server is provided only as a helpful start to your
application.

### Installation

```bash
> npm install
```

### Running the Server

```bash
> node server.js
listening on port: 8080!
```

# The Challenges

### Challenge 1: Clean up

**(50 points)** We started the application, but it still needs a little finesse
to make it a bit more usable. We'll focus on first cleaning up the data area.
You are tasked with the following:

1. We want to protect sensitive information from potentially being displayed or
   found. Update the api call to not send `first_name`, `middle_name`, `last_name`,
   `suffix`, `address`, `address_line_2`.

2. Update the `app.js` or `index.html` code so that the table displays correctly
   (headers match data) and the values are readable for a user (instead of 1/0
   display something more user friendly).

3. Finish the concept of pagination by:
    1. Limiting the results seen at a time to 50 rows.
    2. Introducing the ability to move next/previous.
    3. Disable next/previous when the data displayed does not have a
       next/previous.

### Challenge 2: Filters

**(50 points)** The concept of the filters has yet to be implemented. We started
it, but need to finish it up. You are tasked with the following:

1. Create the unique list of options for Favorite Music Genre based on the data.

2. Hook the form up to be able to filter the data based upon the input: State,
   Favorite Music Genre, Plays Musical Instrument.

3. Next/Previous buttons should retain what query filters we have on the data.

### Bonus Challenge: Ordering

**(10 points)** In order to add some additional functionality, we want to have the ability to
order the results. Add in the functionality to allow the user to sort any column
by using the input toggle "Sort By".
