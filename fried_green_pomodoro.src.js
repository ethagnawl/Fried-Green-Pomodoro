javascript:(function () {
    var work_length = 25;
    var ready = false;
	var count = 0;

    function minutes (seconds) {
        var minutes = seconds * 60000;
        return minutes;
    }

	function calculate_hours_worked(count) {
		var hours = (count * work_length / 60).toFixed(2);
		return hours;
	}

    function pomodoro(ready) {
        ready = ready ? true : confirm('Are you ready to work for ' + work_length + ' minutes?');

        if (ready) {
			count += 1;
			setTimeout(function () {
				var break_length = (count % 4 === 0) ? 15 : 5;

				alert('Take a ' + break_length + ' minute break!');

				setTimeout(function () {
					if (confirm('Are you ready to work for another ' + work_length + ' minutes?')) {
						pomodoro(true);
					} else {
						alert('You just cranked out ' + calculate_hours_worked(count) + ' hours of work!\n\nHave a great day!')
					}				
				}, minutes(break_length));
			}, minutes(work_length));
        } else {
        	alert('A dream doesn\'t become reality through magic; it takes sweat, determination and hard work.\n\n - Colin Powell');
        }        
    }

    pomodoro();
}());
