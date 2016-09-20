
const state = {
	'fields': [
		{
		  'field': 'name',
		  'label': 'Nom'
		},
		{
		  'field': 'adresse',
		  'label': 'Adresse'
		},
		{
		  'field': 'amount',
		  'label': 'Amount'
		},
		{
		  'field': 'contact',
		  'label': 'Contact'
		}
	],
	items : []
}

export const SET_CLIENTS = 'SET_CLIENTS'

const mutations = {
	[SET_CLIENTS] (state, clients) {
      state.items = clients;
    }
}

const actions = {
	init: ({ commit }, payload) => {
		let clients = []
		for(let i = 0; i < 100; i++){
			clients.push({
				'name': 'Client '+i,
				'adresse': '14000 Caen',
				'amount': '150000',
				'contact': 'contact@client'+i+'.com'
			})
		}
		commit(SET_CLIENTS, { clients })
	}
}

const getters = {
    clients (state) {
        return state.items;
    },
    fields (state) {
        return state.fields;
    }
}

export default {
	state,
	mutations,
	getters,
	actions
}