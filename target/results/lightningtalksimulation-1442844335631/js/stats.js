var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "percentiles3": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "percentiles4": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.638",
        "ok": "0.638",
        "ko": "-"
    }
},
contents: {
"req_dvdstore-home-f14e7": {
        type: "REQUEST",
        name: "DVDStore Home",
path: "DVDStore Home",
pathFormatted: "req_dvdstore-home-f14e7",
stats: {
    "name": "DVDStore Home",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles1": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles2": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles3": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles4": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.319",
        "ok": "0.319",
        "ko": "-"
    }
}
    },"req_dvdstore-shop-2dbb3": {
        type: "REQUEST",
        name: "DVDStore Shop",
path: "DVDStore Shop",
pathFormatted: "req_dvdstore-shop-2dbb3",
stats: {
    "name": "DVDStore Shop",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles1": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles2": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles3": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles4": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.319",
        "ok": "0.319",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
