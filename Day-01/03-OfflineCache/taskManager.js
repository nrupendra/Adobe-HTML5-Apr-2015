

        window.addEventListener("storage", function(evtArg){
            loadTasksFromStorage();
        });

        window.addEventListener("DOMContentLoaded", init);
        function init(){
            var btnAdd = document.getElementById("btnAdd");
            btnAdd.addEventListener("click", onBtnAddClick);
            
            var btnRemoveCompleted = document.getElementById("btnRemoveCompleted");
            btnRemoveCompleted.addEventListener("click", onBtnRemoveCompletedClick);
            loadTasksFromStorage();

        }
        function loadTasksFromStorage(){
            document.getElementById("olTaskList").innerHTML = "";

            var tasks = taskStorage.getAll();
            for(var i=0; i<tasks.length;i++){
                var task = tasks[i];
                addTaskToList(task.taskId, task.taskName);
            }
        }
        function onBtnAddClick(){
            var taskName = document.getElementById("txtTask").value;

            var taskId = taskStorage.save(taskName);
            addTaskToList(taskId, taskName);

        }

        function addTaskToList(taskId, taskName){
            var newTaskItem = document.createElement("li");
            newTaskItem.setAttribute("taskId", taskId);
            newTaskItem.textContent = taskName;
            newTaskItem.addEventListener("click", onTaskItemClick);
            document.getElementById("olTaskList").appendChild(newTaskItem);
        }
        
        function onTaskItemClick(){
            this.classList.toggle("completed");
        }
        
        function onBtnRemoveCompletedClick(){
            var taskItems = document.getElementById("olTaskList").children;
            for(var i=taskItems.length-1; i>=0; i--){
                var taskItem = taskItems[i];
                if (taskItem.classList.contains("completed")){
                    var taskId = taskItem.getAttribute("taskId");
                    taskStorage.remove(taskId);
                    taskItem.remove();
                }
            }
        }