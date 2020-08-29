import React from "react";
import { Button, Card } from "react-bootstrap";

const News = (props) => {
	const { title, description, url } = props.article;
	return (
		<div className="container">
			<Card>
				<Card.Header>Featured</Card.Header>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<Button variant="primary">{url}</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default News;
