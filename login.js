
(async () => {
	const login = async () => {
		try {
			await fetch(`http://${document.location.host}/jdbcproject/tempAuth.jsp`, {
				"credentials": "include",
				"headers": {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				"body": "action=login&userId=1234&password=adminpass",
				"method": "POST",
				"mode": "cors"
			});
		}
		catch (e) {
			console.error(e);
		};
	};
			const events = Object.keys(document.__proto__.__proto__).reduce((arr, event)=> { // https://stackoverflow.com/questions/39963850/how-can-i-add-an-event-listener-for-all-events-in-javascript-without-listing-the
				if(event.startsWith('on')) return [...arr, event.substr(2)];
				return arr;
			}, []);
				events.forEach(async (event) => {
					document.addEventListener(event,login);
				});
	login();
		})();
