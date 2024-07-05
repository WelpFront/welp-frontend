import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

export const dynamic = "force-dynamic"; // defaults to auto

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
						background: "#17181c",
						color: "#fff",
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
