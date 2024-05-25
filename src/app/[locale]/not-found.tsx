import { Link } from "navigation";
import React from "react";

const NotFound = () => {
	return (
		<html>
			<body style={{ margin: 0, padding: 0 }}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						height: "100vh",
						background: "#fff",
						color: " #17181c",
						fontFamily: " 'Poppins', sans-serif",
					}}>
					<p style={{ fontSize: 40 }}> 404 | Not Found </p>

					<Link
						href="/"
						style={{
							fontSize: 20,
							color: "#fff",
							textDecoration: "underline",
						}}>
						{" "}
						Back to home
					</Link>
				</div>
			</body>
		</html>
	);
};

export default NotFound;

NotFound.getLayout = function PageLayout(page: any) {
	return <div>{page}</div>;
};
