Ext.regModel('Category', {
    fields: ['name']
});

Category.repository = new Ext.data.Store({
    model: 'Category',
    sorters: 'name',
    getGroupString: function(record) {
        return record.get('name');
    },
    data: [
        {name: "Milk", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {name: "Questions", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {name: "Eggs", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {name: "Code Review", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {name: "Bug Id: 11234", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]},
        {name: "Bread", actionItems: [{name: "task", id: "task1"}, {name: "task2", id: "task2"}]}
    ]
});

Category.save = function(){
    var record = Ext.ModelMgr.create(Category.addPanel.getValues(), 'Category');
    //insert the new record into the store, and sync it with local storage
    Category.repository.add(record);
    //TodoList.CategoryStore.sync();
}