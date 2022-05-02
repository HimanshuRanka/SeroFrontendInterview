import React from "react"
import { Card } from 'semantic-ui-react'

//The Data for the first task
import {CardDataTask1} from "./constants";

//The Data for the third task
import {CardDataTask3} from "./constants";

/** Setup
 * Open your terminal and run "npm start" so that we can see the results of our work.
 */


/**

    Task 1: Use the Semantic UI Card component along with any other JS method or React component to
            display the data in CardDataTask1 in the <div> below in a single row.
            Make sure all the cards are seperated by section and they dont flow off the page

    Task 2: Add a property to each Card element such that the card displays a click-counter.
            Set this counter to 1 when the page loads. Create a button that updates this
            counter on every card when clicked. The update should take the previous value and double it
    Ex:     on load: counter: 1
            on first click: 2
            on second click: 4
            on third click: 8 ...

    Task 3: The Data in CardDataTask3 has a field called "Countries." This is an array of strings.
            Write a utility method that takes this array and converts it into a single comma
            seperated string.
    Ex:     [India, China, USA] --> "India, China, USA"

 */


export default function CardDisplay () {
    return (
        <div>
            Your Code Goes Here
        </div>
    )
}