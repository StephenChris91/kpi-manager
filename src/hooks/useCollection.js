import { db } from "../firebase/config";
import { useState, useEffect } from "react";

//firebase

import { collection, onSnapshot } from "react-firebase-hooks/firestore";

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const ref = collection(db, c);

    onSnapshot(ref, (snapshot) => {
      let results = [];
      const unsub = snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
};
