var vm = new Vue({
	el: '#app',
	data: {
		currentFilter: 'ART',
		projects: [
			{title: "Artwork", image: "https://picsum.photos/g/200?image=122", category: 'ART'},
			{title: "Charcoal", image: "https://picsum.photos/g/200?image=116", category: 'ART'},
			{title: "Sketching", image: "https://picsum.photos/g/200?image=121", category: 'DOODLES'},
			{title: "Acrillic", image: "https://picsum.photos/g/200?image=133", category: 'WORKSHOPS'},
			{title: "Pencil", image: "https://picsum.photos/g/200?image=134", category: 'DOODLES'},
			{title: "Pen", image: "https://picsum.photos/g/200?image=115", category: 'ART'},
			{title: "Inking", image: "https://picsum.photos/g/200", category: 'WORKSHOPS'},
			{title: "Random", image: "https://picsum.photos/g/200?random", category: 'RANDOM'},
		]
	},
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		}
	}
})
