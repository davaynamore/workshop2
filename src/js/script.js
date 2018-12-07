	document.body.addEventListener('click', (e) => {
		const target = e.target;
		if(!target.getAttribute('href')) return;
		e.preventDefault();
		const navList = target.parentElement.parentElement.children;
		navList.forEach = Array.prototype.forEach;
		navList.forEach((el) => {
			el.firstChild.classList.remove('active');
		})
		target.classList.add('active');
		const sectionId = target.getAttribute('href');
		const targetSectionTop = document.querySelector(sectionId).offsetTop;
		window.scrollTo({
			top: targetSectionTop,
			behavior: 'smooth'
		})
	})