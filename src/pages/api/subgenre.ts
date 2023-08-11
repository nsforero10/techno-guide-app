import { query, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { SubgenreType } from "@/interfaces/subgenre";
import { NextApiRequest, NextApiResponse } from "next";

const subgenreRef = collection(db, "genre");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response: SubgenreType[] = [];
  try {
    const q = query(subgenreRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const subgenre = doc.data() as SubgenreType;
      subgenre.id = doc.id;
      response.push(subgenre);
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    return;
  }
  res.status(200).json(response);
}

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json({ name: "John Doe" });
// }
