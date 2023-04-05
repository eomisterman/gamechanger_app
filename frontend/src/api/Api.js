class ScheduleApi {

    async getSchedule() {
        return await fetch("http://localhost:8080/schedule")
            .then((response) => { return response.json() })
            .then((jsonResponse) => { return jsonResponse })
            .catch((e) => { throw Error(e.message) })
    }

}

export default ScheduleApi