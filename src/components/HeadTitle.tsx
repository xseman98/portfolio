import React from 'react'

interface HeadProps {
	title: string,
	description: string
}
const HeadTitle: React.FC<HeadProps> = (props) => {
	const { title, description } = props;

	return (
		<head>
			<title>{title}</title>
			<meta name="description" content={description} />
        	<link rel="icon" href="/profile.png" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
		</head>
	)
}

export default HeadTitle