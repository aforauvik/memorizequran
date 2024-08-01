// src/data/albums.js

const generateId = (function () {
	let id = 0;
	return function () {
		return ++id;
	};
})();

const generateTrackIds = (base, count) => {
	return Array.from({length: count}, (_, i) => {
		const trackNumber = base + i + 1;
		return trackNumber.toString().padStart(6, "0");
	});
};

const createAlbum = (id, name, baseTrackId, trackCount) => {
	const trackIds = generateTrackIds(baseTrackId, trackCount);
	const album = {
		id,
		name,
		audioFiles: trackIds.map((trackId) => {
			const trackName = `Verse ${trackId.slice(-3)}`;
			return {
				id: generateId(),
				name: trackName,
				url: `https://everyayah.com/data/Alafasy_128kbps/${trackId}.mp3`,
			};
		}),
	};
	return album;
};

export const albums = [
	createAlbum(1, "1 - Al-Fatiha (The Opening)", 1000, 7), //1000 is the surah number 7 is number of ayah
	createAlbum(2, "2 - Al-Baqara (The Cow)", 2000, 286),
	createAlbum(3, "3 - Al-Imran (The Family Of Imran)", 3000, 200),
	createAlbum(4, "4 - An-Nisa (Women)", 4000, 176),
	createAlbum(5, "5 - Al-Maeda (The Table)", 5000, 120),
	createAlbum(6, "6 - Al-Anam (Cattle, Livestock)", 6000, 165),
	createAlbum(7, "7 - Al-Araf (The Heights)", 7000, 206),
	createAlbum(8, "8 - Al-Anfal (Spoils Of War)", 8000, 75),
	createAlbum(9, "9 - At-Tawba (Repentance)", 9000, 129),
	createAlbum(10, "10 - Yunus (Jonah)", 10000, 129),
	createAlbum(11, "11 - Hud (Hud)", 11000, 123),
	createAlbum(12, "12 - Yusuf (Joseph)", 12000, 111),
	createAlbum(13, "13 - Ar-Rad (The Thunder)", 13000, 43),
	createAlbum(14, "14 - Ibrahim (Abraham)", 14000, 52),
	createAlbum(15, "15 - Al-Hijr (Stone land, Rock City)", 15000, 99),
	createAlbum(16, "16 - An-Nahl (The Bee)", 16000, 128),
	createAlbum(17, "17 - Al-Isra (The Night Journey)", 17000, 111),
	createAlbum(18, "18 - Al-Kahf (The Cave)", 18000, 110),
	createAlbum(19, "19 - Maryam (Mary)", 19000, 98),
	createAlbum(20, "20 - Taha (Ta-Ha)", 20000, 135),
	createAlbum(21, "21 - Al-Anbiya (The Prophets)", 21000, 112),
	createAlbum(22, "22 - Al-Hajj (The Pilgrimage)", 22000, 78),
	createAlbum(23, "23 - Al-Mumenoon (The Believers)", 23000, 118),
	createAlbum(24, "24 - An-Noor (The Light)", 24000, 64),
	createAlbum(25, "25 - Al-Furqan (The Criterion)", 25000, 77),
	createAlbum(26, "26 - Ash-Shuara (The Poets)", 26000, 227),
	createAlbum(27, "27 - An-Naml (The Ant)", 27000, 93),
	createAlbum(28, "28 - Al-Qasas (The Story)", 28000, 88),
	createAlbum(29, "29 - Al-Ankaboot (The Spider)", 29000, 69),
	createAlbum(30, "30 - Ar-Room (The Romans The Byzantines)", 30000, 60),
	createAlbum(31, "31 - Luqman (Luqman)", 31000, 34),
	createAlbum(32, "32 - As-Sajda (The Prostration)", 32000, 30),
	createAlbum(33, "33 - Al-Ahzab (The Clans)", 33000, 73),
	createAlbum(34, "34 - Saba (Sheba)", 34000, 54),
	createAlbum(35, "35 - Fatir (The Angels)", 35000, 45),
	createAlbum(36, "36 - Ya-Seen (Ya-Seen)", 36000, 83),
	createAlbum(37, "37 - As-Saaffat (Those Who Set The Ranks)", 37000, 182),
	createAlbum(38, "38 - Sad (The Letter Sad)", 38000, 88),
	createAlbum(39, "39 - Az-Zumar (The Troops)", 39000, 75),
	createAlbum(40, "40 - Al-Ghafir (The Forgiver)", 40000, 85),
	createAlbum(41, "41 - Fussilat (Explained In Detail)", 41000, 54),
	createAlbum(42, "42 - Ash-Shura (Council)", 42000, 53),
	createAlbum(43, "43 - Az-Zukhruf (Ornaments Of Gold)", 43000, 89),
	createAlbum(44, "44 - Ad-Dukhan (Smoke)", 44000, 59),
	createAlbum(45, "45 - Al-Jathiya (Crouching)", 45000, 37),
	createAlbum(46, "46 - Al-Ahqaf (The Dunes)", 46000, 35),
	createAlbum(47, "47 - Muhammad (Muhammad)", 47000, 38),
	createAlbum(48, "48 - Al-Fatha (Victory)", 48000, 29),
	createAlbum(49, "49 - Al-Hujraat (The Private Apartments)", 49000, 18),
	createAlbum(50, "50 - Qaf (The Letter Qaf)", 50000, 45),
	createAlbum(51, "51 - Adh-Dhariyat (The Winnowing Winds)", 51000, 60),
	createAlbum(52, "52 - At-Tur (The Mount)", 52000, 49),
	createAlbum(53, "53 - An-Najm (The Star)", 53000, 62),
	createAlbum(54, "54 - Al-Qamar (The Moon)", 54000, 55),
	createAlbum(55, "55 - Ar-Rahman (The Mercy Giving)", 55000, 78),
	createAlbum(56, "56 - Al-Waqia (The Event)", 56000, 96),
	createAlbum(57, "57 - Al-Hadid (The Iron)", 57000, 29),
	createAlbum(58, "58 - Al-Mujadila (The Pleading Woman)", 58000, 22),
	createAlbum(59, "59 - Al-Hashr (Exile)", 59000, 24),
	createAlbum(60, "60 - Al-Mumtahina (She That Is To Be Examined)", 60000, 13),
	createAlbum(61, "61 - As-Saff (The Ranks, Battle Array)", 61000, 14),
	createAlbum(62, "62 - Al-Jumua (The Congregation)", 62000, 11),
	createAlbum(63, "63 - Al-Munafiqoon (The Hypocrites)", 63000, 11),
	createAlbum(64, "64 - At-Taghabun (Mutual Disillusion)", 64000, 18),
	createAlbum(65, "65 - At-Talaq (Divorce)", 65000, 12),
	createAlbum(66, "66 - At-Tahrim (Prohibition)", 66000, 12),
	createAlbum(67, "67 - Al-Mulk (The Sovereignty)", 67000, 30),
	createAlbum(68, "68 - Al-Qalam (The Pen)", 68000, 52),
	createAlbum(69, "69 - Al-Haaqqa (The Reality)", 69000, 52),
	createAlbum(70, "70 - Al-Maarij (The Ascending Stairways)", 70000, 44),
	createAlbum(71, "71 - Nooh (Noah)", 71000, 28),
	createAlbum(72, "72 - Al-Jinn (The Jinn)", 72000, 28),
	createAlbum(73, "73 - Al-Muzzammil (The Enshrouded One)", 73000, 20),
	createAlbum(74, "74 - Al-Muddaththir (The Cloaked One)", 74000, 56),
	createAlbum(75, "75 - Al-Qiyama (The Rising Of The Dead)", 75000, 40),
	createAlbum(76, "76 - Al-Insan (The Man)", 76000, 31),
	createAlbum(77, "77 - Al-Mursalat (The Emissaries)", 77000, 50),
	createAlbum(78, "78 - An-Naba (The Tidings)", 78000, 40),
	createAlbum(79, "79 - An-Naziat (Soul-Snatchers)", 79000, 46),
	createAlbum(80, "80 - Abasa (He Frowned)", 80000, 42),
	createAlbum(81, "81 - At-Takwir (The Overthrowing)", 81000, 29),
	createAlbum(82, "82 - Al-Infitar (The Cleaving)", 82000, 19),
	createAlbum(83, "83 - Al-Mutaffifin (Defrauding)", 83000, 36),
	createAlbum(84, "84 - Al-Inshiqaq (The Sundering)", 84000, 25),
	createAlbum(85, "85 - Al-Burooj (The Mansions Of The Stars)", 85000, 22),
	createAlbum(86, "86 - At-Tariq (The Nightcomer)", 86000, 17),
	createAlbum(87, "87 - Al-Ala (The Most High)", 87000, 19),
	createAlbum(88, "88 - Al-Ghashiya (The Overwhelming)", 88000, 26),
	createAlbum(89, "89 - Al-Fajr (The Dawn)", 89000, 30),
	createAlbum(90, "90 - Al-Balad (The City)", 90000, 20),
	createAlbum(91, "91 - Ash-Shams (The Sun)", 91000, 15),
	createAlbum(92, "92 - Al-Lail (The Night)", 92000, 21),
	createAlbum(93, "93 - Ad-Dhuha (The Morning Hours)", 93000, 11),
	createAlbum(94, "94 - Al-Inshirah (Solace)", 94000, 8),
	createAlbum(95, "95 - At-Tin (The Fig)", 95000, 8),
	createAlbum(96, "96 - Al-Alaq (The Clot)", 96000, 19),
	createAlbum(97, "97 - Al-Qadr (The Power)", 97000, 5),
	createAlbum(98, "98 - Al-Bayyina (The Clear Proof)", 98000, 8),
	createAlbum(99, "99 - Az-Zalzala (The Earthquake)", 99000, 8),
	createAlbum(100, "100 - Al-Adiyat (The Courser)", 100000, 11),
	createAlbum(101, "101 - Al-Qaria (The Calamity)", 101000, 11),
	createAlbum(102, "102 - At-Takathur (Rivalry In World Increase)", 102000, 8),
	createAlbum(103, "103 - Al-Asr (The Declining Day)", 103000, 3),
	createAlbum(104, "104 - Al-Humaza (The Traducer)", 104000, 9),
	createAlbum(105, "105 - Al-Fil (The Elephant)", 105000, 5),
	createAlbum(106, "106 - Quraish (Quraish)", 106000, 4),
	createAlbum(107, "107 - Al-Maun (Small Kindnesses)", 107000, 7),
	createAlbum(108, "108 - Al-Kauther (Abundance)", 108000, 3),
	createAlbum(109, "109 - Al-Kafiroon (The Disbelievers)", 109000, 6),
	createAlbum(110, "110 - An-Nasr (The Divine Support)", 110000, 3),
	createAlbum(111, "111 - Al-Masadd (The Flame)", 111000, 5),
	createAlbum(112, "112 - Al-Ikhlas (Sincerity)", 112000, 4),
	createAlbum(113, "113 - Al-Falaq (The Daybreak)", 113000, 5),
	createAlbum(114, "114 - An-Nas (Mankind)", 114000, 6),
];
