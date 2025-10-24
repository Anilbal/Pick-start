import Stepper from "./components/elements/stepper/stepper.tsx";

const steps = [
    {name: "User", component: () => <h1>This is one</h1>},
    {name: "Language", component: () => <h1>This is two</h1>},
    {name: "Frameworks", component: () => <h1>This is three</h1>},
    {name: "Overview", component: () => <h1>This is four</h1>},
];

function App() {
    return (
        <div>
            <Stepper steps={steps}/>
        </div>
    );
}

export default App;
