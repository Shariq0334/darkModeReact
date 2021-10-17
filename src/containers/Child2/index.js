import Child3 from "../Child3";

function Child2({ name, setName }) {
    return (
        <div>
            <h1>Child2</h1>
            <Child3 name={name} setName={setName} />
        </div>
    )
}

export default Child2;