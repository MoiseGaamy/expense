export const createUserWithEmailAndPassword = (email,password) => {
    return (dispatch, state, {getFirebase}) => {
        let firebase = getFirebase();
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                  console.log('successfully created',user);
            })
            .catch((error) => {
               console.log(error);
            });
    }
};
export const sigInWithEmailAndPassword = (email,password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                  console.log('successfully created',user);
            })
            .catch((error) => {
               console.log(error);
            });
    }
};
export const signInWithGoogle = () => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
            .signInWithPopup(provider)
            .then((user) => {
                  console.log('successfully created',user);
            })
            .catch((error) => {
               console.log(error);
            });
    }
};
export const signOut = () => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        firebase.auth().signOut()
            .then((user) => {
                  console.log('successfully signOut',user);
            })
            .catch((error) => {
               console.log(error);
            });
    }
};