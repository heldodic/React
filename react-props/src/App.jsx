import Cars from "./Cars";

const App = () => {
    const cars = [
        {
            brand: "Ford",
            model: "Mustang",
        },
        {
            brand: "Audi",
            model: "A6",
        },
        {
            brand: "Tesla",
            model: "Model 3",
        },
    ];

    return (
        <div>
            <Cars cars={cars} />
        </div>
    );
};

export default App;
