    window.onload = function() {
        // Month,Day,Year,Hour,Minute,Second
        electionTime('march,17,2015,00:00:00');
    }

    function electionTime(countTo) {
        now = new Date();
        countTo = new Date(countTo);
        difference = (now - countTo);

        days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
        hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
        mins = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
        secs = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
        document.getElementById('electionTime').setAttribute("electionTime", days + ':' + hours + ':' + mins + ':' + secs)
        document.getElementById('days').firstChild.nodeValue = days;
        document.getElementById('hours').firstChild.nodeValue = hours;
        document.getElementById('minutes').firstChild.nodeValue = mins;
        document.getElementById('seconds').firstChild.nodeValue = secs;

        clearTimeout(electionTime.to);
        electionTime.to = setTimeout(function() {
            electionTime(countTo);
        }, 1000);
    }
