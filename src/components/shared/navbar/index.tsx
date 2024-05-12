"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

const Navbar = () => {
	const [opened, setOpened] = useState<boolean>(false);

	const pathname = usePathname();

	const isActive = (link: string, includes = false) =>
		includes ? pathname.includes(link) : !!(pathname === link);

	const toggleOpenedHandler = () => {
		setOpened((prev) => !prev);
	};

	return (
		<nav
			dir="ltr"
			className={`${
				opened ? "text-black md:text-white bg-white" : "text-white"
			} shadow-none lg:bg-transparent absolute w-full`}>
			<div className="flex items-center gap-5 md:gap-20 justify-between h-16 px-2 lg:h-32 md:px-10">
				<Link href={"/"}>
					<Image
						src="/logo.svg"
						width={100}
						height={100}
						alt="logo"
						className="h-20 w-20 md:w-40 md:h-40"
					/>
				</Link>
				<div className="rounded-full h-10 md:h-12 w-full md:w-3/4  justify-between shadow-md  bg-white flex text-gray-600 gap-2 items-center px-3 overflow-hidden">
					<div className="flex items-center h-full gap-2 border-r-2 border-solid border-gray-200">
						<FaSearch className="text-gray-400" />

						<input
							type="text"
							placeholder="Ex:Food,Hospitals,Services....."
							className="text-gray-800  text-xs md:text-sm bg-transparent h-full w-full md:w-64  outline-none"
						/>
					</div>
					<div className="flex items-center h-full gap-2 ">
						<FaLocationArrow className="text-gray-400 " />

						<input
							type="text"
							placeholder="Where...."
							className="text-gray-800 text-xs md:text-sm bg-transparent h-full w-full  md:w-28 outline-none"
						/>
					</div>
					<div className="hidden items-center h-full gap-2 md:flex">
						<button className="bg-yellow-400 text-white rounded-full py-1 px-3 flex-1">
							Search
						</button>
					</div>
				</div>
				<div className="items-center justify-between hidden gap-10 lg:flex ">
					<Link
						className={`flex items-center justify-center gap-2 text-lg
						${isActive("/") ? "text-yellow-400" : "hover:text-yellow-400"}`}
						href={"/"}>
						Home
					</Link>

					<Link
						className={`flex items-center justify-center gap-2 text-lg ${
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
						services
					</Link>

					<Link
						className={`flex items-center justify-center gap-2 text-lg ${
							!isActive("/about") && "hover:text-yellow-400"
						}`}
						style={{
							textShadow: isActive("/about")
								? "1px 2px 2px #fff"
								: undefined,
							fontWeight: isActive("/about") ? "bold" : undefined,
						}}
						href={"/about"}>
						about
					</Link>
					<Link
						className={`flex items-center justify-center gap-2 text-lg ${
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
						contact
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
