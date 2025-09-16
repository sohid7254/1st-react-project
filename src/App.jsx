import { renderToStaticMarkup } from "react-dom/server";
import "./App.css";
import Counter from "./counter";
import Batsman from "./basement";
import ToDo from "./todo";
import Users from "./users";
import { Suspense } from "react";
import Friends from "./friends";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  
const fetchFriends = async() =>{
const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}
function App() {
    const time = 50;
    const friendsPromise = fetchFriends();

    return (
        <>
            <h1>React Core Concept</h1>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Users fetchUsers={fetchUsers}></Users>
            </Suspense>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Friends friendsPromise={friendsPromise}></Friends>
            </Suspense>

            <Batsman></Batsman>
            <Counter></Counter>

            {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Take a shower" isDone={true} time="100"></ToDo> */}
            {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mojumder" tech="JAva"></Developer>
      <Developer name="Liliput" tech="Pythone"></Developer>
      <Developer name="Farhana" tech="NodeJS"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Salami event="Roja Eid"></Salami>
      <Brand brand="Xiaomi" price="15000"></Brand> */}
        </>
    );
}
// Using Destrucing
function Player({ name, runs }) {
    return (
        <div className="student">
            <h3>Name: {name}</h3>
            <p>Runs: {runs}</p>
        </div>
    );
}

function Brand({ brand, price }) {
    return (
        <div className="student">
            <h3>Phone: {brand}</h3>
            <p>Price: {price}</p>
        </div>
    );
}

function Salami({ event, amount = 0 }) {
    return (
        <div className="student">
            <h3>Salami For: {event}</h3>
            <p>Amount: {amount}</p>
        </div>
    );
}

// Using Props
function Developer(props) {
    console.log(props);
    return (
        <div
            style={{
                border: "2px solid red",
                borderRadius: "20px",
            }}
        >
            <h3>Developer: {props.name}</h3>
            <p>Technology: {props.tech}</p>
        </div>
    );
}

function Person() {
    const age = 17;
    const name = "Jollie";
    const personStyle = {
        color: "red",
        textAlign: "right",
    };
    return (
        <p style={personStyle}>
            I am a Person: {name} {age} years old
        </p>
    );
}
function Student() {
    return (
        <div className="student">
            <p>Name: </p>
            <p>Dept: </p>
        </div>
    );
}
export default App;
