import { useState } from "react";

function Home() {
    const [data, setData] = useState([
        {id:1, title:'Title 1', context:'News 1'},
        {id:2, title:'Title 2', context:'News 2'},
        {id:3, title:'Title 3', context:'News 3'},
        {id:4, title:'Title 4', context:'News 4'},
        {id:5, title:'Title 5', context:'News 5'},
        {id:6, title:'Title 6', context:'News 6'},
        {id:7, title:'Title 7', context:'News 7'}
    ])
    return (
        <section className='home'>
            <h2>News</h2> <hr />
            {data.map((item, index) => {
                return (<div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.context}</p>
                </div>)
            })}
        </section>
    );
}

export default Home;