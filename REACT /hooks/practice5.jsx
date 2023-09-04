Suppose you're building a social media application, and you want to create a post component
that displays user information, post content, and comments.
Instead of creating a monolithic component that handles all these aspects,
you can break it down into smaller components and compose them together



Post 
-> user info 
-> post content 
-> comments


const UserInfo=({username})=>{
    return(
        <div>{username}</div>
    )
}
export default UserInfo;

const PostContent=({content})=>{
    return(
        <div>{content}</div>
    )
}
export default PostContent;

const PostComment=({author,text})=>{
    return(
        <div>
            <span>{author}</span>
            <span>{text}</span>
        </div>
    )
}
export default PostComment;

const Post=({user,content,comments})=>{
    return(
        <UserInfo username={user.username}/>
        <PostContent content={content}/>
        <div>
            {comments.map((comment,index)=>(
                <Comment key={index} author={comment.author} text={comment.texxt}/>
            ))}
        </div>
    )
}


function App=()=>{
    const post={
        user:{username:'test_user'},
        content:"here's my awesome post content"
        comments:{
            [
                {author:'author1', text:'great post'}
                {author:'author2', text:'i love it'}
            ]
        }
    }

    return(
        <div>
            <Post {...post}/>
        </div>
    )
}


Explain how you might implement a layout structure using nested components.


Write a component that fetches data from an API and displays it.

const FetchData=()=>{
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        const apiUrl='https:/some_url.com/posts';
        fetch(apiUrl)
        .then((response)=>{
            if(!response.ok){
                throw new Error('network resonse is not ok')
            }
            return response.json();
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setIsLoading(false);
        })

    },[])

    return(
        <div>
            <h1>Data from API</h1>
            <ul>
                {data.map((item)=>{
                    <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}


export default FetchData;

