// import { useState, useEffect } from "react";

// function useLocalStorage(key, init) {
//   const [data, setData] = useState(() => {
//     const localValue = localStorage.getItem(key) || ""; //kita coba ambil nilai dengan getItem untuk nilai awal kalo ga ada kita pake string kosong 
//     if (localValue.length === 0) { //localStorage ada nilainya ga?
//       if (init instanceof Function) return init(); // kalo init adalah sebuah fungsi maka kita jalankan fungsi tersebut
//       return init; // kalo bukan kita return nilai init
//     }
//     return JSON.parse(localValue); // kalo di localStorage ada nilai, maka kita parsing
//   });

//   useEffect(() => {
//     const newValue = JSON.stringify(data); // setiap kali data berubah, maka kita ubah menjadi string
//     localStorage.setItem(key, newValue); // lalu simpan ke localStorage
//   }, [data]);

//   return [data, setData];
// }

// export default useLocalStorage;


