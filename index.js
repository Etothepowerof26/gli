window.onload = (event) =>
{
	let box = document.getElementsByClassName("glres")[0];
	box.innerHTML = "";
		
	let search_elem = document.getElementsByClassName("search")[0];
		
	let current_search_query = "";
	search_elem.addEventListener('input', (ev) =>
	{
		var value = search_elem.value;
		box.innerHTML = "";
		
		if( value != "" )
		{
			let objects = [];
			
			for( item in ITEMS )
			{
				var itm = ITEMS[item];
				var start = itm.name.toLowerCase();
				if( start.search( value.toLowerCase() ) != -1 )
				{
					// todo: sort by name
					console.log( itm );
				}
			}
		}
	});
};