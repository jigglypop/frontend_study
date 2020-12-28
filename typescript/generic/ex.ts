interface initialStateProps {
    register: {
        useranme: string;
        password: string;
        passwordConfirm: string;
    };
    login: {
        useranme: string;
        password: string;
    };
}


const initialState: initialStateProps = {
    register:{
        useranme:'hello',
        password:'1127star',
        passwordConfirm:'1127star'
    },
    login:{
        useranme:'hello',
        password:'1127star',
    }
}
console.log(initialState['login'])