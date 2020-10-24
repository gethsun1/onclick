

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = static + '/style.css'
	}

	if(mode == 'cyan'){
		document.getElementById('theme-style').href = static + '/cyan.css'
	}

	if(mode == 'turqoise'){
		document.getElementById('theme-style').href = static + '/turqoise.css'
	}

	if(mode == 'burgundy'){
		document.getElementById('theme-style').href = static+ '/burgundy.css'
	}

	localStorage.setItem('theme', mode)
}
