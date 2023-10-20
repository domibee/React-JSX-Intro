const App = () => (
    <div>
        <FirstComponent/>

        <NamedComponent name = "Dom"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))