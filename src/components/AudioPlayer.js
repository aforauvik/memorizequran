// src/components/AudioPlayer.js

import "../styles.css";
import React, {useState, useRef, useEffect} from "react";

const AudioPlayer = ({
	audioFiles,
	fileRepeatCount,
	albumRepeatCount,
	isPlaying,
	onStopPlayback,
}) => {
	const [currentFileIndex, setCurrentFileIndex] = useState(0);
	const [currentAlbumRepeat, setCurrentAlbumRepeat] = useState(0);
	const [currentFileRepeat, setCurrentFileRepeat] = useState(0);
	const audioRef = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying, currentFileIndex]);

	useEffect(() => {
		// Reset playback when the component is re-rendered with a new key
		setCurrentFileIndex(0);
		setCurrentAlbumRepeat(0);
		setCurrentFileRepeat(0);
	}, [audioFiles, fileRepeatCount, albumRepeatCount]);

	const handleEnded = () => {
		if (currentFileRepeat + 1 < fileRepeatCount) {
			setCurrentFileRepeat(currentFileRepeat + 1);
			audioRef.current.play();
		} else {
			setCurrentFileRepeat(0);
			if (currentFileIndex + 1 < audioFiles.length) {
				setCurrentFileIndex(currentFileIndex + 1);
			} else if (currentAlbumRepeat + 1 < albumRepeatCount) {
				setCurrentFileIndex(0);
				setCurrentAlbumRepeat(currentAlbumRepeat + 1);
			} else {
				onStopPlayback();
			}
		}
	};

	return (
		<div className="flex flex-col">
			<audio
				ref={audioRef}
				src={audioFiles[currentFileIndex]}
				onEnded={handleEnded}
				autoPlay={isPlaying} // Automatically start playing when the component is rendered
			/>
		</div>
	);
};

export default AudioPlayer;
