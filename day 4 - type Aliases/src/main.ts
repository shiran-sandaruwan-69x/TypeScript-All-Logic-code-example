
// type Aliases -------------------------------------------------------------------------

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Items = {
    itemId?:number | string,
    isActive?:boolean,
    albums:stringOrNumberArray 
}

type UserId = stringOrNumber;

// Literal types -------------------------------------------------------------------------

let myName: 'shiran'
//myName="kasun" mekata shiran vitharai assign karanna puluwan nathnam error

let userName:"amal" | "kamal" | "kasun"
userName="kamal" // mekata assign karanna puluwan uda thiyana name tika vitharai




