import '../Post/post-style.css'
import type { FC } from "react";
import { FaTrashAlt } from 'react-icons/fa';


interface PropsPost {
    postData: string;
    handleDeletePost: (idPost: any) => any;
    namePerson: string;
    idPost: number;
    imageAvatarPost: string;
  }


  const Post: FC<PropsPost> = (props) => {
    return(
        <div className="post-container">
            <div className="post-image">
            <img src={props.imageAvatarPost} alt="Avatar" />
            </div>
            <div className="post-textarea">
                <div className="post-header">
                    <p>{props.namePerson}</p>
                    <FaTrashAlt className="icon-trash" onClick={() => props.handleDeletePost(props.idPost)}/>
                </div>
                <p className="post-text-data">{props.postData}</p>
            </div>
        </div>
    )
}
export default Post;