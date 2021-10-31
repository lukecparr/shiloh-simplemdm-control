const newRequest = (url) => {

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://cors-anywhere-shiloh.herokuapp.com/" + url);
	
	xhr.setRequestHeader("Authorization", "Basic Sm51bW1CRkpPWmtmbzI3VU5WSlhiVzNRVUEwd3B6UEdnVUphcTQybkdWeG5razR3eHFJMEdIcFpnWm5Db1M4azog");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Content-Length", "0");
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
		}};

	xhr.send();
}


document.addEventListener('DOMContentLoaded',
	() => {
		const elem = document.getElementById('block-20a520088f2c4fd9818ae202a8ea81fa')
		
		const createButton = (deviceID, deviceName) => {
			const unlock = document.createElement('BUTTON')
			unlock.id = `unlock-${deviceID}'`
			unlock.classList.add(`unlock`)
			unlock.innerHTML = `Unlock '${deviceName}'`
			unlock.onclick = () => newRequest(`https://a.simplemdm.com/api/v1/device_groups/49646/devices/${deviceID}`);

			const lock = document.createElement('BUTTON')
			lock.id = `lock-${deviceID}'`
			lock.classList.add(`lock`)
			lock.innerHTML = `Lock '${deviceName}'`
			lock.onclick = () => newRequest(`https://a.simplemdm.com/api/v1/device_groups/49644/devices/${deviceID}`);

			const reboot = document.createElement('BUTTON')
			reboot.id = `reboot-${deviceID}'`
			reboot.classList.add(`reboot`)
			reboot.innerHTML = `Reboot '${deviceName}'`
			reboot.onclick = () => newRequest(`POST https://a.simplemdm.com/api/v1/devices/${deviceID}/restart`);

			return [reboot, lock, unlock]
		}


		createButton('301333', 'Check-in (4)').forEach((button) => {
			elem.insertAdjacentElement('afterend', button)
		})
	}
)

// newRequest code: https://reqbin.com/hhufgug4
// Self-hosted proxy: https://cors-anywhere-shiloh.herokuapp.com/
