import dataSite from "./data";
import postImage from "../styles/style-components/img/postImage/postPhote.jpg";

const postInfo = dataSite[0].posts;

const PostsItem = (props) => 

    <div className="posts__all__item">
        <div className="posts__all__data">By <a href="#">{props.user}</a> | {props.data}</div>
        <h4 className="posts__all__content">{props.content}</h4>
    </div>


export default function Posts(){
     return(
        <section className="posts">
            <div className="wrapper">
                <div className="posts__block">
                    <div className="posts__featured">
                        <h2>Featured Post</h2>
                        <div className="posts__featured__block">
                            <img src={postImage} alt="post image" />
                            <PostsItem user={postInfo.postOne.user} data={postInfo.postOne.data} />
                            <div className="posts__featured__block__article">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                            <button className="btn yellow">{dataSite[0].intro.btn.rM}</button>
                        </div>
                    </div>
                    <div className="posts__all">
                        <div className="posts__all__ahead">
                            <h2>All Posts</h2>
                            <a href='#'>View All</a>
                        </div>
                        <PostsItem user={postInfo.postOne.user} data={postInfo.postOne.data} content={postInfo.postOne.article}/>      
                        <PostsItem user={postInfo.postTwo.user} data={postInfo.postTwo.data} content={postInfo.postTwo.article}/>  
                        <PostsItem user={postInfo.postThree.user} data={postInfo.postThree.data} content={postInfo.postThree.article}/>  
                        <PostsItem user={postInfo.postFour.user} data={postInfo.postFour.data} content={postInfo.postFour.article}/>  
                    </div>
                </div>
            </div>
        </section>
    )
}
