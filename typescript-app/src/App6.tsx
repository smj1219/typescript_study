import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./interface/Post";
/*
    interface 에 PostDto 인터페이스를 정의하고 글목록 보기, 글 추가하기 기능을 typescript 기반으로 만들어보세요
*/

function App6() {

    const a:any = 10

    const b:object = a as object

    //글목록을 상태값으로 관리
    const [posts, setPosts] = useState<Post[]>([])

    const refresh=()=>{
        axios.get("/v2/posts")
        .then(res=>{
            setPosts(res.data as Post[])
        })        
    }

    useEffect(()=>{
        refresh()
    },[])


   
    
    const handleChange=(e:any)=>{
        setPosts({
            ...posts,
            [e.target.name]:e.target.value
        })
    }

    const handleAdd = ()=>{
        axios.post("/v2/posts", posts)
        .then(res=>{
            //res.data 는 추가된 글정도 (Posts)
            //refresh() 또는 기존 배열에 아이템을 추가한 새로운 배열 얻어내서 ui 업데이트
            setPosts([...posts, res.data as Post])
        })
        .catch(error=>console.log(error))
    }


    return (
        <div>
            <h1>post 목록</h1>
            <input onChange={handleChange} name="title" type="text" placeholder="내용..." />
            <input onChange={handleChange} name="author" type="text" placeholder="작성자..." />
            <button onClick={handleAdd}>등록하기</button>
            <table>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>내용</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(item=>
                            <tr key={item.id}>
                                <th>{item.id}</th> 
                                <th>{item.title}</th>
                                <th>{item.author}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App6;