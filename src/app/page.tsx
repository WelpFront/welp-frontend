import Image from "next/image";

const Home = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<Image src="/logo.png" width={80} height={80} alt="logo" />
		</div>
	);
};

export default Home;
