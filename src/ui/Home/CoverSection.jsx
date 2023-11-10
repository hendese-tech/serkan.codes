import { sortBlogs } from "@/lib/utils";
import Image from "next/image";


export default function CoverSection({posts}) {
    const sortedBlogs = sortBlogs(posts);
    const blog = sortedBlogs[0];
    console.log(blog);
    return (
        <section className="w-full inline-block"> 
            <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
                <Image src={blog.image.filePath.replace('../../../public', '')} 
                    placeholder="blur" 
                    blurDataURL={blog.image.blurhashDataUrl} 
                    alt={blog.title} 
                    fill 
                    className="w-full h-full object-center object-cover rounded-3xl"
                    />
            </article>

        </section>
    )
}