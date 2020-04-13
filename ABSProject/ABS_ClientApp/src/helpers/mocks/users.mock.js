let users =
    [{ id: 1, email: 'test@gmail.com', password: 'test', firstName: 'Test', lastName: 'User' }
    ];

export const usersMock = {
    authenticateUser,
    registerUser
};

function authenticateUser(params, resolve, reject) {
    // find if any user matches login credentials
    let filteredUsers = users.filter(user => {
        return user.email === params.email && user.password === params.password;
    });

    if (filteredUsers.length) {
        // if login details are valid return user details and fake jwt token
        let user = filteredUsers[0];
        let responseJson = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token'
        };
        return resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
    }
    else {
        reject('Username or password is incorrect');
    }
}

function registerUser(newUser, resolve, reject) {
    let duplicateUser = users.filter(user => { return user.email === newUser.email; }).length;
    if (duplicateUser) {
        return reject('email "' + newUser.email + '" is already taken');
    }

    // save new user
    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // respond 200 OK
    resolve({ ok: true, text: () => Promise.resolve() });
}
