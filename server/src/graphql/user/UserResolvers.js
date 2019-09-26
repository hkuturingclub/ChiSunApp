const resolvers = {
  async login(parent, { email, password }, { firebaseAuth }) {
    return (await firebaseAuth.signInWithEmailAndPassword(email, password)).user.getIdToken();
  },
};
export default resolvers;
