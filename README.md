# Hold Shift and checking the boxes

### Building the intuition

1. Select all the checkboxes
2. check click event for each checkbox and run the function handlecheck
3. set a lastcheck variable and assign it to this checkbox in handlecheck
4. check if they had shift key down with ```e.shiftKey``` AND check if they are checking the checkbox ```this.checked```
5. create a flag varible inBetween to false
6. loop over all the checkboxes in the if statement of 4th point
7. check for the checkbox for this or lastchecked and flip the inBetween flag
8. another check for the inBetween flag if true set the .checked property of checkbox to true
