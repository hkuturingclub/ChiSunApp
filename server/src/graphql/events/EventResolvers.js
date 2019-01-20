import { FirebaseDB } from '../../config/firebase';

const resolvers = {
  async events() {
    const querySnapshot = await FirebaseDB.collection('events').get();
    const events = [];
    querySnapshot.forEach(doc => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return events;
  },
};

export default resolvers;
