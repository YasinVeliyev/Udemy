import React from "react";


const Comment = ({ name, timeAgo, comment, avatar, star }) => {
	return (
		<div className="comment">
			<a className="avatar" href="/">
				<img src={avatar} alt="" />
			</a>
			<div className="content">
				<a className="author" href="/">
					{name}
				</a>
				<div className="metadata">
					<div className="date">{timeAgo} days ago</div>
					<div className="rating">
						<i className="star icon"></i>
						{star} stars
					</div>
				</div>
				<div className="text">{comment}</div>
			</div>
		</div>
	);
};

export default Comment;
