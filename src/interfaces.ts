export interface Point112D {
    x: number;
    y: number;  
}

// use two or more interfaces into one
export interface Point3D extends Point112D {
    z: number;
}

export interface Request {
  body: any
}

export interface Request {
  json: any
}