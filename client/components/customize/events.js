Template.customize.events({

	'click .list-group-item': function(e) {
		var el = e.target
		// var items = document.getElementsByClassName('selected')
		// var len = items.length
		// for(i=0; i<len; i++) {
		// 	item = items[i]
		// 	item.classList.remove('selected')
		// }
		// if(!el.classList.contains('selected')){
		// 	el.classList.add('selected')
		// }
		Session.set('category', this.category)

		el.classList.toggle('selected')
	},

	// build a question list, navigate to first question in list
	// needs work!
	'click #start': function(e) {

		// query for multiple categories
		var categories = [].slice.call(document.querySelectorAll('.selected')).map(function(selected_element) {
			return selected_element.textContent;
		});
		var question_list = Questions.find({category: {$in: categories}}).fetch();

		console.log("list has %s questions.", question_list.length);

		//set question list to be accessible in Quiz view
		if (question_list.length > 0) {
			Session.set("combo_list", question_list);
			Session.set("quiz_index", 0);
			Session.set("quiz_length", question_list.length);
		}
	}

});