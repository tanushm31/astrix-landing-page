import Image from "next/image";
import { Inter, Krona_One, Lexend } from "next/font/google";
// import Marquee from "./Marquee";

const inter = Inter({
	weight: ["400", "500", "600"],
	variable: "--font-inter",
	subsets: ["latin"],
});
const krona = Krona_One({
	weight: "400",
	variable: "--font-krona",
	subsets: ["latin"],
});
const lexend = Krona_One({
	weight: "400",
	variable: "--font-lexend",
	subsets: ["latin"],
});
const lexend_logo = Lexend({
	weight: ["800"],
	variable: "--font-lexend-logo",
	subsets: ["latin"],
});

const duplicateText = (text: string, count: number) => {
	return new Array(count).fill(text).join(" * ");
};

type ISlide = {
	id: number;
	image: string; // image width = 412px height = 630 px
	name: string;
};

const Slide = ({ image, name, id }: ISlide) => {
	console.log("Image URL : ", `/Collections/${image}.png`);
	const perc = 0.9;
	// if (id === 1)
	return (
		<div className="flex flex-col justify-end h-full min-w-[412px] text-clip">
			<div className={`text-3xl ${lexend.className} text-wrap pr-1 z-50`}>
				{name} ft. Kanye West
			</div>
			<Image
				src={`/Collections/${image}.png`}
				alt={name}
				height={630 * perc}
				width={412 * perc}
				// fill={}
				className="object-cover"
			/>
		</div>
	);
};

const EventSideBar = () => {
	const perc = 0.9;
	return (
		<div
			className={`flex flex-col justify-between items-start w-full h-full p-8 ${lexend.className}`}
		>
			<div className="font-semibold w-[60%] text-[30px] leading-tight">
				Explore Your First Event
			</div>
			<div className=" w-full flex flex-col items-start space-y-3">
				<div className={`text-5xl ${lexend_logo.variable}`}>Event Name</div>
				<div className="flex w-full justify-start">
					<span className="flex  justify-center items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
							/>
						</svg>
						<p>Venue</p>
					</span>
					<span className="flex justify-center items-center ml-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>

						<p>04/3/2024 @19:00</p>
					</span>
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
					ipsum. Pellentesque mattis condimentum ut nulla.
				</div>
				<div className="font-semibold w-[60%] text-[30px] leading-tight">
					Artist Lineup
				</div>
				<div className="h-[200px] w-full flex items-center justify-center">
					<Image
						src="/ArtistLineup3.png"
						alt="Artist Image"
						height={150 * perc}
						width={145 * perc}
						// fill={}
						className="object-cover rounded z-20"
					/>
					<Image
						src="/ArtistLineup2.png"
						alt="Artist Image"
						height={198 * perc}
						width={192 * perc}
						// fill={}
						className="object-cover rounded -mx-[1px] z-50"
					/>
					<Image
						src="/ArtistLineup1.png"
						alt="Artist Image"
						height={150 * perc}
						width={145 * perc}
						// fill={}
						className="object-cover rounded z-20"
					/>
				</div>
			</div>
			<div className=" w-full flex justify-between items-center">
				<Image src="/qrcode.png" alt="QR Code" height={100} width={100} />
				<button className="px-4 py-2 bg-[#FFCA5F] text-matte-basic font-bold rounded-full">
					Join Waitlist
				</button>
			</div>
		</div>
	);
};

const CollectibleCard = () => {
	return (
		<div className="w-[500px] flex flex-col justify-start items-center px-[4px] py-[2px] text-xs bg-banner-purple rounded mr-2">
			<div
				className={`${inter.className} w-full text-[10px] flex items-center justify-between`}
			>
				<div className="bg-matte-basic rounded-full px-2 py-0">2024</div>
				<div className="flex text-black justify-center items-center">
					By <span className="font-bold ">Pablo</span>
				</div>
			</div>
			<div className="w-full flex justify-center items-center text-sm text-black">
				Collectible Name
			</div>
			<Image
				src="/Collections/asset3.png"
				alt="Collection Image"
				height={164}
				width={143}
				// fill={}
				className="object-fill rounded max-w-full border-2 border-matte-basic"
			/>
		</div>
	);
};

