// util

(function(){

let GetFirstFromClassName = (cl) => document.getElementsByClassName(cl)[0];
let RunSearchWithQuery = function( search )
{
	let ret = [];
	
	for( item in ITEMS )
	{
		let n = ITEMS[ item ].name;
		if( n )
		{
			if( n.toLowerCase().includes( search.toLowerCase() ) && ret.length < 10 )
			{
				ret.push( ITEMS[ item ] );
			}
		}
	}
	
	return ret;
}

let HandleOnHover = function( main, item )
{
	return (event) =>
	{
		main.src = item.icon;
		// console.log(item.icon, main);
	};
}

let HandleOnClickForItem = function( main, item )
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
})();