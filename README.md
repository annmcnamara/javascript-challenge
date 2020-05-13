# JavaScript Homework - JavaScript and DOM Manipulation
![Welcome The Truth is out There!](/images/banner.png)

## Background

`ALIENS-R-REAL` have collected all of the eye-witness reports to could to prove extra-terrestial activity! This exercise puts this information online for the world to see and then the matter will finally be put to rest.

This code that creates a table dynamically based upon a [dataset](/UFO-level-1/static/js/data.js). 

Users can also filter the table data for specific values. The project uses pure JavaScript, HTML, and CSS, and D3.js 

## Task

### Repository Structures

1. Two folders to correspond to the challenges: **UFO-level-1** and **UFO-level-2**.

2.  **html** files are in these folders as well as the static folder containing your javascript. This is the main script to run for analysis.

3. Both web pages are available through these links 
* [https://annmcnamara.github.io/ufo_1.html](https://annmcnamara.github.io/ufo_1.html) 
* [https://annmcnamara.github.io/ufo_2.html](https://annmcnamara.github.io/ufo_2.html) 
### Level 1: Automatic Table and Date Search (Required)

* **UFO-level-1** contains a basic HTML web page was built, and is saved at [index.html](/UFO-level-1/index.html) 

* Using the UFO dataset provided in the form of an array of JavaScript objects, code was developed that appends a table to the web page and then adds new rows of data for each UFO sighting.

  * The columns are `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* A date form is provided in the HTML document.  JavaScript code that listens for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories (Optional)

* Using multiple `input` tags, JavaScript code was developed to allow the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](/UFO-level-1/static/js/data.js)

- - -

**Sample Screenshots are included below**

### LEVEL 1 Screenshots
#### Initial Load
![Initial Load](/images/initialLoad.png)

#### Date Filter
![DateSearch Load](/images/dateSearch.png)
### LEVEL 2 Screenshots
#### Initial Load
![Initial Load](/images/initialLoad.png)

#### Date Filter
![DateSearch Load](/images/dateSearch.png)

#### Date and City Filter
![DateCity Load](/images/dateCitySearch.png)

#### Date and State Filter
![DateState Load](/images/dateStateSearch.png)

#### City and State Filter
![cityStates Load](/images/cityState.png)


### Additional Features
#### Clear Search (clears all search fields, reloads table)
![clear Load](/images/clearSearch.png)

#### Filter Search (same as pressing enter)
![filter Load](/images/emptySearchFilter.png)

#### Load Table (reloads all rows)
![load Load](/images/loadTable.png)

#### More screenshots can be found [here](/images/)

- - -

### Copyright
Ann McNamara © 2020. All Rights Reserved.
