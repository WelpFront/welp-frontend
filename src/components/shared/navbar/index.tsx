"use client";

import { Link } from "navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Navbar = ({ translation }: { translation: any }) => {
	const [opened, setOpened] = useState<boolean>(false);

	const pathname = usePathname();

	const isActive = (link: string, includes = false) =>
		includes ? pathname.includes(link) : !!(pathname === link);

	const toggleOpenedHandler = () => {
		setOpened((prev) => !prev);
	};

	return (
		<nav
			className={`${
				opened ? "text-black  bg-white" : "text-white"
			} shadow-none lg:bg-transparent absolute w-full`}>
			<div className="flex items-center gap-2 md:gap-12 justify-between h-16 px-2 lg:h-32 md:px-10">
				<Link href={"/"}>
					<Image
						src="/logo.svg"
						width={100}
						height={100}
						alt="logo"
						className="h-20 w-20 md:w-40 md:h-40"
					/>
				</Link>
				<div className="rounded-full h-10 md:h-12 w-full md:w-3/4  relative  justify-between shadow-md  bg-white flex text-gray-600 gap-1  items-center overflow-hidden">
					<div className="flex items-center h-full gap-2 border-l-2 border-solid ps-3 border-gray-200 ">
						<FaSearch className="text-gray-400" />

						<input
							type="text"
							placeholder="Ex:Food,Hospitals,Services....."
							className="text-gray-800  text-xs md:text-sm  h-full w-full   outline-none"
						/>
					</div>
					<div className="flex items-center h-full gap-2 justify-start">
						<Image
							width={20}
							height={20}
							src={"/navigation.svg"}
							alt="navigation"
						/>

						<input
							type="text"
							placeholder="Where...."
							className="text-gray-800 text-xs md:text-sm  h-full w-full   outline-none"
						/>
					</div>
					<div className="hidden items-center h-full gap-2 md:flex ">
						<button className="bg-secondary text-white  h-full py-1 px-5 flex-1 start-0 relative">
							<FaSearch className="text-white" />
						</button>
					</div>
				</div>
				<div className="items-center justify-between hidden gap-7 lg:flex  ">
					<Link
						className={`flex items-center justify-center gap-2 text-md whitespace-nowrap
						${isActive("/") ? "text-yellow-400" : "hover:text-yellow-400"}`}
						style={{
							fontWeight: isActive("/") ? "bold" : undefined,
						}}
						href={"/"}>
						{translation.home}
					</Link>

					<Link
						className={`flex items-center justify-center gap-2 whitespace-nowrap text-md ${
							!isActive("/services", true) &&
							"hover:text-yellow-400"
						}`}
						scroll={pathname !== "/"}
						style={{
							textShadow: isActive("/services", true)
								? ".5px .5px .5px #fff"
								: undefined,
							fontWeight: isActive("/services", true)
								? "bold"
								: undefined,
						}}
						href={"/#services"}>
						{translation.forBusinesses}
					</Link>

					<Link
						className={`  whitespace-nowrap text-md ${
							!isActive("/about") && "hover:text-yellow-400"
						}`}
						style={{
							textShadow: isActive("/about")
								? "1px 2px 2px #fff"
								: undefined,
							fontWeight: isActive("/about") ? "bold" : undefined,
						}}
						href={"/about"}>
						{translation.blog}
					</Link>
					<Link
						className={`flex items-center justify-center gap-2 whitespace-nowrap bg-secondary p-2 rounded-full text-md ${
							!isActive("/contact") && "hover:text-yellow-400"
						}`}
						style={{
							textShadow: isActive("/contact")
								? "1px 2px 2px #fff"
								: undefined,
							fontWeight: isActive("/contact")
								? "bold"
								: undefined,
						}}
						href={"/contact"}>
						<FaPlus />
						{translation.addPlace}
					</Link>
				</div>

				<button
					onClick={toggleOpenedHandler}
					className="flex flex-col gap-1 cursor-pointer lg:hidden">
					<div
						className={`w-6 h-0.5 ease-in-out duration-100 bg-white ${
							opened && "rotate-45 translate-y-1.5 bg-black"
						} `}
					/>
					<div
						className={`w-6 h-0.5 ease-in-out duration-100 bg-white ${
							opened && "opacity-0 bg-black"
						}`}
					/>
					<div
						className={`w-6 h-0.5 ease-in-out duration-100 bg-white ${
							opened && "-rotate-45 -translate-y-1.5 bg-black"
						}`}
					/>
				</button>
			</div>
			<div
				className={`flex lg:hidden flex-col items-start justify-start ease-out duration-100 gap-10 px-5  ${
					opened
						? "max-h-96 py-4 border-t border-white"
						: "overflow-hidden max-h-0"
				}    md:px-10 lg:px-20`}></div>
		</nav>
	);
};

export default Navbar;
