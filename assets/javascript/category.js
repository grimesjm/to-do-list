Ext.regModel('Category', {
    fields: ['name', "id", "actionItems"]
});

Category.repository = new Ext.data.Store({
    model: 'Category',
    sorters: 'name',
    getGroupString: function(record) {
        return record.get('name');
    },
    data: [
        {id: 1, name: "Milk", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {id: 2, name: "Questions", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {id: 3, name: "Eggs", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {id: 4, name: "Code Review", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {id: 5, name: "Bug Id: 11234", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {id: 6, name: "Bread", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]}
    ]
});

Category.save = function(){
    var record = Ext.ModelMgr.create(Category.addPanel.getValues(), 'Category');
    record.id = Category.repository.last.id  + 1;
    //insert the new record into the store, and sync it with local storage
    Category.repository.add(record);
    //TodoList.CategoryStore.sync();
}