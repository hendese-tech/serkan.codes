import {compareDesc, parseISO} from "date-fns";

export function sortBlogs(blogs = []) {
    return blogs.slice().sort((a,b) => {
        return compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    })

}