import typesAndColors from "./typesAndColors.json";
const Global = {
	install(Vue) {
		Vue.mixin({
			computed: {
				IPokemonTypesAndColors() {
					return typesAndColors;
				},
				ISearchCriteria: {
					get() {
						return this.$store.state.SearchCriteria;
					},
					set(value) {
						this.$store.dispatch("handle_SearchCriteria", value);
					},
				},
				ILoading: {
					get() {
						return this.$store.state.Loading;
					},
					set(value) {
						this.$store.dispatch("handle_Loading", value);
					},
				},
			},
			methods: {
				IGetColorForType(type) {
					for (let i = 0; i < this.IPokemonTypesAndColors.length; i++) {
						const item = this.IPokemonTypesAndColors[i];
						if (item.name == type) return item;
					}
				},
				SortByASC(array, propertyName) {
					if (array)
						return JSON.parse(JSON.stringify(array)).sort((a, b) => {
							if (a[propertyName] > b[propertyName]) {
								return 1;
							} else if (a[propertyName] < b[propertyName]) {
								return -1;
							}
							return 0;
						});
					return array;
				},
				SortByDESC(array, propertyName) {
					if (array)
						return JSON.parse(JSON.stringify(array)).sort((a, b) => {
							if (a[propertyName] < b[propertyName]) {
								return 1;
							} else if (a[propertyName] > b[propertyName]) {
								return -1;
							}
							return 0;
						});
					return array;
				},
			},
		});
	},
};
export default Global;
