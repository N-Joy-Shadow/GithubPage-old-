
export interface propsItem {
    title: string,
    sub: subItem[]
}
export interface subItem {
    subtitle: string,
    subUrl: string
}

export default function Index(posts: any[]) {
    let items: propsItem[] = [];
    let subitems: subItem[] = []
    
    posts.map((x,i)=> {
        const title = x.url.split('/')[3]
        const url = x.url ?? "/";
        const item: subItem = {
            subtitle: x.frontmatter.title,
            subUrl: url
        }
        subitems.push(item)
    })
    let item: propsItem = {
        title: "ae2",
        sub: subitems
    }
    items.push(item)
    return items
}