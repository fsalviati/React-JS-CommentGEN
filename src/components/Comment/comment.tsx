import { useState } from "react";
import '../Comment/comment-style.css'
import Post from "../Post/post";
import type { FC } from "react";

interface PostText {
    idPost?: number;
    post?: string;
    person?: string;
    imageAvatarPost?: string;
}

interface PropsComment {
    postList: PostText[];
    setPostList: any;
}

const profilesObj = [
    {
        name: "Fernando",
        gitlink: "https://github.com/fsalviati.png"
    },
    {
        name: "Cesar",
        gitlink: "https://github.com/lenymo.png"
    },
    {
        name: "Karla",
        gitlink: "https://github.com/dianavile.png"
    },
    {
        name: "Marc",
        gitlink: "https://github.com/marcnewport.png"
    },
    {
        name: "Sarah",
        gitlink: "https://github.com/sdras.png"
    },
    {
        name: "Brad",
        gitlink: "https://github.com/bradtraversy.png"
    },
    {
        name: "Nichole",
        gitlink: "https://github.com/pplsi-nicr8r.png"
    },
    {
        name: "Geri",
        gitlink: "https://github.com/chicacode.png"
    },
    {
        name: "Joshua",
        gitlink: "https://github.com/techadam.png"
    }
    ]

const Comment: FC<PropsComment> = (props) => {
    const [idPost, setIdPost] = useState<number>();
    const [textPost, setTextPost] = useState<string>('');
    const [personPost, setPersonPost] = useState<string>('');
    const [imagePost, setImagePost] = useState<string>('');
    const {postList, setPostList} = props;

    
    const resetInputField = () => {
        setTextPost("");
      };

    const handlePost = () => {
        const newPostList = [...postList, {["idPost"]:idPost, ["post"]:textPost, ["person"]:personPost, ["imageAvatarPost"]:imagePost}];
        setPostList(newPostList);
        resetInputField();
    };

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
      function handleDeletePost(idPost: any) {
        const newPostListDeleted = postList.filter(item => {
            return item.idPost !== idPost;
        });
        setPostList(newPostListDeleted);
    }


    return(
        <div className='comment'>
            <div className='comment_top_container'>
                <div className='comment_image_container'>
                    <img src="https://github.com/fsalviati.png" />
                </div>
                <div className='comment_text_container'>
                  <p>Fernando Salviati</p>
                  <p>Web Developer</p>
                </div>
                <div className='comment_text_bottom_container'>
                  <p>Hello Everyone!</p>
                  <p>Welcome to CommentGen, the innovative app designed to effortlessly generate engaging comments and foster lively conversations! Whether you're a content creator, social media enthusiast, or just looking to spice up your online interactions, CommentGen is your go-to tool for creating compelling comments that leave an impact.</p>
                  <p>#newproject - #reactjs - #Typescript - #postpage - #coding</p>
                  <br/>
                  <a href="https://github.com/fsalviati">https://github.com/fsalviati</a>
                  <p>*App built for studying purposes.</p>
                </div>
                <div className='comment_feedback_section'>
                    <p>Leave your comment:</p>
                    <textarea onChange={(e) => {
                                        let arrayPosition = randomInteger(0, profilesObj.length - 1); 
                                        let indexPost = randomInteger(1, 1000000);
                                        console.log('index = ', indexPost)
                                        setIdPost(Number(indexPost)); 
                                        setTextPost(e.target.value); 
                                        setPersonPost(profilesObj[arrayPosition].name);
                                        setImagePost(profilesObj[arrayPosition].gitlink);
                                        }} 
                                value={textPost} name="Leave a comment" 
                                placeholder="Leave a comment">
                    </textarea>
                    <button disabled={!textPost} onClick={handlePost}>Submit</button>
                </div>
                {postList.length?
                <div>
                    {postList.map((post) => (
                <div key={post.idPost}>
                     <Post  postData={post.post!} handleDeletePost={handleDeletePost} idPost={Number(post.idPost)} namePerson={post.person!} imageAvatarPost={post.imageAvatarPost!}/>
                 </div>
                    ))}
                </div>
                : null}
            </div>
        </div>
    );
}

export default Comment;