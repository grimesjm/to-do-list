Ext.regModel('ActionItem', {
    fields: ['category', 'name']
});

TodoList.ListStore = new Ext.data.Store({
    model: 'ActionItem',
    sorters: 'category',
    getGroupString: function(record) {
        return record.get('category');
    },
    data: [
        {category: "Shopping", name: "Milk"},
        {category: "Test", name: "Questions"},
        {category: "Shopping", name: "Eggs"},
        {category: "Work", name: "Code Review"},
        {category: "Work", name: "Bug Id: 11234"},
        {category: "Shopping", name: "Bread"}
    ]
});