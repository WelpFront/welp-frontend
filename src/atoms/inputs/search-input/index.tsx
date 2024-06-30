"use client";

import { getCookie, setCookie } from "cookies-next";
// @ts-ignore
import * as lookup from "coordinate_to_country";
import { useCitiesList } from "hooks";
import { useRouter, usePathname } from "navigation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { toast } from "react-toastify";
import { useBusinessesFilterStore } from "store/businesses-filters";

const SearchInput = ({
	translation,
	className,
}: {
	translation: any;
	className?: string;
}) => {
	const { data, loading } = useCitiesList();

	const searchParams = useSearchParams();

	const [showCities, setShowCities] = useState(false);

	const [filteredCities, setFilteredCities] = useState(data);

	const [cityValue, setCityValue] = useState<any>();

	const [keyword, setKeyword] = useState<string | null>(
		searchParams?.get("search") as string
	);

	const location = getCookie("location");

	const inputRef = useRef<HTMLInputElement>(null);

	const listRef = useRef<HTMLDivElement>(null);

	const locale = getCookie("NEXT_LOCALE");

	const createQueryString = useCallback(
		(name: string, value: any) => {
			if (value) {
				const params = new URLSearchParams(searchParams.toString());
				params.set(name, value);
				return params.toString();
			}
		},
		[searchParams]
	);

	const removeQueryParam = useCallback(
		(name: string, pathname: string) => {
			if (name) {
				const params = new URLSearchParams(searchParams.toString());
				params.delete(name);
				router.push(pathname + "?" + params);
			}
		},
		[searchParams]
	);

	const router = useRouter();

	const pathname = usePathname();

	const setSearchKeyword = useBusinessesFilterStore(
		(state) => state.setSearchKeyword
	);
	const setCity = useBusinessesFilterStore((state) => state.setCity);

	const searchHandler = () => {
		if (
			keyword ||
			(cityValue &&
				(data.find((city) =>
					city?.name
						?.toLowerCase()
						.includes(cityValue?.name?.toLowerCase() || cityValue)
				) ||
					cityValue === translation.currentLocation))
		) {
			if (keyword) setSearchKeyword(keyword);

			if (
				cityValue !== translation.currentLocation &&
				data.find((city) =>
					city?.name
						?.toLowerCase()
						.includes(cityValue?.name?.toLowerCase() || cityValue)
				)
			)
				setCity(
					cityValue?.id ||
						filteredCities.find(
							(city) =>
								city?.id ===
								parseInt(searchParams?.get("city") as string)
						)
				);
			if (pathname === "/biz/businesses") {
				if (cityValue && cityValue !== translation.currentLocation) {
					router.push(
						pathname +
							"?" +
							createQueryString("city", cityValue.id as string)
					);
				}
				if (keyword) {
					router.push(
						pathname +
							"?" +
							createQueryString("search", keyword as string)
					);
				}
			} else {
				if (cityValue && cityValue !== translation.currentLocation) {
					router.push(
						`/biz/businesses` +
							"?" +
							createQueryString("city", cityValue.id as string)
					);
				}
				if (keyword) {
					router.push(
						`/biz/businesses` +
							"?" +
							createQueryString("search", keyword as string)
					);
				}
			}
		} else {
			setSearchKeyword(null);
			removeQueryParam("search", pathname);
		}
	};

	const handleClickOutside = (event: MouseEvent) => {
		const target = event.target;
		if (
			target instanceof Node &&
			inputRef.current &&
			!inputRef.current.contains(target) &&
			listRef.current &&
			!listRef.current.contains(target)
		) {
			setShowCities(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		setFilteredCities(data);
	}, [data]);

	const handleCitySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value) {
			setCityValue(value);
			setFilteredCities(
				data.filter((city) =>
					city.name.toLowerCase().includes(value.toLowerCase())
				)
			);
		} else {
			setCityValue(null);
		}
	};

	function successFunction(position: any) {
		const { coords } = position;

		const country = lookup(coords.longitude, coords.latitude, true);

		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 3);
		setCookie(
			"location",
			{
				country: country[0],
				long: coords.longitude,
				lat: coords.latitude,
			},
			{ expires: expiryDate }
		);

		window.location.reload();
	}

	function errorFunction() {
		toast.info("Please enable location permission.");
	}
	return (
		<div
			dir={locale === "ar" ? "rtl" : "ltr"}
			className={`rounded-full h-10 md:h-12 w-full md:w-3/4  relative  justify-start shadow-searchInputShadow  bg-white flex text-gray-600 gap-1  items-center  ${className} `}>
			<div className="flex items-center w-full h-full gap-2 border-e-2 border-solid ps-3 border-gray-200 ">
				<FaSearch className="text-gray-400" />
				<input
					type="text"
					placeholder={translation.ex}
					className="text-gray-800  text-xs md:text-sm  h-full w-full   outline-none"
					onChange={(e) => setKeyword(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") searchHandler();
					}}
					defaultValue={searchParams?.get("search") as string}
				/>
			</div>
			<div className="flex relative items-center h-full gap-2 justify-start">
				<Image
					width={20}
					height={20}
					src={"/navigation.svg"}
					alt="navigation"
				/>
				<input
					type="text"
					ref={inputRef}
					disabled={loading}
					placeholder={translation.where}
					onFocus={() => setShowCities(true)}
					onChange={handleCitySearch}
					defaultValue={
						cityValue?.name ||
						cityValue ||
						filteredCities.find(
							(city) =>
								city?.id ===
								parseInt(searchParams?.get("city") as string)
						)?.name ||
						""
					}
					className="text-gray-800 text-xs md:text-sm  h-full w-1/3 md:w-full  outline-none"
				/>
				<button
					onClick={() => {
						setCity(null);
						setCityValue(null);
						removeQueryParam("city", pathname);
					}}>
					{!!(
						(cityValue &&
							cityValue !== translation.currentLocation) ||
						parseInt(searchParams?.get("city") as string)
					) && <GiCancel className=" hover:text-red-500" />}
				</button>
				{showCities && (
					<div
						ref={listRef}
						className="absolute -bottom-[16.5rem] z-50 mt-2 w-full h-64 shadow-md bg-white scroll-m-2 rounded-md py-3 px-2 overflow-auto">
						<p
							className="text-red-500 font-bold my-2 text-sm cursor-pointer"
							onClick={() => {
								if (location) {
									setShowCities(false);
									setCityValue(translation.currentLocation);
									removeQueryParam("city", pathname);
									setCity(null);
								} else {
									navigator.geolocation.getCurrentPosition(
										successFunction,
										errorFunction
									);
								}
							}}>
							{translation.currentLocation}
						</p>
						<hr className="h-[1px] " />
						<div className="h-full  flex flex-col justify-start items-start">
							{filteredCities?.map((city) => (
								<p
									onClick={() => {
										setCityValue(city);
										setShowCities(false);
									}}
									key={city.id}
									className=" font-semiBold my-3 w-full  text-sm cursor-pointer ">
									{city.name}
								</p>
							))}
						</div>
					</div>
				)}
			</div>
			<div className=" items-center h-full gap-2 flex shrink-0">
				<button
					className="bg-secondary text-white rounded-e-full  h-full py-1 px-5 flex-1 start-0 relative"
					onClick={() => searchHandler()}>
					<FaSearch className="text-white" />
				</button>
			</div>
		</div>
	);
};

export default SearchInput;
