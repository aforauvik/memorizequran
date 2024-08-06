// src/components/AudioFileSelector.js

import "../styles.css";
import React, {useState, useEffect} from "react";
import {FiChevronUp, FiChevronDown} from "react-icons/fi";

const AudioFileSelector = ({
	album,
	onSetRepeatOptions,
	fileRepeatCount,
	albumRepeatCount,
	isPlaying,
	onStopPlayback,
}) => {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [localFileRepeatCount, setLocalFileRepeatCount] =
		useState(fileRepeatCount);
	const [localAlbumRepeatCount, setLocalAlbumRepeatCount] =
		useState(albumRepeatCount);
	const [isRepeatContainerVisible, setIsRepeatContainerVisible] =
		useState(true);

	useEffect(() => {
		setSelectedFiles([]);
		setLocalFileRepeatCount(fileRepeatCount);
		setLocalAlbumRepeatCount(albumRepeatCount);
	}, [album]);

	const handleFileSelect = (event, file) => {
		const newSelectedFiles = [...selectedFiles];
		if (event.target.checked) {
			newSelectedFiles.push(file);
		} else {
			const index = newSelectedFiles.indexOf(file);
			if (index > -1) {
				newSelectedFiles.splice(index, 1);
			}
		}
		setSelectedFiles(newSelectedFiles);
	};

	const handleFileRepeatCountChange = (event) => {
		setLocalFileRepeatCount(Number(event.target.value));
	};

	const handleAlbumRepeatCountChange = (event) => {
		setLocalAlbumRepeatCount(Number(event.target.value));
	};

	const handleSetRepeatOptionsClick = () => {
		const sortedFiles = [...selectedFiles].sort((a, b) => a.id - b.id);
		onSetRepeatOptions(
			sortedFiles,
			localFileRepeatCount,
			localAlbumRepeatCount
		);
	};

	const handleUncheckAllClick = () => {
		setSelectedFiles([]);
	};

	const toggleRepeatContainer = () => {
		setIsRepeatContainerVisible(!isRepeatContainerVisible);
	};

	const areMultipleFilesSelected = selectedFiles.length > 1;

	return (
		<div className="flex flex-col">
			<div className="mb-4">
				<ul className="flex flex-col">
					{album.audioFiles.map((file) => (
						<li
							key={file.id}
							className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
						>
							<div className="relative flex items-start w-full">
								<div className="flex items-center h-5">
									<input
										id={`file-${file.id}`}
										type="checkbox"
										className="border-gray-200 rounded disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
										checked={selectedFiles.includes(file)}
										onChange={(e) => handleFileSelect(e, file)}
									/>
								</div>
								<label
									htmlFor={`file-${file.id}`}
									className="ms-3.5 block w-full text-base text-gray-600 dark:text-neutral-300"
								>
									{file.name}
								</label>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className="sticky bottom-0 bg-white border-t border-gray-200 dark:bg-neutral-900 dark:border-neutral-700 py-2 px-3">
				<div className="flex justify-between items-center mb-4">
					<span className="text-base text-gray-800 dark:text-neutral-400 font-base">
						Audio Controls
					</span>
					<button
						onClick={toggleRepeatContainer}
						className="text-gray-600 focus:outline-none"
					>
						{isRepeatContainerVisible ? (
							<FiChevronUp className="w-6 h-6" />
						) : (
							<FiChevronDown className="w-6 h-6" />
						)}
					</button>
				</div>
				{isRepeatContainerVisible && (
					<div>
						<div className="py-2 px-3 bg-white border border-gray-200 rounded-lg mb-4 dark:bg-neutral-900 dark:border-neutral-700">
							<div className="w-full flex justify-between items-center gap-x-5">
								<div className="grow">
									<span className="block text-xs text-gray-500 dark:text-neutral-400">
										Repeat Each Verse
									</span>
									<input
										className="w-full p-0 bg-transparent border-0 text-gray-800 dark:text-white focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										style={{"-moz-appearance": "textfield"}}
										type="number"
										pattern="[0-9]*"
										inputmode="numeric"
										value={localFileRepeatCount}
										onChange={handleFileRepeatCountChange}
										min="1"
										max="100"
										aria-roledescription="Number field"
									/>
								</div>
								<div className="flex justify-end items-center gap-x-1.5">
									<button
										type="button"
										className="size-6 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
										aria-label="Decrease"
										onClick={() =>
											setLocalFileRepeatCount((prev) => Math.max(prev - 1, 1))
										}
									>
										<svg
											className="shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M5 12h14"></path>
										</svg>
									</button>
									<button
										type="button"
										className="size-6 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
										aria-label="Increase"
										onClick={() => setLocalFileRepeatCount((prev) => prev + 1)}
									>
										<svg
											className="shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M12 5v14"></path>
											<path d="M5 12h14"></path>
										</svg>
									</button>
								</div>
							</div>
							<hr className="my-3 dark:border-neutral-700" />
							<div className="w-full flex justify-between items-center gap-x-5">
								<div className="grow">
									<span className="block text-xs text-gray-500 dark:text-neutral-400">
										Repeat Selected Verses
									</span>
									<input
										className="w-full p-0 bg-transparent border-0 text-gray-800 dark:text-white focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										style={{"-moz-appearance": "textfield"}}
										type="number"
										pattern="[0-9]*"
										inputmode="numeric"
										value={localAlbumRepeatCount}
										onChange={handleAlbumRepeatCountChange}
										min="1"
										max="100"
										aria-roledescription="Number field"
										disabled={!areMultipleFilesSelected} // Disable if less than 2 files are selected
									/>
								</div>
								<div className="flex justify-end items-center gap-x-1.5">
									<button
										type="button"
										className={`size-6 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ${
											!areMultipleFilesSelected ? "cursor-not-allowed" : ""
										}`}
										aria-label="Decrease"
										onClick={() =>
											areMultipleFilesSelected &&
											setLocalAlbumRepeatCount((prev) => Math.max(prev - 1, 1))
										}
										disabled={!areMultipleFilesSelected} // Disable if less than 2 files are selected
									>
										<svg
											className="shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M5 12h14"></path>
										</svg>
									</button>
									<button
										type="button"
										className={`size-6 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ${
											!areMultipleFilesSelected ? "cursor-not-allowed" : ""
										}`}
										aria-label="Increase"
										onClick={() =>
											areMultipleFilesSelected &&
											setLocalAlbumRepeatCount((prev) => prev + 1)
										}
										disabled={!areMultipleFilesSelected} // Disable if less than 2 files are selected
									>
										<svg
											className="shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M12 5v14"></path>
											<path d="M5 12h14"></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
						{/* Button to uncheck all files */}
						<div className="mt-2">
							<button
								type="button"
								className="text-blue-500 text-sm font-medium hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
								onClick={handleUncheckAllClick}
								disabled={!areMultipleFilesSelected || isPlaying}
							>
								Uncheck All
							</button>
						</div>
						<div className="flex justify-center mt-4 mb-4">
							<button
								className="w-full start-button sticky py-4 px-4 bg-blue-500 text-white text-base font-medium rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
								onClick={handleSetRepeatOptionsClick}
								disabled={selectedFiles.length === 0 || isPlaying}
							>
								Start
							</button>
							{isPlaying && (
								<button
									className="w-full stop-button sticky py-4 px-4 bg-red-500 text-white text-base font-medium rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none ms-4"
									onClick={onStopPlayback}
								>
									Stop
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AudioFileSelector;
