import React from "react";
import './style.css';

const Post = (props) => {
	console.log(props)
	return (
		<div className="card shadow-sm bg-neutral text-accent-content mx-8 md:mx-36 lg:mx-80 mb-28">
			<div className="flex my-3">
				<div className="avatar">
					<div className="mx-4 rounded-full w-12 h-12">
						<img src={props.thumbnailImage} alt="avatar" />
					</div>
				</div>
				<div className="self-center font-bold">{props.headline}</div>
			</div>
			{/* <p>
				{props.headline}
			</p> */}
			<div className="mx-4 my-3">
				<div class="Flex-items">
					
					<span className="font-bold">{`Author: ${props.authorName}`}</span>
				
					<span className="font-bold">{`Category: ${props.category}`}</span>
					<span className="ml-2 text-sm">{`Added on: ${props.uploadDate}`}</span>
				</div>	
					
				
			</div>
			
		</div>
	);
};

export default Post;
