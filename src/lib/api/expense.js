import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5000";

export const getExpenses = async () => {
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
        return response.data;
    } catch (error) {
        alert('오류발생')
    }
};

export const getExpense = async ({ queryKey }) => {
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}/expenses/${queryKey[1]}`);
        return response.data;
    } catch (error) {
        alert('오류발생')
    }
};

export const postExpense = async (newExpense) => {
    try {
        /* const response = await axios.post(`${JSON_SERVER_HOST}/expenses`, newExpense);
        return response.data; */

        const { data } = await axios.post(`${JSON_SERVER_HOST}/expenses`, newExpense);
        return data;

    } catch (error) {
        console.log(error);
        console.log('데이터가 써지지않아요');
    }
};

export const putExpense = async (updatedExpense) => {
    const {id, ...rest} = updatedExpense;
    try {
        const { data } = await axios.put(`${JSON_SERVER_HOST}/expenses/${id}`, rest);
        return data;
    } catch (error) {
        console.log(error);
        console.log('수정 되지않아요');
    }
};

export const deletePost = async (id) => {
    try {
        const { data } = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        console.log('삭제 되지않아요');
    }
};