const resolvers = {
  async event(parent, { id }, { firebase }) {
    const doc = await firebase
      .collection('events')
      .doc(id)
      .get();
    if (!doc.exists) {
      throw new Error('Event not found');
    }
    return { id: doc.id, ...doc.data() };
  },
  async events(parent, args, { firebase }) {
    const querySnapshot = await firebase.collection('events').get();
    const events = [];
    querySnapshot.forEach(doc => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return events;
  },
};

export default resolvers;
