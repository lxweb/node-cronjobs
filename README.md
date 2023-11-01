# Node Cron Jobs

Node Cron Jobs is a simple and lightweight library for scheduling and running cron jobs in Node.js applications. It provides a straightforward way to automate tasks on a recurring schedule, making it useful for various applications, such as data scraping, data processing, or sending periodic reports.

## Features

- Easy-to-use API for scheduling cron jobs.
- Ability to define custom job functions to be executed on schedule.
- Fine-grained control over job schedules using cron syntax.
- Supports running jobs in the background.
- Logging and error handling for better job management.

## Installation

You can easily install Node Cron Jobs using npm:

```bash
npm install node-cronjobs
```

# Usage
## Here's a basic example of how to use Node Cron Jobs:
```bash
const CronJob = require('node-cronjobs');

// Define a job function to be executed
function myJob() {
  console.log('Job executed at', new Date());
}

// Schedule the job to run every minute
const job = new CronJob('* * * * *', myJob);

// Start the job
job.start();

// To stop the job
job.stop();
```
