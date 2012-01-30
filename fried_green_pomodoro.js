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

javascript:(function(){function%20d(a){(a=a%3F!0:confirm(%22Are%20you%20ready%20to%20work%20for%20%22+b+%22%20minutes%3F%22))%3F(c+=1,setTimeout(function(){var%20a=0===c%254%3F15:5;alert(%22Take%20a%20%22+a+%22%20minute%20break!%22);setTimeout(function(){confirm(%22Are%20you%20ready%20to%20work%20for%20another%20%22+b+%22%20minutes%3F%22)%3Fd(!0):alert(%22You%20just%20cranked%20out%20%22+(c*b/60).toFixed(2)+%22%20hours%20of%20work!\n\nHave%20a%20great%20day!%22)},6E4*a)},6E4*b)):alert(%22A%20dream%20doesn't%20become%20reality%20through%20magic;it%20takes%20sweat,determination%20and%20hard%20work.\n\n%20-%20Colin%20Powell%22)}var%20b=25,c=0;d()})();