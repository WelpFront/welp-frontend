"use client";

import { SearchInput } from "atoms";
import { Link, usePathname } from "navigation";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Navbar = ({ translation }: { translation: any }) => {
	const [opened, setOpened] = useState<boolean>(false);

	const pathname = usePathname();

	const isActive = (link: string) => pathname === link;

	const linksWithWhiteBackground = ["menu"];

	const withWhiteBackground = !!linksWithWhiteBackground.find((link) =>
		pathname.includes(link)
	);

	const toggleOpenedHandler = () => {
		setOpened((prev) => !prev);
	};

	return (
		<div
			className={`
			${
				withWhiteBackground || opened
					? "bg-white md:bg-transparent shadow-md  static top-0 text-black"
					: "absolute shadow-none lg:bg-transparent text-white"
			}			
			  w-full`}>
			<div
				className={`flex items-center gap-2 md:gap-12 justify-between  px-5 md:px-10
					${withWhiteBackground ? "h-16	lg:h-20" : "h-16 lg:h-36"}
				`}>
				<Link href={"/"}>
					<Image
						src="/logo.svg"
						width={100}
						height={100}
						alt="logo"
						className="h-20 w-20 md:w-40 md:h-40"
					/>
				</Link>
				<SearchInput
					className="hidden lg:flex"
					translation={translation}
				/>
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
							!isActive("/services") && "hover:text-yellow-400"
						}`}
						scroll={pathname !== "/"}
						style={{
							textShadow: isActive("/services")
								? ".5px .5px .5px #fff"
								: undefined,
							fontWeight: isActive("/services")
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
						className={`flex items-center justify-center gap-2 whitespace-nowrap text-white bg-secondary p-2 rounded-full text-md ${
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
						className={`w-6 h-0.5 ease-in-out duration-100 ${
							withWhiteBackground || opened
								? "bg-black"
								: "bg-white"
						} ${opened && "rotate-45 translate-y-1.5 "} `}
					/>
					<div
						className={`w-6 h-0.5 ease-in-out duration-100 ${
							withWhiteBackground || opened
								? "bg-black"
								: "bg-white"
						} ${opened && "opacity-0 "}`}
					/>
					<div
						className={`w-6 h-0.5 ease-in-out duration-100 ${
							withWhiteBackground || opened
								? "bg-black"
								: "bg-white"
						} ${opened && "-rotate-45 -translate-y-1.5 "}`}
					/>
				</button>
			</div>

			<div
				className={`flex lg:hidden flex-col items-start justify-start ease-out duration-100 gap-10 px-5  ${
					opened
						? "max-h-96 py-4 border-t border-white"
						: "overflow-hidden max-h-0"
				}    md:px-10 lg:px-20`}>
				<SearchInput
					className="flex lg:hidden"
					translation={translation}
				/>
				<Link
					className="flex items-center justify-center gap-2 text-lg"
					href={"/"}
					onClick={toggleOpenedHandler}>
					{translation.home}
				</Link>
				<Link
					className="flex items-center justify-center gap-2 text-lg"
					scroll={false}
					onClick={() => {
						toggleOpenedHandler();
					}}
					href={"/#services"}>
					{translation.forBusinesses}
				</Link>
				<Link
					className="flex items-center justify-center gap-2 text-lg"
					href={"/about"}
					onClick={toggleOpenedHandler}>
					{translation.blog}
				</Link>
				<Link
					className={`flex items-center justify-center gap-2 whitespace-nowrap text-white bg-secondary p-2 rounded-full text-md ${
						!isActive("/contact") && "hover:text-yellow-400"
					}`}
					href={"/contact"}
					onClick={toggleOpenedHandler}>
					<FaPlus />

					{translation.addPlace}
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
