// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore,getDocs,collection,query,where, getDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYE8X50pPAAJLR-LXPiobKPDFjSZeJtVE",
  authDomain: "proyectoreactjs-32a73.firebaseapp.com",
  projectId: "proyectoreactjs-32a73",
  storageBucket: "proyectoreactjs-32a73.appspot.com",
  messagingSenderId: "730913337176",
  appId: "1:730913337176:web:5a102617ee86c90dcd7f2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app)

export const getProducts = async (categoryId)=>{
    if (categoryId){
        getProductsByCategoryId(categoryId);
    }else{
        return await getAllProducts();
    }
}
export const getProductsByCategoryId = async (categoryId)=>{
    const itemCollection=collection(db,"items");
    const q = query(itemCollection,where("category","==",categoryId))
    return await (getDocs(q))
}
export const getAllProducts = async ()=>{
    const itemCollection=collection(db,"items");
    const q = query(itemCollection)
    return await (getDocs(q))
}
export const getProductById = async (productId) => {
    if (!productId) throw new Error("Missing productId");
    return (await getDoc(doc(db, "items", productId))).data();
};

export const getAllCategorias = async ()=>{
    const categoriasCollection=collection(db,"categorias");
    const q = query(categoriasCollection)
    return await (getDocs(q))
}