import { useState } from "react";
import './app.scss';

const App = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <span className="count">{count}</span>
            <button className="button" onClick={() => setCount((prev) => prev + 1)}>+1</button>
            Hello Stas!
        </div>
    )
}

export default App;