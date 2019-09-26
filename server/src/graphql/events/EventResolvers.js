const resolvers = {
  async event(parent, { id }, { firebaseDB }) {
    const doc = await firebaseDB
      .collection('events')
      .doc(id)
      .get();
    if (!doc.exists) {
      throw new Error('Event not found');
    }
    return { id: doc.id, ...doc.data() };
  },
  async events(parent, args, { firebaseDB }) {
    const querySnapshot = await firebaseDB.collection('events').get();
    const events = [];
    querySnapshot.forEach(doc => {
      events.push({ id: doc.id, ...doc.data() });
    });
    events.sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate));
    return events;
  },
};

export default resolvers;
