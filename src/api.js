const base = 'http://localhost:5000/api';

export const fetchData = async () =>{
    try {
        const response = await fetch("http://127.0.0.1:5000/api/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error',error);
        throw error;
    }
};