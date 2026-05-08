type Category="Food" | "Travel" | "Bills" | "Health" | "Leisure"

export interface Expense{
    id:number,
    title:string,
    amount:number,
    category:Category
}