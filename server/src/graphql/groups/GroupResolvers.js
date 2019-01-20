import { FirebaseDB } from '../../config/firebase';

const resolvers = {
  async groups() {
    const querySnapshot = await FirebaseDB.collection('groups').get();
    const groups = [];
    querySnapshot.forEach(doc => {
      groups.push({ id: doc.id, ...doc.data() });
    });
    return groups;
  },
};

export default resolvers;
