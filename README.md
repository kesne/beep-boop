# Beep Beep Boop Bzzzt

#### _A page that takes a user's name and a number, and returns a modified list of numbers - Nov. 1, 2019_

#### By _Jaime Gensler_


## Description

_This is a webpage that will prompt the user for their name and their favorite number. An array containing all numbers from 0 to their number will be returned. However, some inputs will yield some different results. The exact specs are listed below._

| SPEC                                                                         | SAMPLE INPUT | SAMPLE INPUT                                                     |
|------------------------------------------------------------------------------|--------------|------------------------------------------------------------------|
| Names with non-alphabetic characters re-prompt user for name                 | "J41M3"      | "Please enter another name"                                      |
| Numbers that are not positive integers re-prompt user for number             | -5, 0, 2.2   | "Please enter another number"                                    |
| Program returns an array of all numbers between 0 and user's number          | 5            | [0, 1, 2, 3, 4, 5]                                               |
| Numbers that contain a "3" are replaced with a string containing user's name | 3            | [..., 2, "I'm afraid I can't do that, Jaime"]                    |
| Numbers that contain a "2" are replaced with "Boop!"                         | 3            | [0, 1, "Boop!", "I'm afraid I..."]                               |
| Numbers that contain a "1" are replaced with "Beep!"                         | 3            | [0, "Beep!", "Boop!", "I'm afraid..."]                           |
| The resulting array is returned to the user.                                 | 5            | [0, "Beep!", "Boop!", "I'm afraid I can't do that, Jaime", 4, 5] |

## Setup/Installation Requirements

* _Clone this github repository_
* _Open the project folder_
* _Open the main page (index.html)_
* _Enjoy!_


## Support and contact details

_For questions, comments, or concerns, please reach out to me at: jaimegensler0@gmail.com_


## Technologies Used

* _HTML5_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_


### License

This software is licensed under the MIT License.

Copyright (c) 2019 **_Jaime Gensler_**
