const cronJobs = require('./jobs.cron.template.json')
/**
 * This functions get the crons
 */
const readCronJobs = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() // 0-12
    const weekDay = currentDate.getDay() // 0 - 6
    const monthDay = currentDate.getDate() // 0-31
    const hour = currentDate.getHours() // 0-23
    console.log(cronJobs.jobs)
    console.log(year, month, weekDay, monthDay, hour)
}

setInterval(readCronJobs, 3000);