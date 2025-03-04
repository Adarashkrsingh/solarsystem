import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./config";

const CONFIGS_COLLECTION = "configurations";

export const saveConfiguration = async (configData) => {
  try {
    const docRef = await addDoc(collection(db, CONFIGS_COLLECTION), {
      ...configData,
      timestamp: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving configuration:", error);
    throw error;
  }
};

export const loadConfigurations = async () => {
  try {
    const q = query(
      collection(db, CONFIGS_COLLECTION),
      orderBy("timestamp", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error loading configurations:", error);
    throw error;
  }
};
