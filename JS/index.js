var tasks_list = [
    {
        id: 1,
        task: `EUROPRINT ni tugatish`,
        staff: `Ali`,
        start_date: `2020-12-07`,
        end_date: `2020-12-10`,
        status: `pending`,
        isRejected: false,
    },
    {
        id: 2,
        task: `EUROPRINT ni tugatish`,
        staff: `Vali`,
        start_date: `2020-12-07`,
        end_date: `2020-12-10`,
        status: `doing`,
        isRejected: false,
    },
    {
        id: 2,
        task: `Skill up ni tugatish`,
        staff: `Sobir`,
        start_date: `2020-12-07`,
        end_date: `2020-12-07`,
        status: `done`,
        isRejected: false,
    },
]
var temp_status = null;
getTaskList()

function getTaskList() {
    document.getElementById(`pending_list`).innerHTML = ``;
    document.getElementById(`doing_list`).innerHTML = ``;
    document.getElementById(`done_list`).innerHTML = ``;
    document.getElementById(`rejected_list`).innerHTML = ``;
    for (i = 0; i < tasks_list.length; i++) {
        if (tasks_list[i].status === `pending`) {
            document.getElementById(`pending_list`).innerHTML +=
                `<div class="task_content">` +
                `<h3>` + tasks_list[i].staff + `</h3>` +
                `<p>` + tasks_list[i].task + `</p>` +
                `<h6>` + `Start date: ` + tasks_list[i].start_date + `</h6>` +
                `<h6>` + `End date: ` + tasks_list[i].end_date + `</h6>` +
                `<select onchange=getStatusValue(event) name="staff" class="form-control mb-2">` +
                `<option value="">Select a status</option>` +
                `<option value="doing">Doing</option>` +
                `<option value="done">Done</option>` +
                `</select>` +
                `<button onclick=editTask(` + tasks_list[i].id + `) class="btn btn-outline-warning mr-2">Edit</button>` +
                `<button onclick=removeTask(id) class="btn btn-outline-danger">Delete</button>` +
                `<hr/>` +
                `</div>`
        } else if (tasks_list[i].status === `doing`) {
            document.getElementById(`doing_list`).innerHTML +=
                `<div class="task_content">` +
                `<h3>` + tasks_list[i].staff + `</h3>` +
                `<p>` + tasks_list[i].task + `</p>` +
                `<h6>` + `Start date: ` + tasks_list[i].start_date + `</h6>` +
                `<h6>` + `End date: ` + tasks_list[i].end_date + `</h6>` +
                `<select onchange=getStatusValue(event) name="staff" class="form-control mb-2">` +
                `<option value="">Select a status</option>` +
                `<option value="pending">Pending</option>` +
                `<option value="done">Done</option>` +
                `</select>` +
                `<button onclick=editTask(` + tasks_list[i].id + `) class="btn btn-outline-warning mr-2">Edit</button>` +
                `<button onclick=removeTask(id) class="btn btn-outline-danger">Delete</button>` +
                `<hr/>` +
                `</div>`
        } else if (tasks_list[i].status === `rejected`) {
            document.getElementById(`rejected_list`).innerHTML +=
                `<div class="task_content">` +
                `<h3>` + tasks_list[i].staff + `</h3>` +
                `<p>` + tasks_list[i].task +`<span class="badge badge-secondary">Rejected</span>` + `</p>` +
                `<h6>` + `Start date: ` + tasks_list[i].start_date + `</h6>` +
                `<h6>` + `End date: ` + tasks_list[i].end_date + `</h6>` +
                `<select name="staff" class="form-control mb-2">` +
                `<option value="">Select a status</option>` +
                `<option value="pending">Pending</option>` +
                `<option value="done">Done</option>` +
                `</select>` +
                `<button onclick=editTask(` + tasks_list[i].id + `) class="btn btn-outline-warning mr-2">Edit</button>` +
                `<hr/>` +
                `</div>`
        } else {
            document.getElementById(`done_list`).innerHTML +=
                `<div class="task_content">` +
                `<h3>` + tasks_list[i].staff + `</h3>` +
                `<p>` + tasks_list[i].task + `</p>` +
                `<h6>` + `Start date: ` + tasks_list[i].start_date + `</h6>` +
                `<h6>` + `End date: ` + tasks_list[i].end_date + `</h6>` +
                `<select name="staff" class="form-control mb-2">` +
                `<option value="">Select a status</option>` +
                `<option value="pending">Pending</option>` +
                `<option value="done">Done</option>` +
                `</select>` +
                `<button onclick=rejectTask(` + tasks_list[i].id + `) class="btn btn-outline-danger">Rejected</button>` +
                `<hr/>` +
                `</div>`
        }
    }
}

/*
function addNewTask() {
    var task_id = Math.floor((Math.random() * 1000000) + 1)
    var task_task = document.forms['task-form']['task'].value
    var task_staff = document.forms['task-form']['staff'].value
    var task_start_date = document.forms['task-form']['start_date'].value
    var task_end_date = document.forms['task-form']['end_date'].value
    var task_status = document.forms['task-form']['status'].value
    var newTask = {
        id: '',
        task: '',
        staff: '',
        start_date: '',
        end_date: '',
        status: '',
    }
    if (task_task !== '' && task_staff !== '' && task_start_date !== '' && task_end_date !== '' && task_status !== '') {
        newTask = {
            id: task_id,
            task: task_task,
            staff: task_staff,
            start_date: task_start_date,
            end_date: task_end_date,
            status: task_status,
        }
        tasks_list.push(newTask)
        document.forms['task-form']['task'].value = ''
        document.forms['task-form']['staff'].value = ''
        document.forms['task-form']['start_date'].value = ''
        document.forms['task-form']['end_date'].value = ''
        document.forms['task-form']['status'].value = ''
        getTaskList()
    } else {
        window.alert("Please, complete all your information")
    }
}*/
function addTask() {
    let new_id = Math.floor((Math.random() * 1000000) + 1);
    let new_task = document.forms[`task-form`][`task`].value;
    let new_staff = document.forms[`task-form`][`staff`].value;
    let new_start_date = document.forms[`task-form`][`start_date`].value;
    let new_end_date = document.forms[`task-form`][`end_date`].value;
    let new_status = document.forms[`task-form`][`status`].value;
    if (new_task !== `` && new_staff !== `` && new_start_date !== `` && new_end_date !== `` && new_status !== ``) {
        let Task = {
            id: new_id,
            task: new_task,
            staff: new_staff,
            start_date: new_start_date,
            end_date: new_end_date,
            status: new_status,
            isRejected: false,
        }
        tasks_list.push(Task);
        getTaskList()
        document.forms[`task-form`].reset()
    } else {
        alert(`Iltimos, ma'lumotlarni to'liq to'ldiring!`)
    }
}

function getStatusValue(event) {
    temp_status = event.target.value
}

function editTask(id) {
    if (temp_status !== null) {
        let selectedIndex = tasks_list.findIndex(obj => obj.id === id);
        tasks_list[selectedIndex].status = temp_status;
        temp_status = null;
        getTaskList()
    }
}

function rejectTask(id) {
    let selectedIndex = tasks_list.findIndex(obj => obj.id === id);
    tasks_list[selectedIndex].isRejected = true;
    tasks_list[selectedIndex].status = `rejected`;
    getTaskList()
}
function removeTask(id) {
    for (i = 0; i < tasks_list.length; i++) {
        if (id === tasks_list[i].id) {
            tasks_list.splice(i, 1)
            getTaskList()

        }
    }

}