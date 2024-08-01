// src/App.js

import "./styles.css";
import React, {useState} from "react";
import {albums} from "./data/albums";
import AlbumList from "./components/AlbumList";
import AudioFileSelector from "./components/AudioFileSelector";
import AudioPlayer from "./components/AudioPlayer";
import Navbar from "./components/Navbar";
import Coffee from "./components/Coffee";

const App = () => {
	const [selectedAlbumId, setSelectedAlbumId] = useState(null);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [fileRepeatCount, setFileRepeatCount] = useState(1);
	const [albumRepeatCount, setAlbumRepeatCount] = useState(1);
	const [playbackKey, setPlaybackKey] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const resetState = () => {
		setSelectedFiles([]);
		setFileRepeatCount(1);
		setAlbumRepeatCount(1);
		setIsPlaying(false);
	};

	const handleSelectAlbum = (albumId) => {
		setSelectedAlbumId(albumId);
		resetState();
	};

	const handleSetRepeatOptions = (files, fileRepeat, albumRepeat) => {
		setSelectedFiles(files);
		setFileRepeatCount(fileRepeat);
		setAlbumRepeatCount(albumRepeat);
		setPlaybackKey((prevKey) => prevKey + 1); // Update the key to restart playback
		setIsPlaying(true);
	};

	const handleStopPlayback = () => {
		setIsPlaying(false);
	};

	const selectedAlbum = albums.find((album) => album.id === selectedAlbumId);

	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<div className="App">
			<div className="mb-4">
				<Navbar />
			</div>
			<AlbumList albums={albums} onSelectAlbum={handleSelectAlbum} />
			{selectedAlbum && (
				<AudioFileSelector
					album={selectedAlbum}
					onSetRepeatOptions={handleSetRepeatOptions}
					fileRepeatCount={fileRepeatCount}
					albumRepeatCount={albumRepeatCount}
					isPlaying={isPlaying}
					onStopPlayback={handleStopPlayback}
				/>
			)}
			{selectedFiles.length > 0 && (
				<AudioPlayer
					key={playbackKey} // key to reset the component
					audioFiles={selectedFiles.map((file) => file.url)}
					fileRepeatCount={fileRepeatCount}
					albumRepeatCount={albumRepeatCount}
					isPlaying={isPlaying}
					onStopPlayback={handleStopPlayback}
				/>
			)}

			<p className="footer">
				<Coffee />
				<br />© {currentYear} | Developed By{" "}
				<a target="blank" href="https://www.auvik.me/">
					Auvik Mir
				</a>
				, North Carolina
				<br />
				Audio Source{" "}
				<a target="blank" href="https://everyayah.com">
					EveryAyah Quran Files
				</a>
				<br />
			</p>
		</div>
	);
};

export default App;
