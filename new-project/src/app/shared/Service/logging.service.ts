export class LoggingService {
  logStatusChange(serverName: string = 'server', status: string){
    console.log(`A ${serverName} Server status changed, new status is : ${status}`)
  }
}
