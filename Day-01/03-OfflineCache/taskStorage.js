/*
            new key = new Date().valueOf().toString()
        */
        var storage = window.localStorage;

        var taskStorage = {
            getAll : function(){
                var result = [];
                for(var i=0; i<storage.length;i++){
                    var taskId = storage.key(i);
                    var taskName = storage.getItem(taskId);
                    var task = {
                        taskId : taskId,
                        taskName : taskName
                    };
                    result.push(task);
                }
                return result;
            },
            save : function(taskName){
                var id = new Date().valueOf().toString();
                storage.setItem(id, taskName);
                return id;
            },
            remove : function(taskId){
                storage.removeItem(taskId);
            }
        }