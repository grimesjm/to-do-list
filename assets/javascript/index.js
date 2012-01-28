var Category = new Object();

TodoList = new Ext.Application({
    name: "TodoList",
    launch: function() {
        var addCategoryButton = new Ext.Button({
            text: '+',
            docked: 'right',
            handler: function() {
                TodoList.Viewport.setActiveItem('addCategory');
                addCategoryButton.setVisible(false);
                doneCategoryButton.setVisible(true);
            }

        });
        var doneCategoryButton = new Ext.Button({
            hidden: true,
            text:   'Done',
            handler: function() {
                Category.save();
                TodoList.Viewport.setActiveItem('indexList');
                doneCategoryButton.setVisible(false);
                addCategoryButton.setVisible(true);
            }
        });
        TodoList.detailToolbar = new Ext.Toolbar({
            layout: 'card',
            items: [
                addCategoryButton,
                doneCategoryButton
            ]
        });


        Category.addPanel = new Ext.form.FormPanel({
            layout: {
                type: 'hbox',
                align: 'start'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Category'
                }
            ],
            id: 'addCategory'
        });

        Category.lists = new Ext.List({
            id: 'indexList',
            store: Category.repository,
            itemTpl: '<div class="category">{name}<div id="category_{id}", style="display: none"><tpl for="actionItems"><li>{name}</li></tpl></div></div>',
            onItemDisclosure: function(record) {
                showActionItemsForCategory(record);    
            }
        });


        var showActionItemsForCategory =  function(record) {
            $('#category_' + record.data.id).toggle();
        };
        
        TodoList.Viewport = new Ext.Panel({
            fullscreen: true,
            layout : 'card',
            dockedItems: [TodoList.detailToolbar],
            items: [ Category.lists, Category.addPanel]
        });

    }

});



