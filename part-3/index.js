const Person = (props) => {
    const voteText = props.age > 18 ? "please go vote" : "you must be 18";
    const hobby = props.hobbies.map((h,index) => <li key = {index}>{h}</li>)
    return (
        <div>
            <p>Learn some more information about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                Hobbies {hobby}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    )
}
