const stations = [
	{
		id: '583116',
		name: 'Check-in (1)',
		blockId: 'block-3b6912c2831a46ef9ba1688587ea7403'
	},
	{
		id: '598941',
		name: 'Check-in (2)',
		blockId: 'block-8289c722a8624d7e866712c7eb086d63'
	},
	{
		id: '591690',
		name: 'Check-in (3)',
		blockId: 'block-4318ac05dc81437885358ea43b928cf6'
	},
	{
		id: '301333',
		name: 'Check-in (4)',
		blockId: 'block-1b2d4a8a60354e42b33cd25348b0bad3'
	},
	{
		id: '301333',
		name: 'connect_center',
		blockId: 'block-1b2d4a8a60354e42b33cd25348b0bad3'
	}
]

let newRequest = (url) => {

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://cors-anywhere-shiloh.herokuapp.com/" + url);
	
	xhr.setRequestHeader("Authorization", "Basic Sm51bW1CRkpPWmtmbzI3VU5WSlhiVzNRVUEwd3B6UEdnVUphcTQybkdWeG5razR3eHFJMEdIcFpnWm5Db1M4azog");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Content-Length", "0");
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
			return xhr.status;
		}};

	xhr.send();
}

const clickHandler = (mdmUrl, element) => {
	newRequest(mdmUrl)
	currHTML = element.innerHTML
	element.innerHTML = 'Success!'
	setTimeout(() => {
		element.innerHTML = currHTML
	},3000)
}

const createButton = (deviceID, deviceName) => {
	const unlock = document.createElement('BUTTON')
	unlock.id = `unlock-${deviceID}'`
	unlock.classList.add(`unlock`)
	unlock.innerHTML = `Unlock`
	unlock.onclick = () => {clickHandler(`https://a.simplemdm.com/api/v1/device_groups/49646/devices/${deviceID}`, unlock)};

	const lock = document.createElement('BUTTON')
	lock.id = `lock-${deviceID}'`
	lock.classList.add(`lock`)
	lock.innerHTML = `Lock`
	lock.onclick = () => {clickHandler(`https://a.simplemdm.com/api/v1/device_groups/49644/devices/${deviceID}`, lock)};

	const reboot = document.createElement('BUTTON')
	reboot.id = `reboot-${deviceID}'`
	reboot.classList.add(`reboot`)
	reboot.innerHTML = `Reboot`
	reboot.onclick = () => clickHandler(`https://a.simplemdm.com/api/v1/devices/${deviceID}/restart`, reboot);

	return [reboot, lock, unlock]
}

document.addEventListener('DOMContentLoaded',
	() => {
		const rootElem = document.getElementById('block-4d2d287191324d03ad7773b510a89bfd')

		stations.forEach((station) => {
			let h = document.createElement('h1')
			h.classList.add('notion-heading')
			h.innerHTML = station.name

			rootElem.insertAdjacentElement('afterend', h)

			createButton(station.id, station.name).forEach((button) => {
				h.insertAdjacentElement('afterend', button)
			})
		})
	}
)

// newRequest code: https://reqbin.com/hhufgug4
// Self-hosted proxy: https://cors-anywhere-shiloh.herokuapp.com/
// js file CDN through: https://combinatronics.com/
// js CDN URL: https://www.combinatronics.com/lukecparr/shiloh-simplemdm-control/main/create-buttons.js
// <script src='https://www.combinatronics.com/lukecparr/shiloh-simplemdm-control/main/create-buttons.js'></script>
