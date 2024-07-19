import {
	ImagesSection,
	UserDownloadInfo,
	UsersDownloadHeader,
} from "components";
import { getTranslations } from "next-intl/server";
import React from "react";

const UsersDownload = async () => {
	const usersT = await getTranslations("users");

	return (
		<div>
			<UsersDownloadHeader
				translation={{
					header: usersT("header"),
				}}
			/>
			<ImagesSection />
			<UserDownloadInfo
				translation={{
					search: usersT("search"),
					allOfThis: usersT("allOfThis"),
					realReviews: usersT("realReviews"),
					userFriendly: usersT("userFriendly"),
					support: usersT("support"),
					loremIpsum: usersT("loremIpsum"),
				}}
			/>
		</div>
	);
};

export default UsersDownload;
