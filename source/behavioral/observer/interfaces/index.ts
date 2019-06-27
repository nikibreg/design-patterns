export interface Publisher {
    actions: Subscriber[];
}

export interface Subscriber {
    update(publisher: Publisher): any;   
}