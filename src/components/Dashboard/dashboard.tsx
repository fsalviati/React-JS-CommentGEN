
import React, { useState } from "react";
import {Sidebar} from "../Sidebar/sidebar";
import Comment from "../Comment/comment";
import '../Dashboard/dashboard-style.css'

interface PostText {
    post?: string;
  }

export function Dashboard(){
    const [postList, setPostList] = useState<PostText[]>([]);
    return(
    <>
        <div className='wrapper'>
            <Sidebar />
            <Comment postList={postList} setPostList={setPostList}/> 
        </div>
    </>
    );
}