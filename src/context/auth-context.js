import React from 'react';

const authContext = React.createContext({    //pass a initial values : string,object,number,..
    authenticated : false,
    login : () => {}
});

export default authContext;