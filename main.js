const toggle = document.querySelector('.toggle__checkbox');
const dashboard = document.querySelector('.dashboard');

const toggleHandler = () => {
	const isDark = dashboard.classList.contains(dark);
	if (isDark) {
		dashboard.classList.replace(dark, light);
		localStorage.setItem('theme', light);
	} else {
		dashboard.classList.replace(light, dark);
		localStorage.setItem('theme', dark);
	}
};

toggle.addEventListener('click', toggleHandler);

const theme = localStorage.getItem('theme');
const dark = 'dashboard--dark';
const light = 'dashboard--light';

if (theme) {
	if (theme === dark) {
		dashboard.classList.replace(light, dark);
		toggle.checked = true;
	} else {
		dashboard.classList.replace(dark, light);
		toggle.checked = false;
	}
}
