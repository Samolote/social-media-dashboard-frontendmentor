const toggle = document.querySelector('.toggle__checkbox');
const dashboard = document.querySelector('.dashboard');

const toggleHandler = () =>
	dashboard.classList.contains('dashboard--dark')
		? dashboard.classList.replace('dashboard--dark', 'dashboard--light')
		: dashboard.classList.replace('dashboard--light', 'dashboard--dark');

toggle.addEventListener('click', toggleHandler);
