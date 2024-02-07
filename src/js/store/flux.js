const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentAgenda: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getAgenda: async(agendaUpdate) => {
				try{
					console.log("entre al action get agenda", agendaUpdate)
					let result = await fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${agendaUpdate}`)
					let data = await result.json()
					console.log("esta es la data rescatada:", data)
					let store = getStore()
					await setStore({...store, currentAgenda: data})
					let newStore = getStore()
					console.log("Esto es lo que quedo en el store:", newStore.currentAgenda)
				} catch(e) {
					console.log(e)
				}
			},

			updateContact: async(id, updatedContact) => {
				try{
					console.log("entre al action update contact", updatedContact)
					let result = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						}, 
						body: JSON.stringify(updatedContact)
					})
					let data = await result.json()
					console.log("esta es la data rescatada:", data)
					let store = getStore()
				} catch(e) {
					console.log(e)
				}
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
