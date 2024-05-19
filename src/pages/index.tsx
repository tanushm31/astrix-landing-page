import Image from "next/image";
import { Inter, Krona_One, Lexend } from "next/font/google";
// import Marquee from "./Marquee";

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
			<div className="bg-matte-basic h-full w-[36%]"></div>
		</main>
	);
}
