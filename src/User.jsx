const User = (props) => {
    return (
        <>
            <h1>Ime: {props.ime}</h1>
            <h1>Prezime: {props.prezime}</h1>
            <h2>Dob: {props.dob}</h2>
        </>
    );
};

export default User;