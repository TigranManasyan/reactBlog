import { useContext } from "react";
import { appContext } from "../../context";

const Counter = () => {
    const {state, dispatch} = useContext(appContext); 
    return (
        <div>
            <h2>N: {state.n}</h2>
            <button onClick={() => {
                dispatch({
                    type:'incrementN'
                });
            }}>+1</button>
            <button onClick={() => {
                dispatch({
                    type:'addN',
                    payload: parseInt(prompt('Enter n value'))
                });
            }}>Add N</button>
        </div>
    );
}

export default Counter;