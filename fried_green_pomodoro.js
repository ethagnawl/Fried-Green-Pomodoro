javascript:(function(){(function(){function%20minutes(seconds){var%20minutes=seconds*60000;return%20minutes;}var%20default_length=minutes(25);var%20ready=false;var%20times_up='Take%20a%205%20minute%20break!';function%20pomodoro(ready){ready=ready%3Ftrue:confirm('Are%20you%20ready%20to%20work%20for%2025%20minutes%3F');if(ready){setTimeout(function(){alert(times_up);setTimeout(function(){if(confirm('Are%20you%20ready%20to%20work%20for%20another%2025%20minutes%3F')){pomodoro(true);}else{alert('Have%20a%20great%20day!')}},minutes(5));},default_length);}}pomodoro();}());})();
