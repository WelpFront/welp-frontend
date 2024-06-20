import { MediaCard } from "atoms";
import { MediaType } from "interfaces";

const MediaSector = ({
	media,
	translation,
}: {
	media: Array<MediaType>;
	translation: any;
}) => {
	return (
		<div className="my-10">
			<h3 className="text-xl my-1 font-bold">{translation.media}</h3>
			<div className=" p-3 w-full rounded-3xl overflow-hidden border-1 border-solid border-gray-100">
				<div className="grid grid-cols-3 gap-3">
					{media.map((item) => (
						<MediaCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MediaSector;
