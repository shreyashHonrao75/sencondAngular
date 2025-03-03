export interface Istd {
    name: string,
    country: string,
    odiDebut: string,
    matches: number,
    runs: number,
    highestScore: number,
    centuries: number,
    fifties: number,
    battingAverage: number,
    wickets: number
}

export interface Istd {
    name: string,
    country: string,
    odiDebut: string,
    matches: number,
    runs: number,
    highestScore: number,
    centuries:number,
    fifties: number,
    battingAverage: number,
    wickets: number
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    role: string
}

export interface ITv {
    id: number,
    title: string,
    director: string,
    year: number
}

export interface Ipro {
    id: number,
    name: string,
    price: number,
    category: string
}

export interface Ioro {
    orderId : number,
    user: string,
    amount: number,
    status: string
}

export interface Iemp {
    id : number,
    name: string,
    department: string,
    salary: number
}

export interface Iboo {
    id : number,
    title: string,
    author: string,
    year: number
}

export interface Istds {
    id : number,
    name: string,
    grade: string,
    age: number
}

export interface Ica {
    id : number,
    brand: string,
    model: string,
    year: number
}

export interface Iex {
    id : number,
    user: string,
    amount: number,
    type: string
}
