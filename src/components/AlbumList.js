// src/components/AlbumList.js

import React from "react";

const AlbumList = ({albums, onSelectAlbum}) => {
	const sortedAlbums = [...albums].sort((a, b) => a.id - b.id);

	const handleChange = (event) => {
		const albumId = parseInt(event.target.value, 10);
		onSelectAlbum(albumId);
	};

	return (
		<div className="mb-4">
			{/* <h2 className="text-lg font-semibold mb-4">Select A Surah</h2> */}
			<select
				className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
				onChange={handleChange}
				defaultValue=""
			>
				<option value="" disabled>
					Select A Surah
				</option>
				{sortedAlbums.map((album) => (
					<option key={album.id} value={album.id}>
						{album.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default AlbumList;