const CollectionsSidebar = () => {
	const peopleImages = [
		"/avatar1.jpg",
		"/avatar2.jpg",
		"/avatar1.jpg",
		"/avatar2.jpg",
		"/avatar1.jpg",
	];

	const perc = 0.9;
	return (
		<div
			className={`flex flex-col justify-between items-start w-full h-full p-8 ${lexend.className}`}
		>
			<div className="font-semibold w-[60%] text-[30px] leading-tight">
				Explore Your First Collectible
			</div>
			<div className=" w-full flex flex-col items-start space-y-3">
				<div className={`text-5xl ${lexend_logo.variable} font-extrabold`}>
					Meta
					<br /> Lives
				</div>
				<div className="flex w-full justify-start">
					<div className=" text-[30px] leading-tight">
						Explore Your First Collectible
					</div>
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
					ipsum. Pellentesque mattis condimentum ut nulla.
				</div>
				<div className="text-[30px] flex justify-between items-center w-full">
					<div className="flex items-center justify-center h-[40px] ml-4">
						{peopleImages.map((image, i) => {
							return (
								<Avatar key={i} className="-ml-3">
									<AvatarImage src={image} />
									<AvatarFallback>FL</AvatarFallback>
								</Avatar>
							);
						})}
					</div>
					<div className="text-[20px] flex">22k people interested</div>
				</div>
			</div>

			<div className=" py-1 w-full flex justify-start items-center overflow-x-scroll overflow-y-hidden flex-nowrap">
				<CollectibleCard />
				<CollectibleCard />
				<CollectibleCard />
			</div>
			<div className=" w-full flex justify-end items-center">
				{/* <Image src="/qrcode.png" alt="QR Code" height={100} width={100} /> */}
				<button className="px-4 py-2 bg-[#FFCA5F] text-matte-basic font-bold rounded-full">
					Join Waitlist
				</button>
			</div>
		</div>
	);
};
export default function Home() {
	const bannerTexts = [
		"Collection Live : Meta Lives , live on astrix",
		"Event : Oasis Bus tour , JLN Stadium , Delhi ",
	];
	const colllectionsDetails = [
		{ id: 1, image: "asset1", name: "Collection 1" },
		{ id: 2, image: "asset2", name: "Collection 2" },
		{ id: 3, image: "asset3", name: "Collection 3" },
		{ id: 4, image: "asset4", name: "Collection 4" },
	];

	const eventDetails = [
		{ id: 1, image: "asset1", name: "Event 1" },
		{ id: 2, image: "asset2", name: "Event 2" },
		{ id: 3, image: "asset3", name: "Event 3" },
		{ id: 4, image: "asset4", name: "Event 4" },
	];
	return (
		<main
			className={`w-screen h-screen flex justify-between bg-matte-basic p-0`}
		>
			<div className="relative bg-matte-basic h-full w-[58%] flex flex-col justify-around ">
				<div
					className={`absolute top-30 z-10 w-[360px] h-[70%] font-extrabold text-white/20 text-6xl text-wrap flex justify-around flex-col ${lexend.className} pl-5`}
				>
					<div className="flex flex-col">
						<span>ASTR</span>
						<span>IX</span>
					</div>
					<div className="flex flex-col">
						<span>COLL</span>
						<span>ECTI</span>
						<span>BLES</span>
					</div>
				</div>
				<div className="z-30 flex overflow-x-scroll overflow-y-auto h-[90%] items-center">
					{colllectionsDetails.map((collection) => {
						return <Slide key={collection.name} {...collection} />;
					})}
					{/* <Slide {...colllectionsDetails[0]} /> */}
				</div>
			</div>
			<div
				className="bg-banner-purple h-full w-[6%] text-3xl font-bold text-white flex items-center justify-end leading-1 text-nowrap overflow-hidden"
				style={{ writingMode: "vertical-rl" }}
			>
				{/* {bannerTexts.join(" * ")} */}
				<div className={"vertical-marquee"}>
					<div className={`marquee-content ${krona.className}`}>
						{bannerTexts.join(" * ")}
						{" * "}
					</div>
					<div className={`marquee-content ${krona.className}`}>
						{" "}
						{bannerTexts.join(" * ")}
						{" * "}
					</div>
				</div>
			</div>
			<div className="bg-matte-basic h-full w-[36%]">
				<EventSideBar />
				{/* <div className="abosulute block right-3 top-2 h-10 z-50 bg-red-500 p-2">
					<input
						type="number"
						min={0}
						max={3}
						onChange={(e) => {
							setBtnInput(parseInt(e.target.value));
						}}
						className="w-[100px] text-black"
					></input>{" "}
					<button
						onClick={() => {
							console.log("Switching to slide : ", btnInput);
							switchToSlide(btnInput);
						}}
						className="flex items-center justify-center bg-green-500 ml-2 p-2"
					>
						Switch
					</button>
				</div> */}
			</div>
		</main>
	);
}
