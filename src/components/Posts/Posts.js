import { useEffect, useState } from "react";
import "./Posts.css";
import axios from "axios";
import PostItem from "../PostItem/PostItem";

function Posts() {
    const [data, setData] = useState([]);
    const [isFetch, setIsFetch] = useState(true);
    const [max, setMax] = useState(0);

    useEffect(()=>{
        if(isFetch && (data.length < max || max === 0)) {
            axios.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20").then(response => {
                const data = response.data.map( el => ({
                    ...el,
                    isReaded:false
                })); 
                setMax(+response.headers['x-total-count']);
                setData(prevData => [...prevData, ...data]);
            }).finally(() => {
                setIsFetch(false);
            });
        }
    }, [isFetch]);


    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);


        return () => {
            //componentWillUnmount
            window.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = (e) => {
        let sh = e.target.documentElement.scrollHeight;
        let st = e.target.documentElement.scrollTop;
        let ih = window.innerHeight;
        if(sh - st - ih < 300) {
            setIsFetch(true);
        }

    }


    const checkReaded = (id) => {
        const newData = data.map( post => {
            if(post.id === id) {
                return {
                    ...post,
                    isReaded:true
                }
            } else {
                return post;
            }
        });
        setData(newData)
    }
    return (
        <div className="container">
            <div className="post-list">
                <h2>POST LIST</h2>
                <hr />
                {data.map((post, index) => <PostItem key={index} post={post} checkReaded={checkReaded} />)}
            </div>
        </div>
    );
}
export default Posts;