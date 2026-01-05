function Format(number) {
    return String(number).padStart(2, "0")
}
setInterval(() => {
    const currentDate = new Date()
    const expireDate = new Date("Jan 2,2026 20:00:00")
    const timeLeft = expireDate - currentDate
      if (timeLeft <= 0) {
        document.querySelector(".timer").innerHTML = "EXPIRED";
        return;
    }
    const day = 24 * 60 * 60 * 1000
    const hour = 60 * 60 * 1000
    const minute = 60 * 1000
  

    let days = Math.floor(timeLeft / (day))
    let hours = Math.floor(timeLeft % (day)/(hour))
    let minutes = Math.floor(timeLeft % (hour)/(minute))
    let seconds = Math.floor(timeLeft % (minute)/1000)


    let result = [Format(days),
    Format(hours),
    Format(minutes),
    Format(seconds)
    ].join(":")

    document.getElementById("days").innerText = Format(days);
    document.getElementById("hours").innerText = Format(hours);
    document.getElementById("minutes").innerText = Format(minutes);
    document.getElementById("seconds").innerText = Format(seconds);



}, 1000)