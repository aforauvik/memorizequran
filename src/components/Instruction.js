const Instruction = () => {
	return (
		<div class="mt-8 mb-10">
			<span class="inline-flex rounded-lg shadow-sm mb-4 font-medium text-sm text-gray-500 dark:text-neutral-400 font-mono mb-3">
				Instruction
			</span>
			<ul class="list-disc list-inside text-gray-800 dark:text-neutral-400">
				<li>Choose a Surah you wish to memorize.</li>
				<li>Begin with 3 to 5 verses at a time.</li>
				<li>
					Repeat each verse 3 times, and the entire set of verses 5 times.
				</li>
				<li>Listen to the audio for the first two repetitions.</li>
				<li>On the third repetition, recite along with the audio.</li>
				<li>
					Use{" "}
					<a
						className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-none focus:underline opacity-90"
						target="_blank"
						href="https://thrive.arizona.edu/news/adding-spaced-repetition-your-study-toolkit"
					>
						spaced repetition{" "}
					</a>
					learning technique.
				</li>
				<li>Continue learning until you can recite the verses from memory.</li>
			</ul>
		</div>
	);
};

export default Instruction;
