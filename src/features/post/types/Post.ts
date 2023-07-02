import { type } from "os"

export type image ={
        created_at:Date,
        id:number,
        name:string,
        path:string,
        post_id:number,
        updated_at:Date
}
export interface Post {
        id:number
        title: string
        prefecture: string
        content: string
        time: Date | string
        image?:image[]
}
