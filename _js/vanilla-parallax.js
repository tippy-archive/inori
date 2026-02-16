const header = document.querySelector('.header');
const speed = parseFloat(header.getAttribute('data-speed')) || 0.4;
let resizeTimer;

function applyParallax() {
	const scrollY = window.pageYOffset;
	const width = window.innerWidth;
	const height = window.innerHeight;

	const oneVh = height / 100;

	let baseOffset = 0;

	if (width >= 2560) {
		const targetVh = 14;
		baseOffset = -(oneVh * targetVh);
	} else if (width >= 1920) {
		const targetVh = 10;
		baseOffset = -(oneVh * targetVh);
	} else if (width >= 1600) {
		const targetVh = 6;
		baseOffset = -(oneVh * targetVh);
	} else {
		baseOffset = 0;
	}

	const parallaxY = scrollY * speed;

	header.style.backgroundPosition = `50% ${baseOffset + parallaxY}px`;
}

window.addEventListener('scroll', () => {
	window.requestAnimationFrame(applyParallax);
});

window.addEventListener('resize', () => {
	header.style.transition = "background-position 0.2s ease-out";

	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(() => {
		applyParallax();
		setTimeout(() => {
			header.style.transition = "none";
		}, 200);
	}, 100);
});

window.addEventListener('load', applyParallax);