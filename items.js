let ITEMS = [
	{
		"name": "Aezurth", "icon": "icons/aezurth.png", "slot": 3,
		"obtained": [ "Completing the Castle Event" ],
		"stats": {},
		"drop": [ "Torment", "Double Shoot", "Suffixes(?)" ],
		"features": { "Infinite Ammo": "At max level, you have infinite ammo. Works like excelerated tier at max level." },
		"abilities": { "Hold RMB (Max Level)": "Shoots a black hole." },
		"tags": [ "Enhancable", "Event Drop" ]
	}
]

// Godswords
{
	let HILTS = [ "Anarchic", "Barbaric", "Avian", "Sagacious" ]
	for( h in HILTS )
	{
		let hilt = HILTS[h];
		let sword = {
			"name": `${hilt} Godsword`, "icon": `icons/${hilt.toLowerCase()}.png`, "slot": 1,
			"obtained": [ `Forging Godsword shards 1,2,3 + ${hilt} hilt at Arvid` ],
			"stats": {},
			"drop": [ "Suffixes(?)" ],
			"features": { },
			"abilities": { "RMB": "TODO" },
			"tags": [ "Forged", "Godsword" ]
		};
		console.log(hilt);
		ITEMS.push( sword );
	}
	ITEMS.push( {
		"name": `Elder Godsword`, "icon": "icons/elder.png", "slot": 1,
		"obtained": [ `Forging Godsword shards 1,2,3 + All sword hilts + Ancient Gemstone at Arvid` ],
		"stats": {},
		"drop": [ "Suffixes(?)" ],
		"features": { },
		"abilities": { "RMB": "TODO" },
		"tags": [ "Forged", "Godsword" ],
		"rarity": "Celestial"
	} );
}

// Books
{
	let PAGES = [ "I. Chapter of Arushiv", "II. Chapter of Igneous", "III. Chapter of Regret" ];
	let DROP = {
		"I. Chapter of Arushiv": "the survive bosses that appear every 12 rounds.",
		"II. Chapter of Igneous": "the chest that appears from killing Morgoth.",
		"III. Chapter of Regret": "killing Bloodwynd."
	};
	// todo
	let ABILITY = {
		"I. Chapter of Arushiv": "the survive bosses that appear every 12 rounds.",
		"II. Chapter of Igneous": "the chest that appears from killing Morgoth.",
		"III. Chapter of Regret": "killing Bloodwynd."
	};
	let IMAGE = {
		"I. Chapter of Arushiv": "arushiv",
		"II. Chapter of Igneous": "igneous",
		"III. Chapter of Regret": "regret"
	};
	for( h in PAGES )
	{
		let hilt = PAGES[h];
		let sword = {
			"name": `${hilt}`, "icon": `icons/${IMAGE[hilt]}.png`, "slot": 1,
			"obtained": [ `Dropping it from ${DROP[hilt]}` ],
			"stats": {},
			"drop": [ "N/A" ],
			"features": { },
			"abilities": { "RMB": "TODO" },
			"tags": [ "Page", "Grimoire" ]
		};
		console.log(hilt);
		ITEMS.push( sword );
	}
	ITEMS.push( {
		"name": `Creed of Necros`, "icon": "icons/finality.png", "slot": 1,
		"obtained": [ `Obtaining all grimoires + a blank one and talking to Arvid` ],
		"stats": {},
		"drop": [ "N/A" ],
		"features": { },
		"abilities": { "RMB": "TODO" },
		"tags": [ "Grimoire" ],
		"rarity": "Celestial"
	} );
}

// Torments
{
	let TORMENTS = {
		"Desolation": {
			"img": "desolation",
			"scroll": "Hard"
		},
		"Demise": {
			"img": "demise",
			"scroll": "Expert"
			
		},
		"Oblivion": {
			"img": "oblivion",
			"scroll": "Professional"
		}
	}
	for( t in TORMENTS )
	{
		let tr = TORMENTS[t];
		ITEMS.push( {
			"name": `Tormented ${t}`, "icon": `icons/${tr.img}.png`, "slot": 1,
			"obtained": [ `Completing a ${tr.scroll} Challenge Scroll` ],
			"stats": "Varies between weapons",
			"drop": [ "Scroll Suffixes" ],
			"features": { "Ability Charge": "Charge up your RMB ability by shooting enemies." },
			"abilities": { "RMB": "Gain infinite ammo for 10 seconds. Firerate and damage increased slightly." },
			"tags": [ "Scroll", "Unique", "Socketable" ]
		} );
		
		console.log(t);
	}
}