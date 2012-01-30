/*
*   Fried Green Pomodoro
*   V1
*   ethagnawl@gmail.com
*   http://ethagnawl.com/pomodoro
*   Copyright 2012, Pete Doherty
*   Date: 1/30/2012 1:10:00 (EST)
*
*   Fried Green Pomodoro is distributed under the terms of the GNU General Public License.
*
*   This program is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
*   GNU General Public License for more details.
*
*   http://www.gnu.org/licenses/gpl.txt
*/

(function () {
    var work_length = 25,
        ready = false,
        count = 0;

    function minutes(seconds) {
        return (seconds * 60000);
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
                        alert('You just cranked out ' + calculate_hours_worked(count) + ' hours of work!\n\nHave a great day!');
                    }
                }, minutes(break_length));
            }, minutes(work_length));
        } else {
            alert('A dream doesn\'t become reality through magic; it takes sweat, determination and hard work.\n\n - Colin Powell');
        }
    }

    pomodoro();
}());
