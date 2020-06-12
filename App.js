Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log('first app');
         
        this._loadData();
    },

    _loadData() {
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(store, data, success) {
                    console.log('got data', store, data, success);  
                    this._loadGrid(store)
                },
            scope: this
            },
            fetch: ['Name', 'ScheduleState']
        });
    },

    _loadGrid(myStore) {
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: myStore,
            columnCfgs: [
                'FormattedID',
                'Name',
                'ScheduleState'
            ]
        });
      
        this.add(myGrid);
    }   
});
