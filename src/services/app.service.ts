import {Quote} from "../entities/Quote";

function getQuote(url: string): Promise<Quote> {
    return fetch('http://host.docker.internal:8080/quotes/random')
        .then(res => res.json())
        .then(res => {
            return res as Quote
        })
}