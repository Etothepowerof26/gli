// util
GetFirstFromClassName = (cl) => document.getElementsByClassName(cl)[0];
function RunSearchWithQuery( search )
{
	let ret = [];
	
	for( item in ITEMS )
	{
		let n = ITEMS[ item ].name;
		if( n )
		{
			let name = n.toLowerCase();
			if( n.search( search.toLowerCase() ) != -1 && ret.length < 10 )
			{
				ret.push( ITEMS[ item ] );
			}
		}
	}
	
	return ret;
}

function HandleOnHover( main, item )
{
	return (event) =>
	{
		main.src = item.icon;
		// console.log(item.icon, main);
	};
}

function HandleOnClickForItem( main, item )
{
	return (event) =>
	{
		alert('Godlike pressed');
		console.log(item);
		main.style.display = "none";
	};
}



window.onload = (event) =>
{
	
	let main = GetFirstFromClassName('main');
	let preview = document.getElementById('preview');
	
	let box = GetFirstFromClassName("glres");
	box.innerHTML = "";
		
	let search_elem = GetFirstFromClassName("search");
		
	let current_search_query = "";
	search_elem.addEventListener('input', (ev) =>
	{
		let value = search_elem.value;
		box.innerHTML = "";
		
		if( value != "" )
		{
			let objects = RunSearchWithQuery( value );
			for( let i = 0; i < objects.length; i++ )
			{
				let item = objects[i];
				
				let div = document.createElement('div');
				if( item.rarity === "Celestial" )
					div.className = "celestialbg";
				else if( item.rarity === "Exotic" )
					div.className = "exoticbg";
				else
					div.className = "glreslabel";
				
				div.innerHTML = item.name;
				div.onclick = HandleOnClickForItem( main, item );
				div.onmouseover = HandleOnHover( preview, item );
				
				box.appendChild(div);
			}
		}
	});
};