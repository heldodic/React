import App2 from "./App"

const App2 = () => {
    return (
        <>
            <h1>Ime: {props.ime}</h1>
            <h1>Prezime: {props.prezime}</h1>
            <h2>Dob: {props.dob}</h2>
        </>
    );
};

export default App2;