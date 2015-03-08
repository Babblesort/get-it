Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'First you get the money.',
   isCompleted: true
 },
 {
   id: 2,
   title: 'Then you get the power.',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Then you get the sugar.',
   isCompleted: false
 }
];