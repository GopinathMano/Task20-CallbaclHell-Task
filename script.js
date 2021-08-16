var timeLeft = 10;
var final = document.getElementById("seconds");
setTimeout(function () {
  document.getElementById("seconds").innerHTML = String(timeLeft);
  timeLeft--;
  setTimeout(function () {
    document.getElementById("seconds").innerHTML = String(timeLeft);
    timeLeft--;
    setTimeout(function () {
      document.getElementById("seconds").innerHTML = String(timeLeft);
      timeLeft--;
      setTimeout(function () {
        document.getElementById("seconds").innerHTML = String(timeLeft);
        timeLeft--;
        setTimeout(function () {
          document.getElementById("seconds").innerHTML = String(timeLeft);
          timeLeft--;
          setTimeout(function () {
            document.getElementById("seconds").innerHTML = String(timeLeft);
            timeLeft--;
            setTimeout(function () {
              document.getElementById("seconds").innerHTML = String(timeLeft);
              timeLeft--;
              setTimeout(function () {
                document.getElementById("seconds").innerHTML = String(timeLeft);
                timeLeft--;
                setTimeout(function () {
                  document.getElementById("seconds").innerHTML =
                    String(timeLeft);
                  timeLeft--;
                  setTimeout(function () {
                    document.getElementById("seconds").innerHTML =
                      String(timeLeft);
                    timeLeft--;
                    setTimeout(function () {
                      document.getElementById("seconds").style.fontSize =
                        "100px";
                      document.getElementById("seconds").innerHTML =
                        "Happy Independence Day ";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
