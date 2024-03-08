# React-Redux API Caller and Date Picker


##API Caller Component
Created a React component that fetches data from an API every 5 seconds and displays the received data in a table. The implementation utilized React, Redux (Reducers and Actions). All the possible exceptions are handled, and if a 401 status code is encountered, a message is displayed indicating "Unauthorized User.

Note :Inorder to make UI look good, used MUI tables to display data better than just displaying raw data.

##Date Picker Component
Created two date pickers - one for selecting a start date and the other for selecting an end date. They should satisfy the following requirements:
No past dates should be allowed to be selected.
Users shouldn’t be able to select the end date before selecting the start date.
Once the start date is selected, disable all dates before the selected start date in the end date picker.
Once the end date is selected, disable all dates after the selected end date in the start date picker.
Used html input types to implement this functionality, and used state management to handle the interaction between the start and end date pickers.

User can navigate to either of the components from home page and return back.


