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
    events.sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate));
    return events;
  },
  async createEvent(parent,{ data: { name, description, location, startDate }},{ firebase }) {
    try {
      const docRef = await firebase.collection('events')
        .add({
          name: name,
          description: description,
          location: location,
          startDate: startDate,
          image: "https://miro.medium.com/max/2400/1*ROMNkf5Sr0dtaxZQRzmG8Q.png",
          status: "processing"
        })
      const event = (await docRef.get()).data();
      return {
        id: docRef.id,
        ...event
      }
    } catch (e) {
      console.log(e)
    }
  }
};

export default resolvers;
  