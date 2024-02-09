const API_URL = "https://playground.4geeks.com/apis/fake/contact"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentAgenda: null,
			agendaSlug: "noeAV1314", 
		},
		actions: {
			getAgenda: async() => {
					const store = getStore()
					let result = await fetch(`${API_URL}/agenda/${store.agendaSlug}`)
					console.log(result)
					let data = await result.json()
					console.log(data)
					if (result.ok) {
						setStore({currentAgenda: data})
						return true
					}
					setStore({currentAgenda: false})
						return false
			},
			addContact: async(contact) => {
				const actions = getActions()
				let result = await fetch(`${API_URL}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}, 
					body: JSON.stringify(contact)
				})
				console.log(result)
				let data = await result.json()
				console.log( data)
				if (result.ok) {
					actions.getAgenda()
					return true
				}
					return false
		},

			updateContact: async(id, updatedContact) => {
				const actions = getActions()
					let result = await fetch(`${API_URL}/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						}, 
						body: JSON.stringify(updatedContact)
					})
					console.log(result)
					let data = await result.json()
					console.log( data)
					if (result.ok) {
						actions.getAgenda()
						return true
					}
						return false
			},
			deleteContact: async(id) => {
				const actions = getActions()
					let result = await fetch(`${API_URL}/${id}`, {
						method: "DELETE"
					})
					console.log(result)
					let data = await result.json()
					console.log( data)
					if (result.ok) {
						actions.getAgenda()
						return true
					}
						return false
			},
		}
	};
};

export default getState;
