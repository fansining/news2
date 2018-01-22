import getters from './getters'


const state={
	showIt:true,
	loadingIt:false
};


const mutations={
	showNav(state){
		state.showIt=true
	},
	hideNav(state){
		state.showIt=false
	},
	showLoading(state){
		state.loadingIt=true
	},
	hideLoading(state){
		state.loadingIt=false
	}
};


export default{
	state,
	mutations,
	getters
}