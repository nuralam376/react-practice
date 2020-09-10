import React, { useState } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const LikeButton = () => {
	const [likeColor, setLikeColor] = useState("");

	const handleColorClick = () => {
		setLikeColor(likeColor ? "" : "primary");
	};
	return (
		<div>
			<ThumbUpAltIcon
				onClick={handleColorClick}
				color={likeColor}
			></ThumbUpAltIcon>
		</div>
	);
};

export default LikeButton;
