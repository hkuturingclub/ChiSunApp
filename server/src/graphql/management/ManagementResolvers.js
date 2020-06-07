const resolvers = {
  async managements(parent, args, { firebase }) {
    const querySnapshot = await firebase.collection("tutorialteam").get();
    const managements = [];
    querySnapshot.forEach((doc) => {
      managements.push({ id: doc.id, ...doc.data() });
    });
    return managements;
  },
};
export default resolvers;
