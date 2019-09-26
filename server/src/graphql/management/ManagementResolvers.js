const resolvers = {
  async managements(parent, args, { firebaseDB }) {
    const querySnapshot = await firebaseDB.collection('tutorialteam').get();
    const managements = [];
    querySnapshot.forEach(doc => {
      managements.push({ id: doc.id, ...doc.data() });
    });
    return managements;
  },
};
export default resolvers;
