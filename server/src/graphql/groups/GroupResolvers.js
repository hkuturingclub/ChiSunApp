const resolvers = {
  async group(parent, { id }, { firebaseDB }) {
    const doc = await firebaseDB
      .collection('groups')
      .doc(id)
      .get();
    if (!doc.exists) {
      throw new Error('Group not found');
    }
    return { id: doc.id, ...doc.data() };
  },
  async groups(parent, args, { firebaseDB }) {
    const querySnapshot = await firebaseDB.collection('groups').get();
    const groups = [];
    querySnapshot.forEach(doc => {
      groups.push({ id: doc.id, ...doc.data() });
    });
    return groups;
  },
};

export default resolvers;
