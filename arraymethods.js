const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// 1. Find a user named by name. In this case, "Jose"
const findByFirstName = fName => users.find(user => user.firstName == fName);

console.log(findByFirstName("Jose"));

// 2. Get an array of all the premium members
const findPremiumMembers = users.filter(user => user.isPremiumMember);

console.log(findPremiumMembers);

// 3. Get an array of all the user last names
const displayLastNames = users.map(user => "UserID " + user.id + "'s last name is "+ user.lastName);

console.log(displayLastNames);

// 4. Get an array of the full names of those who logged in more than 10 times
const displayFrequentUsers = users.filter(user => user.logins > 10).map(user => user.firstName + " " + user.lastName + " has logged in " + user.logins + " times.");

console.log(displayFrequentUsers);

// 5. Get the total number of logins for the list of users
// Creates an array consisting of only the users' number of logins, then 
const totalLogins = users.map(user => user.logins).reduce((previousValue, currentValue) => previousValue + currentValue)

console.log(totalLogins + " total logins across all users.");