const resolvers = {
  async group(parent, { id }, { firebase }) {
    const doc = await firebase.collection("groups").doc(id).get();
    if (!doc.exists) {
      throw new Error("Group not found");
    }
    return { id: doc.id, ...doc.data() };
  },
  async groups(parent, args, { firebase }) {
    const querySnapshot = await firebase.collection("groups").get();
    const groups = [];
    querySnapshot.forEach((doc) => {
      groups.push({ id: doc.id, ...doc.data() });
    });
    return groups;
  },
};

export default resolvers;
