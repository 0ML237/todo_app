export default class TaskModel {
    constructor(title, description="", date, state="started"){
        this.id = Date.now()
        this.title = title
        this.description = description
        this.date = date ,
        this.state = state
    }
}