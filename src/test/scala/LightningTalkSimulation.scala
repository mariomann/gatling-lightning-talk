import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LightningTalkSimulation extends Simulation {

  val baseHost = "192.168.59.103"
  val basePort = "8080"

  val httpConf = http
    .baseURL("http://" + baseHost + ":" + basePort + "") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  //one request
  val req_1 = http("DVDStore Home").get("/dvdstore/home")

  //another request
  val req_2 = http("DVDStore Shop").get("/dvdstore/browse")

  // A scenario is a chain of requests and pauses
  val scn = scenario("DVDStore").exec(req_1)

  // A scenario with a specified time or repeat amount
  val timedScn = scenario("timed DVDStore").during(10 seconds){
                                            exec(req_1)
                                           .pause(3)
                                           .exec(req_2)
  }

  val iteratedScn = scenario("iterated DVDStore").repeat(10){
                                                  exec(req_1)
                                                 .pause(3)
                                                 .exec(req_2)
  }

  //how many user will execute the scenario
  val atOnceInj = atOnceUsers(1)                                //1 user
  val atOnce3Inj = atOnceUsers(3)                               //3 users
  val const3Inj = constantUsersPerSec(123) during(30 seconds) randomized       //max 3 users
  val rampInj = rampUsers(3) over (3 seconds)                   //max 3 users
  val rampPerSecInj = rampUsersPerSec(1) to 123 during(1 minute) //max 6 users
  val heaviSideInj = heavisideUsers(200) over (10 seconds)      //max 200 users


  setUp(iteratedScn.inject(atOnceInj).protocols(httpConf))
}
