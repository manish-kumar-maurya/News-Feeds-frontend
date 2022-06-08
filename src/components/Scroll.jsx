import { useState, useEffect, } from "react";
import { read } from "../api/post";
import EndAlert from "./EndAlert";
import Post from "./Post";
// import SearchBar from "material-ui-search-bar";
const Scroll = () => {
    const [posts, setPosts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        fetchPosts();

    }, [skip]);

    const fetchPosts = async () => {
        try {
            // const { data, error } = await read(skip);
            const { data } = await (await fetch('http://localhost:7000/posts')).json()
            // console.log(data)
            // .then(response => response.json())
            // .then(data => console.log(data));;

            // if (error) {
            // 	console.log(error);
            // 	return;
            // }

            if (data?.length === 0) {
                setIsEnd(true);
                return;
            }

            // success
            setPosts([...posts, ...data]);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleScroll = (e) => {
        const { offsetHeight, scrollTop, scrollHeight } = e.target;

        if (offsetHeight + scrollTop >= scrollHeight) {
            setSkip(posts?.length);
        }
    };
    return (
        <div className="min-h-screen mt-8">

            <div className="search">
                <input id="field" type="text" placeholder="Search.."/>
            </div>

            <div className="h-screen overflow-scroll" onScroll={handleScroll}>
                {/* map all posts here */}
                {posts?.map((post) => (
                    <Post key={post._id} {...post} />
                ))}
            </div>
            {isEnd && <EndAlert />}

        </div>
    );
};

export default Scroll;
