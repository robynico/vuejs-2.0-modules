
const state = {
	'items': [
		{
		  'key': 'filter1',
		  'label': 'Filter 1',
		  'color': 'blue'
		},
		{
		  'key': 'filter2',
		  'label': 'Filter 2',
		  'color': 'brown'
		}
	]
}

const mutations = {
}

const getters = {
    filters (state) {
        return state.items;
    }
}

export default {
	state,
	mutations,
	getters
}