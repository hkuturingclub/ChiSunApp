const resolvers = {
  async login(parent, { email, password }, { user, firebaseAuth }) {
    return (await firebaseAuth.signInWithEmailAndPassword(email, password)).user.getIdToken();
  },
  async me(parent, args, { user }) {
    if (!user) {
      throw new Error('No user logged in');
    }
    return user;
  },
};
export default resolvers;
