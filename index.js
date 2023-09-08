const cronJobs = require('./jobs.cron.template.json')
const { spawn } = require('node:child_process');

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
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    const {repeat, year: cronYear, month: cronMonth, day:cronDay, hour: cronHours, minute: cronMinutes, second: cronSeconds} = cronJobs.jobs[0].time
    const cronDate = new Date(`${cronMonth}/${cronDay}/${cronYear} ${cronHours}:${cronMinutes}:${cronSeconds}`)
    console.log(cronDate) // ``
    console.log(currentDate)
    console.log(cronDate<currentDate)
    if(cronDate<currentDate && cronJobs.jobs[0].state.pending){
        const cmd = spawn(cronJobs.jobs[0].command.cmd, cronJobs.jobs[0].command.params);
        cmd.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        
        cmd.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });
        
        cmd.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        }); 
    }
    // console.log(cronYear, cronMonth, cronDay, cronHour, cronMinute, cronSecond)
    // console.log(year, month, weekDay, monthDay, hour, minutes, seconds)

}

setInterval(readCronJobs, 3000);