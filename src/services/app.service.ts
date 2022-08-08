import {Quote} from "../entities/Quote";

export async function fetchQuote(): Promise<Quote> {
    return await fetch('http://host.docker.internal:8080/quotes/random')
        .then(res => res.json())
        .then(res => {
            return res as Quote
        });
}