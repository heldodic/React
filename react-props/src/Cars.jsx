import Car from "./Car";

const Cars = (props) => {
    return (
        <>
            {props.cars.map((car) => (
                <Car brand={car.brand} model={car.model} />
            ))}
        </>
    );
};

export default Cars;
