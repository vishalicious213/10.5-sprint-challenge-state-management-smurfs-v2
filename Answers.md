1. What problem does the context API help solve?

Context helps solve the issue of excessive prop-drilling when sharing state between many components. It provides a central repository of state data that can be used to update all connected components centrally without having to share state with parent components that don't make use of that state in their own code.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action: An object with up to two properties (1) a "type" and (2) a "payload". Type is required. Its a string that explains the activity that occurred. Payload is optional. Its data that can be used to complete the action.

Reducer: A function that updates state based on the type and payload sent by an action. Reducers are the only tool in Redux allowed to update state.

Store: A single JS object that contains state for the application. Its known as a 'single source of truth' because it holds all application state - the entire application is kept up-to-date by its data.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and can be shared with any component in an application. It can potentially be updated in any component and then reshared by its store. Component state is local and can only be shared to child components as props. It can only be updated by the component that it originates from.

Application state should be used to share/update data that is needed by many components in an application, especially when the consumers live in different levels of the component tree (parents, children, grandchildren, great-grandchildren, etc.).

Component state should be used when that state data is needed on a more limited scale, like only within its containing component, or that component and its children and possibly grandchildren. The rule-of-thumb at Lambda is not to drill props more than 3 levels deep, so if state is needed for more than 3 levels of components, its better to share that state as application state.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows Redux to handle asynchronous requests. Reducers are synchronous, so they perform operations one-at-a-time in the order in which they're received. 

Redux-thunk intercepts data being sent to a reducer and determines whether to forward that data along to the reducer (if its an action) or execute it if its a "thunk" while passing dispatch data to it. Thunks are functions that are returned by other functions.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

So far, I like Context. The main reason for this is that I haven't actually tried Redux yet. I'm behind on projects. I got stuck with a reducer issue on the first project in this sprint and didn't have the foresight to just let it go and move on to the other projects - we were told that Redux builds on the reducer information, so I thought I wouldn't be able to complete any Redux projects until I had the reducer one working.

I dove into Context the day before the sprint challenge based on two thoughts: (1) it didn't necessarily need the same background info as Redux, regarding reducers and (2) it was only one lesson, whereas Redux was either 2 or 3 lessons long, depending on if reducers were counted as part of it. Because it seemed briefer and the sprint challenge said we had to use either Redux or Context, I went for the one that seemed to have the shorter learning curve.

After doing this, I do wish we'd learned Context first. It seems less complicated to me, even though initial setup takes some planning and practice. It seems like it would be a better stepping stone to something that seems more involved, like Redux.