const App = () => (
    <div>
        <Person name="Dom" age={39} hobbies={["k-drama", "drinking tea"]}/>  
        <Person name="Pay" age={29} hobbies={["games", "kitties"]}/>  
        <Person name="Same" age={7} hobbies={["k-drama", "food"]}/>  
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))